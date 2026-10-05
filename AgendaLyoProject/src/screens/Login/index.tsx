import './index.css';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../../components/AnimatedBackground';
import type { FormEvent } from 'react';
import { useState } from 'react';
import lyo from '../../assets/lyo-happy-edited.png';

function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        // TODO: chamar sua API de login com usuario e senha
    }

    return (
        <div className="login-page">
            <AnimatedBackground />

            <div className="login-mascot" aria-hidden="true">
                <span className="bubble bubble-a" />
                <span className="bubble bubble-b" />
                <span className="bubble bubble-c" />
                <img src={lyo} alt="" className="lyo-cadastro-imagem"/>
            </div>

            <form className="login" onSubmit={handleSubmit}>
                <h1>Agenda PetCare</h1>
                <p className="login-welcome">Seja bem-vindo!</p>

                <div className="login-group">
                    <label htmlFor="usuario">Email</label>
                    <div className="login-field">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
                        </svg>
                        <input
                            id="usuario"
                            type="text"
                            placeholder="Digite o seu email"
                            autoComplete="username"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>
                </div>

                <div className="login-group">
                    <label htmlFor="senha">Senha</label>
                    <div className="login-field">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="5" y="11" width="14" height="10" rx="2" />
                            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                        </svg>
                        <input
                            id="senha"
                            type={mostrarSenha ? 'text' : 'password'}
                            placeholder="Digite sua senha"
                            autoComplete="current-password"
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
                    <Link to="/esqueciSenha" className="login-forgot">
                        Esqueceu a senha?
                    </Link>
                </div>

                <button type="submit" className="login-submit">
                    Entrar
                </button>

                <div className="login-social">
                    <button type="button">
                        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                            <path fill="#4285F4" d="M22 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.6a4.8 4.8 0 0 1-2.1 3.1v2.6h3.4c2-1.8 3.1-4.5 3.1-7.5z" />
                            <path fill="#34A853" d="M12 22.5c2.8 0 5.2-.9 6.9-2.5l-3.4-2.6c-.9.6-2.1 1-3.5 1-2.7 0-5-1.8-5.8-4.3H2.7v2.7A10.5 10.5 0 0 0 12 22.5z" />
                            <path fill="#FBBC05" d="M6.2 14.1a6.3 6.3 0 0 1 0-4.2V7.2H2.7a10.5 10.5 0 0 0 0 9.6l3.5-2.7z" />
                            <path fill="#EA4335" d="M12 5.6c1.5 0 2.9.5 4 1.6l3-3A10.5 10.5 0 0 0 2.7 7.2l3.5 2.7C7 7.4 9.300 5.600 12 5.600z" />
                        </svg>
                        Google
                    </button>
                    <button type="button">
                        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                            <circle cx="12" cy="12" r="11" fill="#1877F2" />
                            <path fill="#fff" d="M13.400 22v-8h2.700l.4-3.100h-3.100V9c0-.9.300-1.500 1.600-1.500h1.700V4.700c-.3 0-1.300-.1-2.400-.1-2.400 0-4 1.400-4 4.100v2.200H7.500V14h2.800v8z" />
                        </svg>
                        Facebook
                    </button>
                </div>

                <Link to="/cadastroUsuario" className="login-signup">
                    Ainda não tenho uma conta
                </Link>
            </form>
        </div>
    );
};

export default Login;