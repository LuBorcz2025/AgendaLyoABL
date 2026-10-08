import './index.css';
import {
    PawPrint,
    ChevronRight,
    Plus,
} from "lucide-react";
import { Link } from 'react-router-dom';
import lyo from '../../../assets/lyo-question-face-2.png'

type Pet = {
    name: string;
    breed: string;
    src: string;
    active?: boolean;
};

const pets: Pet[] = [
    {
        name: "Thor",
        breed: "Vira-lata",
        src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=100",
    },
    {
        name: "Luna",
        breed: "Golden retriever",
        src: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=200",
        active: true,
    },
    {
        name: "Mel",
        breed: "SRD",
        src: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=100",
    },
];

const pets1: Pet[] = [];

function FourthSection() {
    return (
        <section className="fourth-section" >
            <article className="pet-card">
                <div className="header-card-pet">
                    <div className="header-title-pet">
                        <PawPrint size={20} strokeWidth={2.5} />
                        <h2>Meus pets</h2>
                    </div>

                    <div className="header-title-pet">
                        <Link
                            to="/login"
                            className="see-all-button"
                        >
                            Mais detalhes
                        </Link>
                        <ChevronRight size={18} strokeWidth={2.5} />
                    </div>
                </div>

                <div className="pets-list">
                    {pets.length === 0 ? (
                        <div className="pets-empty-state">
                            <img src={lyo} alt="Lyo, sua assistente virtual" />

                            <div className="pets-empty-text">
                                <strong>Ops! Ainda não temos pets por aqui.</strong>
                                <span>
                                    Que tal cadastrar seu primeiro pet para começarmos
                                    a cuidar dele juntos?
                                </span>
                                <Link to="/login" className="pets-register-button">
                                    Cadastrar pet
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <>
                            {pets.slice(0, 4).map((pet) => (
                                <button
                                    type="button"
                                    className={`pet-item ${pet.active ? "active" : ""}`}
                                    key={pet.name}
                                >
                                    <div className="pet-image-wrapper">
                                        <img
                                            src={pet.src}
                                            alt={pet.name}
                                            className="pet-image"
                                        />
                                        <span className="pet-status" />
                                    </div>

                                    <strong>{pet.name}</strong>
                                    <span>{pet.breed}</span>
                                </button>
                            ))}

                            <Link to="/login" className="add-pet">
                                <div className="add-pet-circle">
                                    <Plus size={22} strokeWidth={1.4} />
                                </div>

                                <strong>Adicionar pet</strong>
                                <span>Novo perfil</span>
                            </Link>
                        </>
                    )}
                </div>
            </article>
        </section>
    )
}

export default FourthSection;