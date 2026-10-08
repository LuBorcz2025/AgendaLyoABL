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

function Home() {
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
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
            </main>
        </div>
    );
}

export default Home;