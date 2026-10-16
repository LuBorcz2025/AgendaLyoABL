import {
    Bone,
    HeartPulse,
    Bubbles,
    Sparkles,
    type LucideIcon,
} from "lucide-react";

type Categoria = "alimentacao" | "saude" | "higiene" | "bem-estar";

export interface Sugestao {
    id: number;
    pet: string;
    titulo: string;
    descricao: string;
    categoria: Categoria;
    acao: string;
    icone: LucideIcon;
}

export const sugestoes: Sugestao[] = [
    {
        id: 1,
        pet: "Mel",
        titulo: "Vamos atualizar o peso?",
        descricao:
            "Já faz 28 dias desde a última atualização do peso de Mel.",
        categoria: "alimentacao",
        acao: "Registrar peso",
        icone: Bone,
    },
    {
        id: 2,
        pet: "Thor",
        titulo: "Vamos cuidar da saúde?",
        descricao:
            "Confira os próximos cuidados e compromissos de saúde do Thor.",
        categoria: "saude",
        acao: "Ver cuidados",
        icone: HeartPulse,
    },
    {
        id: 3,
        pet: "Luna",
        titulo: "Hora de planejar um banho!",
        descricao:
            "Mimi está sem um banho agendado. Que tal organizar o próximo?",
        categoria: "higiene",
        acao: "Criar lembrete",
        icone: Bubbles,
    },
    {
        id: 4,
        pet: "Todos os pets",
        titulo: "Vamos estimular a diversão?",
        descricao:
            "Inclua brincadeiras e atividades para enriquecer a rotina dos seus pets.",
        categoria: "bem-estar",
        acao: "Ver sugestões",
        icone: Sparkles,
    },
    {
        id: 6,
        pet: "Mel",
        titulo: "Vermífugo à vista",
        descricao:
            "Mimi não tem vermífugo registrado recentemente. Vale agendar a próxima dose.",
        categoria: "saude",
        acao: "Agendar dose",
        icone: HeartPulse,
    },
    {
        id: 7,
        pet: "Thor",
        titulo: "Hora de aparar as unhas",
        descricao:
            "Unhas grandes incomodam na caminhada. Que tal programar uma aparada?",
        categoria: "higiene",
        acao: "Criar lembrete",
        icone: Bubbles,
    },
    {
        id: 11,
        pet: "Luna",
        titulo: "Revisar a ração",
        descricao:
            "Confira se a quantidade e o tipo de ração estão adequados ao peso atual de Luna.",
        categoria: "alimentacao",
        acao: "Ver alimentação",
        icone: Bone,
    },
    {
        id: 12,
        pet: "Thor",
        titulo: "Escovação dos dentes",
        descricao:
            "A higiene bucal evita tártaro e mau hálito. Vamos criar uma rotina?",
        categoria: "higiene",
        acao: "Criar lembrete",
        icone: Bubbles,
    },
    {
        id: 14,
        pet: "Luna",
        titulo: "Momento de brincadeira",
        descricao:
            "Brinquedos novos e brincadeiras ajudam a gastar energia e reduzir o estresse.",
        categoria: "bem-estar",
        acao: "Ver ideias",
        icone: Sparkles,
    },
    {
        id: 15,
        pet: "Thor",
        titulo: "Antipulgas e carrapatos",
        descricao:
            "Confira a data da última aplicação e programe a próxima para manter o Thor protegido.",
        categoria: "saude",
        acao: "Criar lembrete",
        icone: HeartPulse,
    },
    {
        id: 16,
        pet: "Lilica",
        titulo: "Vamos conferir a alimentação?",
        descricao:
            "Confira se a Pipoca está recebendo uma alimentação variada e adequada para calopsitas.",
        categoria: "alimentacao",
        acao: "Ver alimentação",
        icone: Bone,
    },
    {
        id: 17,
        pet: "Lilica",
        titulo: "Hora de cuidar da saúde!",
        descricao:
            "Confira os cuidados preventivos da Pipoca e planeje uma consulta com um veterinário especializado em aves.",
        categoria: "saude",
        acao: "Ver cuidados",
        icone: HeartPulse,
    },
    {
        id: 18,
        pet: "Lilica",
        titulo: "Vamos renovar o ambiente?",
        descricao:
            "Confira a limpeza da gaiola, dos comedouros e dos bebedouros para manter o ambiente da Pipoca limpo e confortável.",
        categoria: "higiene",
        acao: "Criar lembrete",
        icone: Bubbles,
    },
    {
        id: 19,
        pet: "Bety",
        titulo: "Vamos cuidar da coluna?",
        descricao:
            "Dachshunds têm predisposição a problemas na coluna. Evite saltos de móveis e incentive a Bety a usar rampas adequadas para reduzir impactos.",
        categoria: "saude",
        acao: "Ver cuidados",
        icone: HeartPulse,
    },
    {
        id: 20,
        pet: "Bety",
        titulo: "Hora de acompanhar o peso!",
        descricao:
            "O excesso de peso aumenta a sobrecarga na coluna da Bety. Acompanhe o peso regularmente e mantenha uma alimentação equilibrada, conforme a orientação veterinária.",
        categoria: "alimentacao",
        acao: "Registrar peso",
        icone: Bone,
    },
    {
        id: 21,
        pet: "Bety",
        titulo: "Vamos cuidar das orelhinhas?",
        descricao:
            "As orelhas longas da Bety merecem atenção! Confira regularmente se há vermelhidão, mau cheiro ou secreção. Evite introduzir cotonetes no canal auditivo e procure o veterinário se notar alterações.",
        categoria: "higiene",
        acao: "Ver cuidados",
        icone: Bubbles,
    },
];

/** Sorteia `quantidade` sugestões únicas (Fisher-Yates), evitando repetir as já exibidas quando possível. */
export function sortearSugestoes(
    quantidade = 4,
    idsAtuais: number[] = [],
): Sugestao[] {
    const embaralhar = (lista: Sugestao[]) => {
        const copia = [...lista];
        for (let i = copia.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }
        return copia;
    };

    const novas = embaralhar(sugestoes.filter((s) => !idsAtuais.includes(s.id)));
    const repetidas = embaralhar(sugestoes.filter((s) => idsAtuais.includes(s.id)));

    return [...novas, ...repetidas].slice(0, quantidade);
}