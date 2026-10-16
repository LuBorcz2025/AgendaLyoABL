import { useEffect } from 'react';
import {
    X,
    CalendarDays,
    Clock3,
    Repeat2,
    CalendarPlus,
    PawPrint,
    Tag,
    Sparkles
} from 'lucide-react';
import './index.css';
import { type LembreteDetalhes} from '../Home/FifthSection/data';

interface LembreteDetalhesModalProps {
    lembrete: LembreteDetalhes | null;
    onClose: () => void;
}

function formatarData(data: string): string {
    if (!data) return 'Não informada';

    // Evita problemas de fuso horário ao formatar YYYY-MM-DD.
    const partes = data.split('-');

    if (partes.length === 3) {
        const [ano, mes, dia] = partes;
        return `${dia}/${mes}/${ano}`;
    }

    return data;
}

function LembreteDetalhesModal({
    lembrete,
    onClose,
}: LembreteDetalhesModalProps) {
    useEffect(() => {
        if (!lembrete) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [lembrete, onClose]);

    if (!lembrete) return null;

    return (
        <div
            className="lembrete-modal-overlay"
            onClick={onClose}
        >
            <section
                className="lembrete-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="lembrete-modal-titulo"
                onClick={(event) => event.stopPropagation()}
            >
                <header className="lembrete-modal-header">
                    <div className="lembrete-modal-header-icon">
                        <CalendarDays size={23} strokeWidth={2.5} />
                    </div>

                    <div className="lembrete-modal-heading">
                        <h2 id="lembrete-modal-titulo">
                            DETALHES DO LEMBRETE
                        </h2>
                        <p>{lembrete.nomePet}</p>
                    </div>

                    <button
                        type="button"
                        className="lembrete-modal-fechar"
                        onClick={onClose}
                        aria-label="Fechar detalhes"
                    >
                        <X size={21} strokeWidth={2.5} />
                    </button>
                </header>

                <div className="lembrete-modal-body">
                    <div className="lembrete-modal-titulo">
                        <span className="lembrete-modal-label">
                            Título do lembrete
                        </span>

                        <h3>{lembrete.tituloLembrete}</h3>

                        <span
                            className={`lembrete-modal-status status-${lembrete.status
                                .toLowerCase()
                                .normalize('NFD')
                                .replace(/[\u0300-\u036f]/g, '')
                                .replace(/\s+/g, '-')}`}
                        >
                            <span className="lembrete-modal-status-dot" />
                            {lembrete.status}
                        </span>
                    </div>

                    <div className="lembrete-modal-descricao">
                        <span className="lembrete-modal-label">
                            Descrição
                        </span>
                        <p>{lembrete.descricao || 'Nenhuma descrição informada.'}</p>
                    </div>

                    <div className="lembrete-modal-dados">
                        <div className="lembrete-detalhe-item">
                            <CalendarDays size={18} strokeWidth={2.5} />
                            <div>
                                <span>Data prevista</span>
                                <strong>
                                    {formatarData(lembrete.dataPrevista)}
                                </strong>
                            </div>
                        </div>

                        <div className="lembrete-detalhe-item">
                            <Clock3 size={18} strokeWidth={2.5} />
                            <div>
                                <span>Horário</span>
                                <strong>
                                    {lembrete.horaPrevista || 'Não informado'}
                                </strong>
                            </div>
                        </div>

                        <div className="lembrete-detalhe-item">
                            <Tag size={18} strokeWidth={2.5} />
                            <div>
                                <span>Categoria</span>
                                <strong>{lembrete.categoria}</strong>
                            </div>
                        </div>

                        <div className="lembrete-detalhe-item">
                            <Repeat2 size={18} strokeWidth={2.5} />
                            <div>
                                <span>Recorrência</span>
                                <strong>
                                    {lembrete.recorrente
                                        ? lembrete.intervaloRecorrencia ||
                                        'Intervalo não informado'
                                        : 'Não recorrente'}
                                </strong>
                            </div>
                        </div>

                        <div className="lembrete-detalhe-item">
                            <CalendarPlus size={17} strokeWidth={2.5} />
                            <div>
                                <span>Criado por</span>
                                <strong>{lembrete.criadoPor || 'Não informado'}</strong>
                            </div>
                        </div>

                        <div className="lembrete-detalhe-item">
                            <PawPrint size={18} strokeWidth={2.5} />
                            <div>
                                <span>Criado em</span>
                                <strong>
                                    {formatarData(lembrete.criadoQuando)}
                                </strong>
                            </div>
                        </div>
                    </div>

                    <div className="lembrete-lyo-observacao">
                        <img src={lembrete.imagemLyo} alt="Lyo, assistente virtual" />

                        <div className="lembrete-lyo-conteudo">
                            <div className='lembrete-lyo-conteudo-header'>
                                <Sparkles size={18} strokeWidth={2.5} />
                                <h3>Uma observação da Lyo !</h3>
                            </div>
                            <p>{lembrete.observacaoLyo}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LembreteDetalhesModal;