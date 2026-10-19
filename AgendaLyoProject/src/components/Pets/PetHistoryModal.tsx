
import { useEffect } from "react";
import {
    X,
    History,
    Scale,
    Syringe,
    Stethoscope,
    Scissors,
    Pill,
} from "lucide-react";
import "./PetHistoryModal.css";
import type { Pet } from "./petsMock";

interface PetHistoryModalProps {
    pet: Pet | null;
    onClose: () => void;
}

function formatarData(data?: string): string {
    if (!data) return "Não informada";

    const dataValida = new Date(`${data.slice(0, 10)}T12:00:00`);

    return Number.isNaN(dataValida.getTime())
        ? "Não informada"
        : dataValida.toLocaleDateString("pt-BR");
}

export function PetHistoryModal({
    pet,
    onClose,
}: PetHistoryModalProps) {
    useEffect(() => {
        if (!pet) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") onClose();
        }

        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [pet, onClose]);

    if (!pet) return null;

    const registros = [
        ...pet.historicoPesos.map((item) => ({
            id: item.id,
            tipo: "peso",
            data: item.data,
            titulo: "Pesagem registrada",
            descricao: `${item.peso} kg`,
            detalhe: item.observacao,
        })),

        ...pet.historicoVacinas.map((item) => ({
            id: item.id,
            tipo: "vacina",
            data: item.dataAplicacao,
            titulo: item.nomeVacina,
            descricao: `Aplicada em ${formatarData(item.dataAplicacao)}`,
            detalhe: item.proximaDose
                ? `Próxima dose: ${formatarData(item.proximaDose)}`
                : item.observacao,
        })),

        ...pet.historicoConsultas.map((item) => ({
            id: item.id,
            tipo: "consulta",
            data: item.data,
            titulo: "Consulta veterinária",
            descricao: item.descricao || "Consulta registrada",
            detalhe: [
                item.veterinario ? `Veterinário: ${item.veterinario}` : "",
                item.clinicaHospital ? `Local: ${item.clinicaHospital}` : "",
            ]
                .filter(Boolean)
                .join(" • "),
        })),

        ...pet.historicoCirurgiasRegistros.map((item) => ({
            id: item.id,
            tipo: "cirurgia",
            data: item.data,
            titulo: "Cirurgia registrada",
            descricao: item.descricao,
            detalhe: item.observacao,
        })),

        ...pet.historicoMedicamentos.map((item) => ({
            id: item.id,
            tipo: "medicamento",
            data: item.dataInicio,
            titulo: item.nome,
            descricao: item.ativo ? "Em uso" : "Uso encerrado",
            detalhe: item.observacao,
        })),
    ].sort((a, b) => b.data.localeCompare(a.data));

    const icones = {
        peso: <Scale size={19} />,
        vacina: <Syringe size={19} />,
        consulta: <Stethoscope size={19} />,
        cirurgia: <Scissors size={19} />,
        medicamento: <Pill size={19} />,
    };

    return (
        <div
            className="pet-history-overlay"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section
                className="pet-history-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="pet-history-title"
            >
                <header className="pet-history-modal-header">
                    <div className="pet-history-modal-heading">
                        <div className="pet-history-modal-avatar">
                            <History size={23} />
                        </div>

                        <div>
                            <span>ACOMPANHAMENTO</span>
                            <h2 id="pet-history-title">
                                Histórico de {pet.nome}
                            </h2>
                            <p>Registros de saúde e cuidados</p>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="pet-history-close"
                        onClick={onClose}
                        aria-label="Fechar histórico"
                        autoFocus
                    >
                        <X size={21} />
                    </button>
                </header>

                <div className="pet-history-modal-body">
                    {registros.length === 0 ? (
                        <div className="pet-history-modal-empty">
                            <History size={36} />
                            <h3>Nenhum registro ainda</h3>
                            <p>
                                Os registros de peso, vacinas e consultas
                                aparecerão aqui quando forem cadastrados.
                            </p>
                        </div>
                    ) : (
                        <div className="pet-history-timeline">
                            {registros.map((registro) => (
                                <article
                                    className="pet-history-record"
                                    key={`${registro.tipo}-${registro.id}`}
                                >
                                    <div
                                        className={`pet-history-record-icon ${registro.tipo}`}
                                    >
                                        {icones[registro.tipo as keyof typeof icones]}
                                    </div>

                                    <div className="pet-history-record-content">
                                        <div className="pet-history-record-heading">
                                            <h3>{registro.titulo}</h3>
                                            <time dateTime={registro.data}>
                                                {formatarData(registro.data)}
                                            </time>
                                        </div>

                                        <p>{registro.descricao}</p>

                                        {registro.detalhe && (
                                            <span>{registro.detalhe}</span>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>

                <footer className="pet-history-modal-footer">
                    <span>{registros.length} registros</span>
                    <button
                        type="button"
                        className="pet-history-footer-button"
                        onClick={onClose}
                    >
                        Fechar
                    </button>
                </footer>
            </section>
        </div>
    );
}
