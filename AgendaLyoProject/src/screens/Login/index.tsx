import './index.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <h1>Login</h1>

            <input
                type="email"
                placeholder="E-mail"
            />

            <input
                type="password"
                placeholder="Senha"
            />

            <button>
                Entrar
            </button>

            <Link to="/cadastroUsuario">
                Ainda não tenho uma conta
            </Link>
        </div>
    )
};

export default Login;