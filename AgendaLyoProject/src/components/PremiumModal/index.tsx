import './index.css';
import {
    X,
} from "lucide-react";

interface PremiumModalProps {
    isOpen: boolean;
    funcionalidade: string;
    imagemLyo: string;
    onClose: () => void;
    isPremium: boolean;
}

export default function PremiumModal({
    isOpen,
    funcionalidade,
    imagemLyo,
    onClose,
    isPremium
}: PremiumModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="premium-modal-overlay"
            onClick={onClose}
        >
            <div
                className="premium-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="premium-modal-title"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="premium-modal-close"
                    onClick={onClose}
                    aria-label="Fechar modal"
                >
                    <X size={18} />
                </button>

                <div className="premium-modal-image">
                    <img
                        src={imagemLyo}
                        alt="Lyo, mascote do Agenda PetCare"
                    />
                </div>

                <span className="premium-modal-badge">
                    ✨ RECURSO PREMIUM
                </span>

                {isPremium ? (
                    <h2 id="premium-modal-title">
                        Essa função é Premium!
                    </h2>
                ) : (
                    <h2 id="premium-modal-title">
                        Função indisponível!
                    </h2>
                )}

                {isPremium ? (
                    <>
                        <p className="premium-modal-description">
                            A funcionalidade <strong>{funcionalidade}</strong>{" "}
                            está disponível exclusivamente no modo Premium
                            do Agenda PetCare.
                        </p>

                        <p className="premium-modal-message">
                            Com o Premium, você e seu pet podem aproveitar
                            ainda mais recursos para cuidar de cada detalhe
                            dessa amizade!
                        </p>
                    </>
                ) : (
                    <>
                        <p className="premium-modal-description">
                            A funcionalidade <strong>{funcionalidade}</strong>{" "}
                            ainda não está disponível.
                        </p>

                        <p className="premium-modal-message">
                            Estamos trabalhando para trazer essa
                            novidade para você e seu pet em breve!
                        </p>
                    </>
                )}

                <button
                    type="button"
                    className="premium-modal-button"
                    onClick={onClose}
                >
                    Entendi
                </button>
            </div>
        </div>
    );
}