
import {
    CalendarDays,
    HeartPulse,
    PawPrint,
    Scale,
    Syringe,
    Stethoscope,
    Pencil,
    Trash2,
    History,
    Pill,
    Scissors,
    Palette,
} from "lucide-react";
import PremiumModal from "../PremiumModal";
import type { Pet } from "./petsMock";
import { useState } from "react";
import lyo from '../../assets/lyo-purple-star.png';

interface PetProfileProps {
    pet: Pet;
    onEdit: (pet: Pet) => void;
    onDelete: (pet: Pet) => void;
    onShowHistory: (pet: Pet) => void;
}

function formatarData(data?: string): string {
    if (!data) return "Não informado";

    const dataValida = new Date(`${data.slice(0, 10)}T12:00:00`);

    if (Number.isNaN(dataValida.getTime())) {
        return "Não informado";
    }

    return dataValida.toLocaleDateString("pt-BR");
}

function calcularIdade(dataNascimento?: string): string {
    if (!dataNascimento) return "Não informada";

    const nascimento = new Date(`${dataNascimento}T12:00:00`);
    const hoje = new Date();

    if (
        Number.isNaN(nascimento.getTime()) ||
        nascimento > hoje
    ) {
        return "Não informada";
    }

    let anos = hoje.getFullYear() - nascimento.getFullYear();
    let meses = hoje.getMonth() - nascimento.getMonth();

    if (hoje.getDate() < nascimento.getDate()) meses--;

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    if (anos === 0 && meses === 0) return "Menos de 1 mês";

    if (anos === 0) return `${meses} ${meses === 1 ? "mês" : "meses"}`;

    if (meses === 0) {
        return `${anos} ${anos === 1 ? "ano" : "anos"}`;
    }

    return `${anos} ${anos === 1 ? "ano" : "anos"} e ${meses} ${meses === 1 ? "mês" : "meses"
        }`;
}

function Info({
    label,
    value,
    icon,
}: {
    label: string;
    value: string;
    icon: React.ReactNode;
}) {
    return (
        <div className="profile-info">
            <span className="profile-info-icon">{icon}</span>

            <div className="profile-info-text">
                <span className="profile-info-label">{label}</span>
                <span className="profile-info-value">{value}</span>
            </div>
        </div>
    );
}

export function PetProfile({
    pet,
    ///onEdit,
    //onDelete,
    onShowHistory,
}: PetProfileProps) {
    const totalHistorico =
        pet.historicoPesos.length +
        pet.historicoVacinas.length +
        pet.historicoConsultas.length +
        pet.historicoCirurgiasRegistros.length +
        pet.historicoMedicamentos.length;

    const [premiumModalOpen, setPremiumModalOpen] = useState(false);
    const [premiumModalOpen2, setPremiumModalOpen2] = useState(false);

    return (
        <article className="pet-profile">
            <header className="pet-profile-header">
                <div>
                    <span className="pet-profile-eyebrow">
                        <PawPrint size={15} />
                        PERFIL DO PET
                    </span>

                    <h2>{pet.nome}</h2>

                    <p>
                        {pet.especie}
                        {pet.raca ? ` • ${pet.raca}` : ""}
                    </p>
                </div>

                <button
                    type="button"
                    className="pet-history-button"
                    onClick={() => onShowHistory(pet)}
                >
                    <History size={18} />
                    Histórico
                    <span className="pet-history-count">{totalHistorico}</span>
                </button>
            </header>

            <div className="pet-profile-columns">
                <section className="pet-profile-section">
                    <h3>
                        <PawPrint size={19} />
                        Informações do pet
                    </h3>

                    <div className="profile-info-list">
                        <Info
                            label="Sexo"
                            value={pet.sexo ?? "Não informado"}
                            icon={<PawPrint size={17} />}
                        />

                        <Info
                            label="Nascimento"
                            value={formatarData(pet.dataNascimento)}
                            icon={<CalendarDays size={17} />}
                        />

                        <Info
                            label="Idade"
                            value={calcularIdade(pet.dataNascimento)}
                            icon={<CalendarDays size={17} />}
                        />

                        <Info
                            label="Peso atual"
                            value={pet.peso !== undefined ? `${pet.peso} kg` : "Não informado"}
                            icon={<Scale size={17} />}
                        />

                        <Info
                            label="Porte"
                            value={pet.porte ?? "Não informado"}
                            icon={<PawPrint size={17} />}
                        />

                        <Info
                            label="Pelagem"
                            value={pet.corPelagem ?? "Não informada"}
                            icon={<Palette size={17} />}
                        />

                        <Info
                            label="Castrado"
                            value={
                                pet.castrado === undefined
                                    ? "Não informado"
                                    : pet.castrado
                                        ? "Sim"
                                        : "Não"
                            }
                            icon={<HeartPulse size={17} />}
                        />
                    </div>
                </section>

                <section className="pet-profile-section">
                    <h3>
                        <HeartPulse size={19} />
                        Saúde e cuidados
                    </h3>

                    <div className="profile-info-list">
                        <Info
                            label="Vacinação"
                            value={
                                pet.vacinasEmDia === undefined
                                    ? "Não informado"
                                    : pet.vacinasEmDia
                                        ? "Em dia"
                                        : "Verificar pendências"
                            }
                            icon={<Syringe size={17} />}
                        />

                        <Info
                            label="Próxima vacina"
                            value={formatarData(pet.proximaVacina)}
                            icon={<CalendarDays size={17} />}
                        />

                        <Info
                            label="Última consulta"
                            value={formatarData(pet.ultimaConsulta)}
                            icon={<Stethoscope size={17} />}
                        />

                        <Info
                            label="Veterinário"
                            value={pet.nomeVeterinario || "Não informado"}
                            icon={<Stethoscope size={17} />}
                        />

                        <Info
                            label="Clínica / hospital"
                            value={pet.clinicaHospital || "Não informado"}
                            icon={<HeartPulse size={17} />}
                        />

                        <Info
                            label="Medicamento em uso"
                            value={pet.medicamentoUso || "Não informado"}
                            icon={<Pill size={17} />}
                        />

                        <Info
                            label="Condições de saúde"
                            value={pet.condicoesSaude || "Não informado"}
                            icon={<HeartPulse size={17} />}
                        />

                        <Info
                            label="Cirurgias"
                            value={pet.historicoCirurgias || "Não informado"}
                            icon={<Scissors size={17} />}
                        />
                    </div>
                </section>

                <section className="pet-profile-section pet-observations-section">
                    <h3>Observações gerais</h3>

                    <div className="pet-observations-content">
                        {pet.obsGerais || "Nenhuma observação cadastrada."}
                    </div>

                    <div className="pet-profile-actions">
                        <button
                            type="button"
                            className="pet-profile-action edit"
                            onClick={() => setPremiumModalOpen(true)}
                        >
                            <Pencil size={17} />
                            Editar pet
                        </button>

                        <button
                            type="button"
                            className="pet-profile-action delete"
                            onClick={() => setPremiumModalOpen2(true)}
                        >
                            <Trash2 size={17} />
                            Excluir pet
                        </button>
                    </div>
                </section>
            </div>

            <footer className="pet-profile-footer">
                <span>Cadastrado em {formatarData(pet.createdAt)}</span>
                <span>Atualizado em {formatarData(pet.updatedAt)}</span>
            </footer>

            <PremiumModal
                isOpen={premiumModalOpen}
                funcionalidade="Editar"
                imagemLyo={lyo}
                onClose={() => setPremiumModalOpen(false)}
                isPremium={true}
            />

            <PremiumModal
                isOpen={premiumModalOpen2}
                funcionalidade="Excluir"
                imagemLyo={lyo}
                onClose={() => setPremiumModalOpen2(false)}
                isPremium={true}
            />
        </article>
    );
}
