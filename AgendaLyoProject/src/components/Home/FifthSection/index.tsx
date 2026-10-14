import './index.css';

import {
    HeartPulse,
    CalendarDays,
    Clock3,
    ChevronRight,
    PawPrint,
    Bone,
    Bubbles,
    Heart,
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

interface Lembrete {
    id: number;
    pet: string;
    raca: string;
    imagem: string;
    titulo: string;
    categoria: string;
    categoriaClass: string;
    categoriaIcone: LucideIcon;
    data: string;
    prazo: string;
}

const lembretes: Lembrete[] = [
    {
        id: 1,
        pet: 'Mel',
        raca: 'SRD',
        imagem:
            'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200',
        titulo: 'Consulta agendada',
        categoria: 'Saúde',
        categoriaClass: 'saude',
        categoriaIcone: HeartPulse,
        data: '25/09',
        prazo: 'Em 2 dias',
    },
    {
        id: 2,
        pet: 'Thor',
        raca: 'Pug',
        imagem:
            'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=100',
        titulo: 'Compra de ração "Prime Cães"',
        categoria: 'Alimentação',
        categoriaClass: 'food',
        categoriaIcone: Bone,
        data: '30/09',
        prazo: 'Em 7 dias',
    },
    {
        id: 3,
        pet: 'Mel',
        raca: 'SRD',
        imagem:
            'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=200',
        titulo: 'Banho e tosa',
        categoria: 'Higiene',
        categoriaClass: 'higiene',
        categoriaIcone: Bubbles,
        data: '01/10',
        prazo: 'Em 8 dias',
    },
];

function FifthSection() {
    return (
        <section className="fifth-section">
            <div className="section-header">
                <h2>Próximos lembretes</h2>
                <p>Cuidados que precisam da sua atenção</p>
            </div>

            <div className="lista-lembretes">
                {lembretes.map((lembrete) => {
                    const CategoriaIcone = lembrete.categoriaIcone;

                    return (
                        <div className="lembrete-card" key={lembrete.id}>
                            {/* Cabeçalho */}
                            <div className="lembrete-header">
                                <img
                                    src={lembrete.imagem}
                                    alt={lembrete.pet}
                                    className="pet-image-lembrete"
                                />

                                <div className="lembrete-pet-info">
                                    <h4>{lembrete.pet}</h4>

                                    <div className="div-icon">
                                        <PawPrint
                                            size={16}
                                            strokeWidth={2.5}
                                        />
                                        <p>{lembrete.raca}</p>
                                    </div>
                                </div>

                                <span className="lembrete-status">
                                    <span className="status-dot" />
                                    Pendente
                                </span>
                            </div>

                            {/* Título */}
                            <h3 className="lembrete-titulo">
                                {lembrete.titulo}
                            </h3>

                            {/* Informações */}
                            <div className="lembrete-informacoes">
                                <div
                                    className={`lembrete-info ${lembrete.categoriaClass}`}
                                >
                                    <CategoriaIcone size={16} />
                                    <span>{lembrete.categoria}</span>
                                </div>

                                <div className="lembrete-info data">
                                    <CalendarDays size={16} />
                                    <span>{lembrete.data}</span>
                                </div>

                                <div className="lembrete-info prazo">
                                    <Clock3 size={16} />
                                    <span>{lembrete.prazo}</span>
                                </div>
                            </div>

                            {/* Rodapé */}
                            <div className="lembrete-footer">
                                <p>
                                    Toque para ver os detalhes do lembrete
                                </p>

                                <button
                                    type="button"
                                    className="lembrete-botao"
                                    aria-label={`Ver detalhes: ${lembrete.titulo}`}
                                    onClick={() =>
                                        console.log(
                                            'Lembrete selecionado:',
                                            lembrete
                                        )
                                    }
                                >
                                    <ChevronRight
                                        size={18}
                                        strokeWidth={2.5}
                                    />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="footer">
                <PawPrint size={16} fill="currentColor" />
                <h2>Você está cuidando muito bem deles!</h2>
                <Heart size={16} fill="currentColor" />
            </div>
        </section>
    );
}

export default FifthSection;