import './index.css';
import {
    HeartPulse,
    CalendarDays,
    Clock3,
    ChevronRight,
    PawPrint,
    Bone,
    Bubbles
} from "lucide-react";

function FifthSection() {
    return (
        <section className="fifth-section">
            <div className="section-header">
                <h2>Próximos lembretes</h2>
                <p>Cuidados que precisam da sua atenção</p>
            </div>

            <div className='lista-lembretes'>
                <div className="lembrete-card">
                    {/* Cabeçalho */}
                    <div className="lembrete-header">
                        <img
                            src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=100"
                            alt="Mel, Golden Retriever"
                            className="pet-image-lembrete"
                        />

                        <div className="lembrete-pet-info">
                            <h4>Mel</h4>

                            <div className="div-icon">
                                <PawPrint size={16} strokeWidth={2.5} />
                                <p>SRD</p>
                            </div>
                        </div>

                        <span className="lembrete-status">
                            <span className="status-dot" />
                            Pendente
                        </span>
                    </div>

                    {/* Título do lembrete */}
                    <h3 className="lembrete-titulo">
                        Consulta agendada
                    </h3>

                    {/* Informações */}
                    <div className="lembrete-informacoes">
                        <div className="lembrete-info saude">
                            <HeartPulse size={16} />
                            <span>Saúde</span>
                        </div>

                        <div className="lembrete-info data">
                            <CalendarDays size={16} />
                            <span>25/09</span>
                        </div>

                        <div className="lembrete-info prazo">
                            <Clock3 size={16} />
                            <span>Em 2 dias</span>
                        </div>
                    </div>

                    {/* Rodapé */}
                    <div className="lembrete-footer">
                        <p>Toque para ver os detalhes do lembrete</p>

                        <button
                            type="button"
                            className="lembrete-botao"
                            aria-label="Ver detalhes do lembrete"
                        >
                            <ChevronRight size={18} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                <div className="lembrete-card">
                    {/* Cabeçalho */}
                    <div className="lembrete-header">
                        <img
                            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=100"
                            alt="Mel, Golden Retriever"
                            className="pet-image-lembrete"
                        />

                        <div className="lembrete-pet-info">
                            <h4>Thor</h4>

                            <div className="div-icon">
                                <PawPrint size={16} strokeWidth={2.5} />
                                <p>Pug</p>
                            </div>
                        </div>

                        <span className="lembrete-status">
                            <span className="status-dot" />
                            Pendente
                        </span>
                    </div>

                    {/* Título do lembrete */}
                    <h3 className="lembrete-titulo">
                        Compra de ração "Prime Cães"
                    </h3>

                    {/* Informações */}
                    <div className="lembrete-informacoes">
                        <div className="lembrete-info food">
                            <Bone size={16} />
                            <span>Alimentação</span>
                        </div>

                        <div className="lembrete-info data">
                            <CalendarDays size={16} />
                            <span>30/09</span>
                        </div>

                        <div className="lembrete-info prazo">
                            <Clock3 size={16} />
                            <span>Em 7 dias</span>
                        </div>
                    </div>

                    {/* Rodapé */}
                    <div className="lembrete-footer">
                        <p>Toque para ver os detalhes do lembrete</p>

                        <button
                            type="button"
                            className="lembrete-botao"
                            aria-label="Ver detalhes do lembrete"
                        >
                            <ChevronRight size={18} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                <div className="lembrete-card">
                    {/* Cabeçalho */}
                    <div className="lembrete-header">
                        <img
                            src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=100"
                            alt="Mel, Golden Retriever"
                            className="pet-image-lembrete"
                        />

                        <div className="lembrete-pet-info">
                            <h4>Mel</h4>

                            <div className="div-icon">
                                <PawPrint size={16} strokeWidth={2.5} />
                                <p>SRD</p>
                            </div>
                        </div>

                        <span className="lembrete-status">
                            <span className="status-dot" />
                            Pendente
                        </span>
                    </div>

                    {/* Título do lembrete */}
                    <h3 className="lembrete-titulo">
                        Banho e tosa
                    </h3>

                    {/* Informações */}
                    <div className="lembrete-informacoes">
                        <div className="lembrete-info higiene">
                            <Bubbles size={16} />
                            <span>Higiene</span>
                        </div>

                        <div className="lembrete-info data">
                            <CalendarDays size={16} />
                            <span>01/10</span>
                        </div>

                        <div className="lembrete-info prazo">
                            <Clock3 size={16} />
                            <span>Em 8 dias</span>
                        </div>
                    </div>

                    {/* Rodapé */}
                    <div className="lembrete-footer">
                        <p>Toque para ver os detalhes do lembrete</p>

                        <button
                            type="button"
                            className="lembrete-botao"
                            aria-label="Ver detalhes do lembrete"
                        >
                            <ChevronRight size={18} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FifthSection;