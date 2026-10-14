import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import FirstSection from "../../components/Home/FirstSection";
import './index.css';
import {
    PawPrint,
} from 'lucide-react';
import PetBackground from "../../components/PetBackground";
import SecondSection from "../../components/Home/SecondSection";
import ThirdSection from "../../components/Home/ThirdSection";
import FourthSection from "../../components/Home/FourthSection";
import FifthSection from "../../components/Home/FifthSection";
import lyo from "../../assets/lyo-start.png"
import LyoHubModal from "../../components/LyoHubModal";

function Home() {
    const firstSectionRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLElement>(null);
    const [mostrarLyo, setMostrarLyo] = useState(false);
    const [lyoModalAberto, setLyoModalAberto] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const section = firstSectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setMostrarLyo(!entry.isIntersecting);
            },
            {
                threshold: 0,
            }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="home-layout">
            <PetBackground />
            <Sidebar />

            <main className="home-content">
                <header className="home-header">
                    <div className="header-square">
                        <PawPrint size={28} strokeWidth={1.8} fill="currentColor" />
                    </div>
                    <div className="header-texts">
                        <h1 className="home-header-title">Olá, Luiza!</h1>
                        <p className="home-header-text">Veja como seus pets estão hoje.</p>
                    </div>
                </header>

                {/* As seções da Home serão adicionadas aqui. */}
                <div ref={firstSectionRef}>
                    <FirstSection onVerMaisLyo={() => setLyoModalAberto(true)} />
                </div>
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <FifthSection />
            </main>

            {mostrarLyo && !lyoModalAberto && (
                <button
                    type="button"
                    className="lyo-floating-button"
                    onClick={() => setLyoModalAberto(true)}
                    aria-label="Abrir o hub da Lyo"
                    title="Converse com a Lyo"
                >
                    <img src={lyo} alt="" />
                </button>
            )}

            <LyoHubModal
                isOpen={lyoModalAberto}
                onClose={() => setLyoModalAberto(false)}
            />
        </div>
    );
}

export default Home;