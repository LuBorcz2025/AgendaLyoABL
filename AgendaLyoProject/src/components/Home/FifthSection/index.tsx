import './index.css';
import { useState, useCallback } from 'react';
import {
    CalendarDays,
    Clock3,
    ChevronRight,
    PawPrint,
    Heart,
} from 'lucide-react';
import LembreteDetalhesModal from '../../LembreteDetalhesModal';
import { type LembreteDetalhes} from './data';
import { lembretes } from './data';

interface FifthSectionProps {
    onCloseLyoButton: () => void;
    onOpenLyoButton: () => void;
}

function FifthSection({ onCloseLyoButton, onOpenLyoButton }: FifthSectionProps) {

    const [lembreteSelecionado, setLembreteSelecionado] = useState<LembreteDetalhes | null>(null);
    const fecharModal = useCallback(() => {
        setLembreteSelecionado(null);
        onOpenLyoButton();
    }, [onOpenLyoButton]);

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
                                    onClick={(e) => {
                                        onCloseLyoButton();
                                        setLembreteSelecionado(lembrete.detalhes);
                                    }}
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

            <LembreteDetalhesModal
                lembrete={lembreteSelecionado}
                onClose={fecharModal}
            />

            <div className="footer">
                <PawPrint size={16} fill="currentColor" />
                <h2>Você está cuidando muito bem deles!</h2>
                <Heart size={16} fill="currentColor" />
            </div>
        </section>
    );
}

export default FifthSection;