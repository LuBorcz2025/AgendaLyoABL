import './index.css'
import { Link } from 'react-router-dom';

export default function CadastroUsuario() {
    return (
        <div className="cadastro">
            <h1>Cadastro</h1>

            <input
                type="text"
                placeholder="Nome"
            />

            <input
                type="email"
                placeholder="E-mail"
            />

            <input
                type="password"
                placeholder="Senha"
            />

            <div className='div-buttons'>
                <button>
                    Cadastrar
                </button>

                <Link to="/login">
                    Voltar
                </Link>
            </div>
        </div>
    )
}
