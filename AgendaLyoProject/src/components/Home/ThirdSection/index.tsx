import './index.css';
import {
    Zap,
    PawPrint,
    ChevronRight,
    CalendarPlus,
    Clock3,
    Sparkles,
    LockKeyhole,
} from "lucide-react";
import { Link } from 'react-router-dom';

function ThirdSection() {
    return (
        <section className='third-section'>
            <article className="actions-card">
                <div className="header-card">
                    <div className="header-title">
                        <Zap size={20} strokeWidth={2.5} />
                        <h2>Ações rápidas</h2>
                    </div>

                    <button
                        type="button"
                        className="customize-button"
                    >
                         
                    </button>
                </div>

                <div className='content-actions'>
                    <Link to="/home" className="action-card">
                        <div className="action-icon action-icon-pet">
                            <PawPrint size={22} strokeWidth={2.2} />
                        </div>

                        <span>Cadastrar novo pet</span>

                        <ChevronRight
                            className="action-arrow"
                            size={18}
                            strokeWidth={1.8}
                        />
                    </Link>

                    <Link to="/home" className="action-card">
                        <div className="action-icon action-icon-reminder">
                            <CalendarPlus size={22} strokeWidth={2.2} />
                        </div>

                        <span>Novo lembrete</span>

                        <ChevronRight
                            className="action-arrow"
                            size={18}
                            strokeWidth={1.8}
                        />
                    </Link>

                    <Link to="/home" className="action-card">
                        <div className="action-icon action-icon-consultation">
                            <Clock3 size={22} strokeWidth={2.2} />
                        </div>

                        <span>Ativar lembretes</span>

                        <ChevronRight
                            className="action-arrow"
                            size={18}
                            strokeWidth={1.8}
                        />
                    </Link>

                    <button
                        type="button"
                        className="action-card action-card-lyo"
                    >
                        <Sparkles
                            className="lyo-sparkle"
                            size={26}
                            strokeWidth={2.2}
                        />

                        <div className="lyo-action-text">
                            <strong>Pergunte à Lyo</strong>
                            <span>"Lyo, quando devo..."</span>
                        </div>

                        <span className="talk-lyo-button">
                            Conversar
                            <LockKeyhole size={16} strokeWidth={2} />
                        </span>
                    </button>
                </div>
            </article>
        </section>
    )
}

export default ThirdSection;