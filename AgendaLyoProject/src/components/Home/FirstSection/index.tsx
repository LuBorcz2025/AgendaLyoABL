import {
    Bell,
    Check,
    Lock,
    MessageCircle,
    Sparkles,
} from 'lucide-react';
import lyo from '../../../assets/lyo-surprise.png';
import './index.css';
import PremiumModal from '../../PremiumModal';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FirstSectionProps {
    onVerMaisLyo: () => void;
}

function FirstSection({ onVerMaisLyo }: FirstSectionProps) {
    const [premiumModalOpen, setPremiumModalOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <section className="first-section">

            {/* =========================
                CARD — ATENÇÃO
            ========================== */}
            <article className="attention-card">
                <div className="attention-header">
                    <div className="section-icon ">
                        <Bell size={24} fill="currentColor" />
                    </div>
                    <div>
                        <h2>ATENÇÃO</h2>
                        <p>Cuidados que precisam da sua atenção.</p>
                    </div>
                </div>

                <div className="attention-pet">
                    <div className="pet-photo">
                        <img
                            src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=200"
                            alt="Luna"
                        />
                    </div>
                    <div className="pet-attention-info">
                        <span className="attention-status">
                            PENDENTE
                        </span>
                        <h3>Luna</h3>
                        <p>Vencimento da vacina antirrábica.</p>
                    </div>
                </div>

                <div className="attention-footer">
                    <div className="pet-avatars">
                        <span className="check-icon">
                            <Check size={10} strokeWidth={3} />
                        </span>
                        <img
                            src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=100"
                            alt=""
                        />
                        <img
                            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=100"
                            alt=""
                        />
                        <img
                            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200"
                            alt=""
                        />
                        <span className="more-pets">
                            +1
                        </span>
                    </div>

                    <button type="button" className="view-all-button" onClick={() => {navigate("/pets")}}>
                        Ver todos
                    </button>
                </div>
            </article>


            {/* =========================
                CARD — SUGESTÕES DA LYO
            ========================== */}
            <article className="lyo-suggestions-card">
                <div className="lyo-suggestions-header">
                    <div className="section-icon lyo-icon">
                        <Sparkles size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h2>SUGESTÕES DA LYO</h2>
                        <p>
                            Ideias personalizadas para o bem-estar dos seus pets.
                        </p>
                    </div>
                </div>

                <div className="lyo-suggestion">
                    <div className="suggestion-text">
                        <MessageCircle
                            size={30}
                            className="quote-icon"
                            fill="currentColor"
                        />
                        <p>
                            A vacina da Luna vence amanhã! Que tal
                            agendarmos uma consulta com o veterinário?
                        </p>
                    </div>
                    <img
                        src={lyo}
                        alt="Lyo"
                        className="lyo-suggestion-image"
                    />
                </div>

                <div className="lyo-suggestion-footer">
                    <button
                        type="button"
                        className="see-more-button"
                        onClick={() => onVerMaisLyo()}
                    >
                        Ver mais
                    </button>

                    <div className="talk-lyo-field">
                        <span>Converse com Lyo</span>

                        <button className="locked-icon" type="button" onClick={() => setPremiumModalOpen(true)}>
                            <Lock size={16} />
                        </button>
                    </div>
                </div>
            </article>

            <PremiumModal
                isOpen={premiumModalOpen}
                funcionalidade="Conversar com a Lyo"
                imagemLyo={lyo}
                onClose={() => setPremiumModalOpen(false)}
                isPremium={true}
            />
        </section>
    );
}

export default FirstSection;