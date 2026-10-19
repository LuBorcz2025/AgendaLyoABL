
export type SexoPet = "Macho" | "Fêmea" | "Não informado";

export type PortePet =
    | "Pequeno"
    | "Médio"
    | "Grande"
    | "Não informado";

export interface RegistroPeso {
    id: string;
    peso: number;
    data: string;
    observacao?: string;
}

export interface RegistroVacina {
    id: string;
    nomeVacina: string;
    dataAplicacao: string;
    proximaDose?: string;
    observacao?: string;
}

export interface RegistroConsulta {
    id: string;
    data: string;
    veterinario?: string;
    clinicaHospital?: string;
    descricao?: string;
}

export interface RegistroCirurgia {
    id: string;
    data: string;
    descricao: string;
    observacao?: string;
}

export interface RegistroMedicamento {
    id: string;
    nome: string;
    dataInicio: string;
    dataFim?: string;
    ativo: boolean;
    observacao?: string;
}

export interface Pet {
    id: string;
    nome: string;
    foto?: string;
    especie: string;
    raca?: string;
    sexo?: SexoPet;
    dataNascimento?: string;
    peso?: number;
    porte?: PortePet;
    corPelagem?: string;
    castrado?: boolean;

    nomeVeterinario?: string;
    clinicaHospital?: string;
    obsGerais?: string;
    vacinasEmDia?: boolean;
    condicoesSaude?: string;
    medicamentoUso?: string;
    proximaVacina?: string;
    ultimaConsulta?: string;
    historicoCirurgias?: string;

    historicoPesos: RegistroPeso[];
    historicoVacinas: RegistroVacina[];
    historicoConsultas: RegistroConsulta[];
    historicoCirurgiasRegistros: RegistroCirurgia[];
    historicoMedicamentos: RegistroMedicamento[];

    createdAt: string;
    updatedAt: string;
}

export const petsMock: Pet[] = [
    {
        id: "pet-1",
        nome: "Thor",
        foto: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=100",
        especie: "Cachorro",
        raca: "Pug",
        sexo: "Macho",
        dataNascimento: "2023-03-12",
        peso: 4.8,
        porte: "Pequeno",
        corPelagem: "Preta",
        castrado: true,

        nomeVeterinario: "Dra. Camila",
        clinicaHospital: "Clínica Pet Vida",
        obsGerais: "Gosta de ambientes tranquilos.",
        vacinasEmDia: true,
        condicoesSaude: "Nenhuma condição cadastrada.",
        medicamentoUso: "Nenhum",
        proximaVacina: "2027-10-10",
        ultimaConsulta: "2026-09-02",
        historicoCirurgias: "Nenhuma cirurgia cadastrada.",

        historicoPesos: [
            {
                id: "peso-1",
                peso: 4.2,
                data: "2026-05-10",
                observacao: "Pesagem de rotina.",
            },
            {
                id: "peso-2",
                peso: 4.5,
                data: "2026-07-15",
            },
            {
                id: "peso-3",
                peso: 4.8,
                data: "2026-10-15",
                observacao: "Última pesagem registrada.",
            },
        ],

        historicoVacinas: [
            {
                id: "vacina-1",
                nomeVacina: "Antirrábica",
                dataAplicacao: "2026-10-10",
                proximaDose: "2027-10-10",
            },
        ],

        historicoConsultas: [
            {
                id: "consulta-1",
                data: "2026-09-02",
                veterinario: "Dra. Camila",
                clinicaHospital: "Clínica Pet Vida",
                descricao: "Consulta de rotina.",
            },
            {
                id: "consulta-2",
                data: "2026-03-02",
                descricao: "Avaliação geral.",
            },
        ],

        historicoCirurgiasRegistros: [],
        historicoMedicamentos: [],

        createdAt: "2025-02-10T10:00:00",
        updatedAt: "2026-10-15T14:30:00",
    },
    {
        id: "pet-2",
        nome: "Luna",
        foto: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=200",
        especie: "Cachorro",
        raca: "Goden Retriever",
        sexo: "Fêmea",
        dataNascimento: "2022-08-20",
        peso: 7.2,
        porte: "Pequeno",
        corPelagem: "Marrom",
        castrado: false,

        nomeVeterinario: "Dr. Rafael",
        clinicaHospital: "Hospital Veterinário Central",
        obsGerais: "Realizar passeios e atividades diariamente.",
        vacinasEmDia: false,
        condicoesSaude: "Nenhuma condição cadastrada.",
        medicamentoUso: "Nenhum",
        proximaVacina: "2026-11-20",
        ultimaConsulta: "2026-08-14",
        historicoCirurgias: "Nenhuma cirurgia cadastrada.",

        historicoPesos: [
            {
                id: "peso-4",
                peso: 6.9,
                data: "2026-04-14",
            },
            {
                id: "peso-5",
                peso: 7.2,
                data: "2026-10-01",
            },
        ],

        historicoVacinas: [
            {
                id: "vacina-2",
                nomeVacina: "Polivalente",
                dataAplicacao: "2025-11-20",
                proximaDose: "2026-11-20",
                observacao: "Verificar atualização com o veterinário.",
            },
        ],

        historicoConsultas: [
            {
                id: "consulta-3",
                data: "2026-08-14",
                veterinario: "Dr. Rafael",
                clinicaHospital: "Hospital Veterinário Central",
                descricao: "Avaliação de rotina.",
            },
        ],

        historicoCirurgiasRegistros: [],
        historicoMedicamentos: [],

        createdAt: "2025-06-12T09:00:00",
        updatedAt: "2026-10-01T11:20:00",
    },

    {
        id: "pet-3",
        nome: "Mel",
        foto: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400",
        especie: "Gato",
        raca: "SRD",
        sexo: "Fêmea",
        dataNascimento: "2023-03-12",
        peso: 4.8,
        porte: "Pequeno",
        corPelagem: "Preto e branco",
        castrado: true,

        nomeVeterinario: "Dra. Camila",
        clinicaHospital: "Clínica Pet Vida",
        obsGerais: "Gosta de ambientes tranquilos.",
        vacinasEmDia: true,
        condicoesSaude: "Nenhuma condição cadastrada.",
        medicamentoUso: "Nenhum",
        proximaVacina: "2027-10-10",
        ultimaConsulta: "2026-09-02",
        historicoCirurgias: "Nenhuma cirurgia cadastrada.",

        historicoPesos: [
            {
                id: "peso-1",
                peso: 4.2,
                data: "2026-05-10",
                observacao: "Pesagem de rotina.",
            },
            {
                id: "peso-2",
                peso: 4.5,
                data: "2026-07-15",
            },
            {
                id: "peso-3",
                peso: 4.8,
                data: "2026-10-15",
                observacao: "Última pesagem registrada.",
            },
        ],

        historicoVacinas: [
            {
                id: "vacina-1",
                nomeVacina: "Antirrábica",
                dataAplicacao: "2026-10-10",
                proximaDose: "2027-10-10",
            },
        ],

        historicoConsultas: [
            {
                id: "consulta-1",
                data: "2026-09-02",
                veterinario: "Dra. Camila",
                clinicaHospital: "Clínica Pet Vida",
                descricao: "Consulta de rotina.",
            },
            {
                id: "consulta-2",
                data: "2026-03-02",
                descricao: "Avaliação geral.",
            },
        ],

        historicoCirurgiasRegistros: [],
        historicoMedicamentos: [],

        createdAt: "2025-02-10T10:00:00",
        updatedAt: "2026-10-15T14:30:00",
    },
    {
        id: "pet-4",
        nome: "Lilica",
        foto: "https://images.unsplash.com/photo-1573048729868-33c6cfcc4b0b?w=800&q=80&auto=format&fit=crop",
        especie: "Ave",
        raca: "Calopsita",
        sexo: "Não informado",
        dataNascimento: "2024-01-15",
        peso: 0.095,
        porte: "Pequeno",
        corPelagem: "Amarelo e branco",
        castrado: false,

        obsGerais: "Manter a gaiola limpa e oferecer enriquecimento ambiental.",
        vacinasEmDia: true,
        condicoesSaude: "Nenhuma condição cadastrada.",
        medicamentoUso: "Nenhum",
        proximaVacina: undefined,
        ultimaConsulta: "2026-07-18",
        historicoCirurgias: "Nenhuma cirurgia cadastrada.",

        historicoPesos: [
            {
                id: "peso-6",
                peso: 0.09,
                data: "2026-04-18",
            },
            {
                id: "peso-7",
                peso: 0.095,
                data: "2026-07-18",
            },
        ],

        historicoVacinas: [],

        historicoConsultas: [
            {
                id: "consulta-4",
                data: "2026-07-18",
                descricao: "Avaliação de rotina.",
            },
        ],

        historicoCirurgiasRegistros: [],
        historicoMedicamentos: [],

        createdAt: "2026-01-05T08:00:00",
        updatedAt: "2026-07-18T12:00:00",
    },
    {
        id: "pet-5",
        nome: "Bety",
        foto: "https://images.unsplash.com/photo-1653057669545-c8da74f5e198?auto=format&fit=crop&w=200",
        especie: "Cachorro",
        raca: "Dachshund",
        sexo: "Fêmea",
        dataNascimento: "2022-08-20",
        peso: 7.2,
        porte: "Pequeno",
        corPelagem: "Marrom",
        castrado: false,

        nomeVeterinario: "Dr. Rafael",
        clinicaHospital: "Hospital Veterinário Central",
        obsGerais: "Realizar passeios e atividades diariamente.",
        vacinasEmDia: false,
        condicoesSaude: "Nenhuma condição cadastrada.",
        medicamentoUso: "Nenhum",
        proximaVacina: "2027-10-10",
        ultimaConsulta: "2026-09-02",
        historicoCirurgias: "Nenhuma cirurgia cadastrada.",

        historicoPesos: [
            {
                id: "peso-4",
                peso: 6.9,
                data: "2026-04-14",
            },
            {
                id: "peso-5",
                peso: 7.2,
                data: "2026-10-01",
            },
        ],

        historicoVacinas: [
            {
                id: "vacina-2",
                nomeVacina: "Polivalente",
                dataAplicacao: "2025-11-20",
                proximaDose: "2026-11-20",
                observacao: "Verificar atualização com o veterinário.",
            },
        ],

        historicoConsultas: [
            {
                id: "consulta-3",
                data: "2026-08-14",
                veterinario: "Dr. Rafael",
                clinicaHospital: "Hospital Veterinário Central",
                descricao: "Avaliação de rotina.",
            },
        ],

        historicoCirurgiasRegistros: [],
        historicoMedicamentos: [],

        createdAt: "2025-06-12T09:00:00",
        updatedAt: "2026-10-01T11:20:00",
    },
];
