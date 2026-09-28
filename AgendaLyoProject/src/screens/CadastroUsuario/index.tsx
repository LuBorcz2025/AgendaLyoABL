import './index.css'

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

            <button>
                Cadastrar
            </button>
        </div>
    )
}
