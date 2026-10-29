
import { useMemo, useState } from "react";
import { PawPrint, Plus, Search, SlidersHorizontal, MessageSquareHeart  } from "lucide-react";

import type { Pet } from "../../components/Pets/petsMock";
import { petsMock } from "../../components/Pets/petsMock";
import { PetSelector } from "../../components/Pets/PetSelector";
import { PetProfile } from "../../components/Pets/PetProfile";
import { PetHistoryModal } from "../../components/Pets/PetHistoryModal";
import Sidebar from "../../components/Sidebar";
import PetBackground from "../../components/PetBackground";
import PremiumModal from "../../components/PremiumModal";
import "./index.css";
import lyo from '../../assets/lyo-start.png';

interface PetsProps {
    onAddPet?: () => void;
    onEditPet?: (pet: Pet) => void;
}

export default function Pets({
    //onAddPet,
    onEditPet,
}: PetsProps) {

    const [premiumModalOpen, setPremiumModalOpen] = useState(false);

    const [pets, setPets] = useState<Pet[]>(() =>
        petsMock.map((pet) => ({ ...pet }))
    );

    const [petSelecionadoId, setPetSelecionadoId] = useState<string | null>(null);

    const [petHistorico, setPetHistorico] = useState<Pet | null>(null);
    const [busca, setBusca] = useState("");
    const [filtroEspecie, setFiltroEspecie] = useState("Todas");

    const especies = useMemo(
        () => ["Todas", ...new Set(pets.map((pet) => pet.especie))],
        [pets]
    );

    const petsFiltrados = useMemo(() => {
        const termo = busca.trim().toLocaleLowerCase("pt-BR");

        return pets.filter((pet) => {
            const correspondeBusca = [
                pet.nome,
                pet.especie,
                pet.raca ?? "",
            ].some((valor) =>
                valor.toLocaleLowerCase("pt-BR").includes(termo)
            );

            return (
                correspondeBusca &&
                (filtroEspecie === "Todas" ||
                    pet.especie === filtroEspecie)
            );
        });
    }, [pets, busca, filtroEspecie]);

    const petSelecionado =
        petsFiltrados.find((pet) => pet.id === petSelecionadoId) ?? null;

    function handleDeletePet(pet: Pet) {
        const confirmou = window.confirm(
            `Deseja realmente excluir ${pet.nome} da lista de pets?`
        );

        if (!confirmou) return;

        const novaLista = pets.filter((item) => item.id !== pet.id);

        setPets(novaLista);

        if (petSelecionadoId === pet.id) {
            setPetSelecionadoId(novaLista[0]?.id ?? null);
        }

        if (petHistorico?.id === pet.id) {
            setPetHistorico(null);
        }
    }

    function handleEditPet(pet: Pet) {
        if (onEditPet) {
            onEditPet(pet);
        } else {
            window.alert(
                `O formulário de edição de ${pet.nome} será conectado na próxima etapa.`
            );
        }
    }

    return (
        <div className="pets-page">
            <PetBackground />
            <Sidebar />

            <main className="pets-content">
                <header className="pets-page-header">
                    <div className="pets-page-heading">
                        <span className="pets-eyebrow">
                            <div className="header-square">
                                <PawPrint size={28} strokeWidth={1.8} fill="currentColor" />
                            </div>
                            ESPAÇO DOS SEUS COMPANHEIROS
                        </span>

                        <h1>Meus pets</h1>

                        <p>
                            Consulte os perfis e acompanhe os cuidados dos seus animais.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="pets-add-button"
                        onClick={() => setPremiumModalOpen(true)}
                    >
                        <Plus size={20} />
                        Adicionar pet
                    </button>
                </header>

                <section className="pets-selector-section">
                    <div className="pets-section-title">
                        <div>
                            <h2>Seus companheiros</h2>
                            <p>Selecione um pet para consultar suas informações.</p>
                        </div>

                        <span className="pets-results-count">
                            {petsFiltrados.length}{" "}
                            {petsFiltrados.length === 1 ? "pet" : "pets"}
                        </span>
                    </div>

                    <div className="pets-toolbar">
                        <label className="pets-search">
                            <Search size={18} />

                            <input
                                type="search"
                                value={busca}
                                onChange={(event) => setBusca(event.target.value)}
                                placeholder="Buscar pet..."
                                aria-label="Buscar pet"
                            />
                        </label>

                        <label className="pets-filter">
                            <SlidersHorizontal size={18} />

                            <select
                                value={filtroEspecie}
                                onChange={(event) =>
                                    setFiltroEspecie(event.target.value)
                                }
                                aria-label="Filtrar por espécie"
                            >
                                {especies.map((especie) => (
                                    <option key={especie} value={especie}>
                                        {especie === "Todas"
                                            ? "Todas as espécies"
                                            : especie}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    {petsFiltrados.length > 0 ? (
                        <PetSelector
                            pets={petsFiltrados}
                            petSelecionadoId={petSelecionado?.id ?? null}
                            onSelect={(pet) =>
                                setPetSelecionadoId((idAtual) =>
                                    idAtual === pet.id ? null : pet.id
                                )
                            }
                        />
                    ) : (
                        <div className="pets-empty-state">
                            <PawPrint size={34} />
                            <h3>
                                {pets.length === 0
                                    ? "Nenhum pet cadastrado"
                                    : "Nenhum pet encontrado"}
                            </h3>
                            <p>
                                {pets.length === 0
                                    ? "Adicione seu primeiro companheiro para começar."
                                    : "Tente outro nome ou altere o filtro."}
                            </p>
                        </div>
                    )}
                </section>

                {petSelecionado && (
                    <PetProfile
                        pet={petSelecionado}
                        onEdit={handleEditPet}
                        onDelete={handleDeletePet}
                        onShowHistory={setPetHistorico}
                    />
                )}

                <PetHistoryModal
                    pet={petHistorico}
                    onClose={() => setPetHistorico(null)}
                />

                <PremiumModal
                    isOpen={premiumModalOpen}
                    funcionalidade="Cadastrar Pet"
                    imagemLyo={lyo}
                    onClose={() => setPremiumModalOpen(false)}
                    isPremium={true}
                />

                <footer className="pets-footer">
                    <MessageSquareHeart  size={17} />
                    <span>
                        Cada patinha merece todo esse carinho.                    
                    </span>
                </footer>
            </main>
        </div>
    );
}
