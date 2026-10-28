import { CircleAlert, X } from "lucide-react";
import "./index.css";

interface LoginErrorModalProps {
    isOpen: boolean;
    mensagem: string;
    onClose: () => void;
}

export default function LoginErrorModal({
    isOpen,
    mensagem,
    onClose,
}: LoginErrorModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="login-error-overlay"
            onClick={onClose}
        >
            <div
                className="login-error-modal"
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="login-error-title"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="login-error-close"
                    onClick={onClose}
                    aria-label="Fechar"
                >
                    <X size={20} />
                </button>

                <div className="login-error-icon">
                    <CircleAlert size={30} strokeWidth={1.8} />
                </div>

                <h2 id="login-error-title">
                    Ops! Algo deu errado
                </h2>

                <p>{mensagem}</p>

                <button
                    type="button"
                    className="login-error-button"
                    onClick={onClose}
                >
                    Tentar novamente
                </button>
            </div>
        </div>
    );
}