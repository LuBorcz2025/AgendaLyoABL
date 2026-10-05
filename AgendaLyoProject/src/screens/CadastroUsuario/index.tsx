import './index.css';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../../components/AnimatedBackground';
import lyo from '../../assets/lyo-purple-star.png';
import lyo2 from '../../assets/lyo-glasses.png';

const ESTADOS = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
    'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
    'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
];

export default function CadastroUsuario() {
    // Controla em qual etapa o formulário está: 1 (dados pessoais) ou 2 (acesso)
    const [etapa, setEtapa] = useState(1);
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarSenha2, setMostrarSenha2] = useState(false);

    // Etapa 1 — Dados pessoais
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [genero, setGenero] = useState('');

    // Etapa 2 — Acesso
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    function irParaEtapa2(e: FormEvent) {
        e.preventDefault();
        // Os campos da etapa 1 já são validados pelo próprio <form>
        // (required abaixo) antes de chegar aqui.
        setEtapa(2);
    }

    function voltarParaEtapa1() {
        setEtapa(1);
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (senha !== confirmarSenha) {
            // TODO: trocar por uma mensagem de erro no próprio formulário
            alert('As senhas não coincidem');
            return;
        }

        // TODO: chamar sua API de cadastro com os dados das duas etapas
    }

    const mensagemLyo =
        etapa === 1
            ? 'Oi! 🐾 Vamos começar conhecendo um pouquinho sobre você!'
            : 'Perfeito! ✨ Agora vamos criar seu acesso.';

    return (
        <div className="cadastro-page">
            <AnimatedBackground />

            <div className="lyo-cadastro">
                <img
                    src={etapa === 1 ? lyo : lyo2}
                    alt="Lyo"
                    className="lyo-cadastro-imagem"
                />

                <div className="lyo-cadastro-balao">
                    {mensagemLyo}
                </div>
            </div>

            <form
                className="cadastro-usuario"
                onSubmit={etapa === 1 ? irParaEtapa2 : handleSubmit}
            >
                <h1>Cadastro</h1>

                {/* Indicador de progresso: bolinha 1 — linha — bolinha 2 */}
                <div className="etapas-indicador">
                    <div className={`etapa-dot ${etapa >= 1 ? 'ativa' : ''}`}>1</div>
                    <div className="etapa-linha" />
                    <div className={`etapa-dot ${etapa >= 2 ? 'ativa' : ''}`}>2</div>
                </div>

                {etapa === 1 && (
                    <>
                        <p className="cadastro-usuario-welcome">Preencha os seus dados pessoais.</p>

                        <div className="cadastro-usuario-grid">
                            <div className="field-group span-2">
                                <label htmlFor="nome">Nome completo</label>
                                <div className="cadastro-usuario-field">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="8" r="4" />
                                        <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
                                    </svg>
                                    <input
                                        id="nome"
                                        type="text"
                                        placeholder="Digite o seu nome completo"
                                        autoComplete="name"
                                        //required
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="field-group">
                                <label htmlFor="dataNascimento">Data de nascimento</label>
                                <div className="cadastro-usuario-field">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <rect x="3" y="5" width="18" height="16" rx="2" />
                                        <path d="M3 10h18M8 3v4M16 3v4" />
                                    </svg>
                                    <input
                                        id="dataNascimento"
                                        type="date"
                                        autoComplete="bday"
                                        //required
                                        value={dataNascimento}
                                        onChange={(e) => setDataNascimento(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="field-group">
                                <label htmlFor="genero">Gênero</label>
                                <div className="cadastro-usuario-field">
                                    <select
                                        id="genero"
                                        //required
                                        value={genero}
                                        onChange={(e) => setGenero(e.target.value)}
                                    >
                                        <option value="" disabled>Selecione</option>
                                        <option value="feminino">Feminino</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="outro">Outro</option>
                                        <option value="prefiro-nao-informar">Prefiro não informar</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field-group">
                                <label htmlFor="cidade">Cidade</label>
                                <div className="cadastro-usuario-field">
                                    <input
                                        id="cidade"
                                        type="text"
                                        placeholder="Cidade"
                                        autoComplete="address-level2"
                                        //required
                                        value={cidade}
                                        onChange={(e) => setCidade(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="field-group">
                                <label htmlFor="estado">Estado</label>
                                <div className="cadastro-usuario-field">
                                    <select
                                        id="estado"
                                        autoComplete="address-level1"
                                        //required
                                        value={estado}
                                        onChange={(e) => setEstado(e.target.value)}
                                    >
                                        <option value="" disabled>UF</option>
                                        {ESTADOS.map((uf) => (
                                            <option key={uf} value={uf}>{uf}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="cadastro-usuario-submit">
                            Avançar
                        </button>
                    </>
                )}

                {etapa === 2 && (
                    <>
                        <p className="cadastro-usuario-welcome">Agora, crie o seu acesso.</p>

                        <div className="cadastro-usuario-grid">
                            <div className="field-group span-2">
                                <label htmlFor="email">E-mail</label>
                                <div className="cadastro-usuario-field">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <rect x="3" y="5" width="18" height="14" rx="2" />
                                        <path d="M3 7l9 6 9-6" />
                                    </svg>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Digite o seu e-mail"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="field-group">
                                <label htmlFor="senha">Senha</label>
                                <div className="cadastro-usuario-field">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <rect x="5" y="11" width="14" height="10" rx="2" />
                                        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                                    </svg>
                                    <input
                                        id="senha"
                                        type={mostrarSenha ? 'text' : 'password'}
                                        placeholder="Crie uma senha"
                                        autoComplete="new-password"
                                        required
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        className="login-eye"
                                        onClick={() => setMostrarSenha((v) => !v)}
                                        aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                                    >
                                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
                                            <circle cx="12" cy="12" r="3" />
                                            {mostrarSenha && <path d="M4 4l16 16" />}
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="field-group">
                                <label htmlFor="confirmarSenha">Confirmar senha</label>
                                <div className="cadastro-usuario-field">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <rect x="5" y="11" width="14" height="10" rx="2" />
                                        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                                    </svg>
                                    <input
                                        id="confirmarSenha"
                                        type={mostrarSenha2 ? 'text' : 'password'}
                                        placeholder="Repita a senha"
                                        autoComplete="new-password"
                                        required
                                        value={confirmarSenha}
                                        onChange={(e) => setConfirmarSenha(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        className="login-eye"
                                        onClick={() => setMostrarSenha2((v) => !v)}
                                        aria-label={mostrarSenha2 ? 'Ocultar senha' : 'Mostrar senha'}
                                    >
                                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
                                            <circle cx="12" cy="12" r="3" />
                                            {mostrarSenha2 && <path d="M4 4l16 16" />}
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="cadastro-usuario-botoes">
                            <button type="button" className="cadastro-usuario-voltar" onClick={voltarParaEtapa1}>
                                Voltar
                            </button>
                            <Link to="/login" className="cadastro-usuario-submit">
                                Cadastrar
                            </Link>
                        </div>
                    </>
                )}

                <Link to="/login" className="cadastro-usuario-signup">
                    Já tenho uma conta
                </Link>
            </form>
        </div>
    );
}
