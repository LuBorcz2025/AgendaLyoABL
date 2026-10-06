import {
    Bell,
    Check,
    Lock,
    MessageCircle,
    Sparkles,
} from 'lucide-react';
import lyo from '../../../assets/lyo-surprise.png';
import './index.css';

function FirstSection() {
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
                        <p>Vacina vence amanhã!</p>
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
                            src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=100"
                            alt=""
                        />
                        <span className="more-pets">
                            +1
                        </span>
                    </div>

                    <button type="button" className="view-all-button">
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
                        <Sparkles size={24} fill="currentColor" />
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
                    >
                        Ver mais
                    </button>

                    <div className="talk-lyo-field">
                        <span>Converse com Lyo</span>

                        <div className="locked-icon" aria-label="Conversa protegida">
                            <Lock size={16} />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default FirstSection;