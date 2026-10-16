import {
    HeartPulse,
    Bone,
    Bubbles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import lyoGlasses from '../../../assets/lyo-glasses.png';
import lyoHappy from '../../../assets/lyo-happy-edited.png';
import lyoPurpleStar from '../../../assets/lyo-purple-star.png';
import lyoQuestion from '../../../assets/lyo-question-face-2.png';
import lyoSurprise from '../../../assets/lyo-surprise.png';

export interface LembreteDetalhes {
    idLembrete: number;
    nomePet: string;
    categoria: string;
    tituloLembrete: string;
    descricao: string;
    dataPrevista: string;
    horaPrevista: string;
    status: string;
    recorrente: boolean;
    intervaloRecorrencia: string | null;
    criadoPor: string;
    criadoQuando: string;
    observacaoLyo: string;
    imagemLyo: string
}

interface Lembrete {
    id: number;
    pet: string;
    raca: string;
    especie: string;
    imagem: string;
    titulo: string;
    categoria: string;
    categoriaClass: string;
    categoriaIcone: LucideIcon;
    data: string;
    prazo: string;
    detalhes: LembreteDetalhes;
}

export const lembretes: Lembrete[] = [
    {
        id: 1,
        pet: 'Mel',
        raca: 'SRD',
        especie: "Gato",
        imagem:
            'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200',
        titulo: 'Consulta agendada',
        categoria: 'Saúde',
        categoriaClass: 'saude',
        categoriaIcone: HeartPulse,
        data: '25/09',
        prazo: 'Em 2 dias',
        detalhes: {
            idLembrete: 1,
            nomePet: 'Mel',
            categoria: 'Saúde',
            tituloLembrete: 'Consulta agendada',
            descricao: 'Consulta de rotina com a veterinária.',
            dataPrevista: '2026-09-25',
            horaPrevista: '14:30',
            status: 'Pendente',
            recorrente: false,
            intervaloRecorrencia: null,
            criadoPor: 'Você',
            criadoQuando: '2026-09-20',
            observacaoLyo:
                'Os gatos costumam esconder sinais de desconforto, então vale ficar de olho em mudanças no apetite, no consumo de água, no uso da caixinha de areia e no comportamento da Mel. Conte essas observações à veterinária durante a consulta, mesmo que pareçam pequenas!',
            imagemLyo: lyoSurprise,
            },
    },
    {
        id: 2,
        pet: 'Thor',
        raca: 'Pug',
        especie: "Cachorro",
        imagem:
            'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=100',
        titulo: 'Compra de ração "Prime Cães"',
        categoria: 'Alimentação',
        categoriaClass: 'food',
        categoriaIcone: Bone,
        data: '30/09',
        prazo: 'Em 7 dias',
        detalhes: {
            idLembrete: 2,
            nomePet: 'Thor',
            categoria: 'Alimentação',
            tituloLembrete: 'Compra de ração "Prime Cães"',
            descricao:
                'Está na hora de verificar o estoque de ração do Thor e garantir que ele tenha alimento suficiente para os próximos dias.',
            dataPrevista: '2026-09-30',
            horaPrevista: '--:--',
            status: 'Pendente',
            recorrente: true,
            intervaloRecorrencia: 'Mensal',
            criadoPor: 'Você',
            criadoQuando: '2026-09-23',
            observacaoLyo: 'Sabia que os Pugs podem ter tendência ao ganho de peso? Aproveite para conferir a quantidade diária recomendada para o Thor e acompanhar o peso dele. Manter uma alimentação equilibrada ajuda a cuidar das articulações e da respiração!',
            imagemLyo: lyoPurpleStar
        },
    },
    {
        id: 3,
        pet: 'Luna',
        raca: 'Golden Retriever',
        especie: "Cachorro",
        imagem:
            'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=200',
        titulo: 'Banho e tosa',
        categoria: 'Higiene',
        categoriaClass: 'higiene',
        categoriaIcone: Bubbles,
        data: '01/10',
        prazo: 'Em 8 dias',
        detalhes: {
            idLembrete: 3,
            nomePet: 'Luna',
            categoria: 'Higiene',
            tituloLembrete: 'Banho e tosa',
            descricao:
                'Organize o próximo banho e tosa da Mel para manter os pelos limpos, desembaraçados e bem cuidados.',
            dataPrevista: '2026-10-01',
            horaPrevista: '09:00',
            status: 'Pendente',
            recorrente: true,
            intervaloRecorrencia: 'A cada 30 dias',
            criadoPor: 'Você',
            criadoQuando: '2026-09-23',
            observacaoLyo: 'Os Golden Retrievers têm pelagem dupla, que ajuda a regular a temperatura do corpo! Por isso, a tosa muito curta geralmente não é recomendada, nem mesmo no calor. Escovações frequentes e banhos, em geral, a cada 4 a 6 semanas podem ajudar a manter a pelagem saudável — mas o intervalo ideal depende da pele e da rotina da Luna.',
            imagemLyo: lyoSurprise
        },
    },
];