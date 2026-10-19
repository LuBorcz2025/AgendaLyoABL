
import { PawPrint } from "lucide-react";
import type { Pet } from "./petsMock";

interface PetSelectorProps {
    pets: Pet[];
    petSelecionadoId: string | null;
    onSelect: (pet: Pet) => void;
}

export function PetSelector({
    pets,
    petSelecionadoId,
    onSelect,
}: PetSelectorProps) {
    return (
        <section className="pet-selector" aria-label="Selecionar animal">
            <div className="pet-selector-list">
                {pets.map((pet) => {
                    const selecionado = pet.id === petSelecionadoId;

                    return (
                        <button
                            key={pet.id}
                            type="button"
                            className={`pet-avatar-item ${selecionado ? "selected" : ""
                                }`}
                            onClick={() => onSelect(pet)}
                            aria-pressed={selecionado}
                            aria-label={`Selecionar ${pet.nome}`}
                        >
                            <span className="pet-avatar-wrapper">
                                {pet.foto ? (
                                    <img
                                        src={pet.foto}
                                        alt=""
                                        className="pet-avatar-image"
                                    />
                                ) : (
                                    <span className="pet-avatar-placeholder">
                                        <PawPrint size={32} />
                                    </span>
                                )}

                                <span
                                    className={`pet-avatar-status ${pet.vacinasEmDia === false ? "attention" : ""
                                        }`}
                                    title={
                                        pet.vacinasEmDia === false
                                            ? "Verificar vacinação"
                                            : "Pet cadastrado"
                                    }
                                />
                            </span>

                            <span className="pet-avatar-name">{pet.nome}</span>

                            <span className="pet-avatar-breed">
                                {pet.raca || pet.especie}
                            </span>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}
