
import { useEffect, useState } from "react";
import {
    X,
    RotateCw,
    ArrowRight,
} from "lucide-react";
import "./index.css";
import lyo from "../../assets/lyo-happy-edited.png";
import { sortearSugestoes, type Sugestao } from "./sugestoes";

export interface LyoHubModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LyoHubModal({
    isOpen,
    onClose,
}: LyoHubModalProps) {

    const [sugestoesExibidas, setSugestoesExibidas] = useState<Sugestao[]>(() =>
        sortearSugestoes(4),
    );

    const recarregarSugestoes = () => {
        setSugestoesExibidas((atuais) =>
            sortearSugestoes(4, atuais.map((s) => s.id)),
        );
    };
    
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="lyo-modal-overlay"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <section
                className="lyo-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="lyo-modal-title"
            >
                <button
                    type="button"
                    className="lyo-modal-close reload"
                    onClick={recarregarSugestoes}
                    aria-label="Fechar sugestões da Lyo"
                >
                    <RotateCw size={18} />
                </button>

                <button
                    type="button"
                    className="lyo-modal-close"
                    onClick={onClose}
                    aria-label="Fechar sugestões da Lyo"
                >
                    <X size={18} />
                </button>

                <header className="lyo-modal-header">
                    <div className="lyo-modal-mascot">
                        <img src={lyo} alt="" />
                    </div>

                    <div className="lyo-modal-heading">
                        <h2 id="lyo-modal-title">
                            Olá! Eu sou <span>Lyo</span>
                        </h2>

                        <p>
                            Aqui está o que eu encontrei para hoje!
                        </p>
                    </div>
                </header>

                <div className="lyo-modal-list">
                    {sugestoesExibidas.map((sugestao) => {
                        const Icone = sugestao.icone;

                        return (
                            <article
                                key={sugestao.id}
                                className={`modal-lyo-suggestion lyo-${sugestao.categoria}`}
                            >
                                <div className="modal-lyo-suggestion-icon">
                                    <Icone size={21} strokeWidth={2} />
                                </div>

                                <div className="modal-lyo-suggestion-content">
                                    <span className="modal-lyo-suggestion-pet">
                                        {sugestao.pet}
                                    </span>

                                    <h3>{sugestao.titulo}</h3>

                                    <p>{sugestao.descricao}</p>
                                </div>

                                <button
                                    type="button"
                                    className="modal-lyo-suggestion-action"
                                    onClick={() => {
                                        // As ações serão conectadas às telas
                                        // correspondentes posteriormente.
                                    }}
                                >
                                    <span>{sugestao.acao}</span>
                                    <ArrowRight size={16} strokeWidth={2.5} color="#fff" />
                                </button>
                            </article>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
