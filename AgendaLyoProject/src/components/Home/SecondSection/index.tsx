import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/react/daygrid";
import interactionPlugin from "@fullcalendar/react/interaction";
import "@fullcalendar/react/skeleton.css";
import WeatherCard from "../../WeatherCard";
import './index.css';

const toKey = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

const EVENTS: Record<string, string[]> = {
    "2026-10-02": ["Reunião de equipe"],
    "2026-10-06": ["Consulta às 14h"],
    "2026-10-09": ["Entrega do projeto"],
    "2026-10-15": ["Aniversário da Ana"],
    "2026-10-22": ["Apresentação"],
    "2026-10-28": ["Dentista"],
};

const isWeekend = (d: Date) => d.getDay() === 0 || d.getDay() === 6;

function SecondSection() {
    const [selectedKey, setSelectedKey] = useState<string | null>(null);

    const handleDateClick = (info: { dateStr: string }) => {
        setSelectedKey(info.dateStr);
    };

    return (
        <section className="second-section">
            {/* =========================
                CARD — CALENDÁRIO
            ========================== */}
            <article className="calendar-card">
                <div className="calendar-header">
                    <span className="calendar-label">CALENDÁRIO</span>
                    <h2>Seus compromissos</h2>
                </div>

                <div className="calendar-container">
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        initialDate="2026-10-01"
                        locale="pt-br"
                        height="auto"
                        fixedWeekCount={false}
                        showNonCurrentDates={false}
                        dateClick={handleDateClick}

                        /* cabeçalho:  <  outubro 2026  >  */
                        headerToolbar={{ start: "prev", center: "title", end: "next" }}
                        buttons={{
                            prev: { text: "‹", display: "text", hint: "Mês anterior" },
                            next: { text: "›", display: "text", hint: "Próximo mês" },
                        }}
                        titleFormat={(arg: { date: { marker: Date } }) => {
                            const d = arg.date.marker;
                            const mes = new Intl.DateTimeFormat("pt-BR", {
                                month: "long",
                                timeZone: "UTC",
                            }).format(d);
                            return `${mes} ${d.getUTCFullYear()}`;
                        }}
                        dayHeaderFormat={{ weekday: "short" }}

                        /* classes (substituem os antigos .fc-*) */
                        toolbarClass="calendar-toolbar"
                        toolbarSectionClass="calendar-toolbar-section"
                        toolbarTitleClass="calendar-title"
                        buttonClass="calendar-nav-btn"
                        dayHeaderClass="calendar-weekday"
                        dayHeaderInnerClass={(info) =>
                            isWeekend(info.date)
                                ? "calendar-weekday-inner calendar-weekday-inner--weekend"
                                : "calendar-weekday-inner"
                        }
                        dayCellClass="calendar-cell"
                        dayCellTopClass="calendar-day-top"
                        dayCellTopInnerClass={(info) =>
                            [
                                "calendar-day",
                                isWeekend(info.date) && "calendar-day--weekend",
                                EVENTS[toKey(info.date)] && "calendar-day--event",
                                info.isToday && "calendar-day--today",
                                toKey(info.date) === selectedKey && "calendar-day--selected",
                            ]
                                .filter(Boolean)
                                .join(" ")
                        }
                    />
                </div>
            </article>

            {/* =========================
                CARD — CLIMA/API
            ========================== */}
            <WeatherCard city="Curitiba" />
        </section>
    );
}

export default SecondSection;