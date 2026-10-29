import { useNavigate } from "react-router-dom";
import {
    Check,
    Sparkles,
    MessageCircle,
    CalendarPlus,
    Heart,
    PawPrint,
} from "lucide-react";
import './index.css';
import PetBackground from "../../components/PetBackground";
import Sidebar from "../../components/Sidebar";
import lyo from "../../assets/lyo-purple-star.png"

export default function Premium() {
    const navigate = useNavigate();

    const beneficiosGratuitos = [
        "Cadastre e gerencie seus pets",
        "Organize a agenda de cuidados",
        "Acompanhe seus lembretes",
        "Receba sugestões da Lyo",
        "Visualize compromissos e informações dos pets",
    ];

    const beneficiosPremium = [
        "Tudo o que o plano gratuito oferece",
        "Converse com a Lyo por um chat interativo",
        "Crie lembretes diretamente pelas recomendações da Lyo",
        "Receba orientações personalizadas para a rotina dos seus pets",
        "Tenha uma experiência ainda mais prática com sua assistente",
    ];

    return (
        <div className="premium-layout">
            <PetBackground />
            <Sidebar />

            <main className="premium-page">

                <header className="pets-page-header">
                    <div className="pets-page-heading">
                        <span className="pets-eyebrow">
                            <div className="header-square">
                                <Sparkles size={28} strokeWidth={1.8} fill="currentColor" />
                            </div>
                            A EXPERIÊNCIA AGENDA PETCARE
                        </span>

                        <h1>Cuide de quem você ama com a Lyo</h1>

                        <p>
                            Escolha o plano ideal para organizar os cuidados do seu pet e
                            aproveitar tudo o que sua assistente pode oferecer.
                        </p>
                    </div>

                    <div className="premium-mascot">
                        <img src={lyo} alt="Lyo, sua assistente pet" />
                        
                        <span className="premium-mascot-decoration">
                            <Heart size={17} fill="currentColor" />
                        </span>
                    </div>
                </header>

                <section className="premium-plans">
                    <article className="premium-plan premium-plan-free">
                        <div className="premium-plan-top">
                            <div className="premium-plan-header">
                                <div className="premium-plan-icon free-icon">
                                    <PawPrint size={26} strokeWidth={1.6} fill="currentColor" />
                                </div>
                                <div className="premium-plan-three-texts">
                                    <span className="premium-plan-label">Para começar</span>
                                    <h2>Gratuito</h2>
                                    <p className="premium-plan-description">
                                        O essencial para cuidar bem do seu pet.
                                    </p>
                                </div>
                            </div>

                            <div className="premium-price">
                                <strong>R$ 0</strong>
                                <span>para sempre</span>
                            </div>


                            <button
                                type="button"
                                className="premium-plan-button free-button"
                                onClick={() => navigate("/home")}
                            >
                                Continuar gratuitamente
                            </button>
                        </div>

                        <div className="premium-benefits">
                            <h3>O que está incluído</h3>

                            <ul>
                                {beneficiosGratuitos.map((beneficio) => (
                                    <li key={beneficio}>
                                        <span className="premium-check free-check">
                                            <Check size={13} />
                                        </span>
                                        <span>{beneficio}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>

                    <article className="premium-plan premium-plan-pro">
                        <div className="premium-popular">
                            <Sparkles size={13} fill="currentColor" />
                            Mais possibilidades com a Lyo
                        </div>

                        <div className="premium-plan-top">
                            <div className="premium-plan-header">
                                <div className="premium-plan-icon free-icon">
                                    <Sparkles size={26} strokeWidth={1.6} fill="currentColor"/>
                                </div>
                                <div className="premium-plan-three-texts">
                                    <span className="premium-plan-label">Uma experiência ampliada</span>
                                    <h2>Premium <span>+</span></h2>
                                    <p className="premium-plan-description">
                                        Mais praticidade e uma Lyo ainda mais próxima de você.
                                    </p>
                                </div>
                            </div>

                            <div className="premium-price">
                                <strong>Em breve</strong>
                                <span>novidades a caminho</span>
                            </div>

                            <button
                                type="button"
                                className="premium-plan-button pro-button"
                                onClick={() =>
                                    window.dispatchEvent(
                                        new CustomEvent("lyo:premium-unavailable")
                                    )
                                }
                            >
                                <Sparkles size={16} />
                                Quero conhecer o Premium
                            </button>

                            <p className="premium-button-caption">
                                Estamos preparando essa experiência para você.
                            </p>
                        </div>

                        <div className="premium-benefits">
                            <h3>Tudo do gratuito, e mais:</h3>

                            <ul>
                                {beneficiosPremium.map((beneficio, index) => (
                                    <li key={beneficio}>
                                        <span className="premium-check pro-check">
                                            <Check size={13} />
                                        </span>
                                        <span>{beneficio}</span>

                                        {index === 1 && (
                                            <MessageCircle
                                                className="premium-benefit-icon"
                                                size={16}
                                            />
                                        )}

                                        {index === 2 && (
                                            <CalendarPlus
                                                className="premium-benefit-icon"
                                                size={16}
                                            />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                </section>

                <footer className="premium-footer">
                    <Heart size={15} fill="currentColor" />
                    <span>
                        Mais cuidado, organização e carinho em cada momento com seu pet.
                    </span>
                </footer>
            </main>
        </div>
    );
}