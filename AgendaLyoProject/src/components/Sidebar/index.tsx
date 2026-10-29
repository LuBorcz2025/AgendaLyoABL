import { NavLink } from 'react-router-dom';
import {
    House,
    Bell,
    PawPrint,
    Crown,
    Settings,
    LogOut 
} from 'lucide-react';
import './index.css';
import lyoLogo from '../../assets/lyo-happy-edited.png'
import PremiumModal from '../PremiumModal';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
    {
        label: 'Início',
        path: '/home',
        icon: House,
    },
    {
        label: 'Lembretes',
        path: '/lembretes',
        icon: Bell,
    },
    {
        label: 'Meus pets',
        path: '/pets',
        icon: PawPrint,
    },
    {
        label: 'Premium',
        path: '/premium',
        icon: Crown,
    },
];

function Sidebar() {
    const navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false);
    const [funcionalidade, setFuncionalidade] = useState("");
    const abrirModal = (nome: string) => {
        setFuncionalidade(nome);
        setModalOpen(true);
    };

    const itensIndisponiveis = ["/lembretes"];

    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-top">
                    <div className="sidebar-logo">
                        <img src={lyoLogo} alt="Lyo" />
                        <p>LYO</p>
                    </div>

                    <nav className="sidebar-nav">
                        {menuItems.map(({ label, path, icon: Icon }) => {
                            const indisponivel = itensIndisponiveis.includes(path);

                            if (indisponivel) {
                                return (
                                    <button
                                        key={path}
                                        type="button"
                                        title={label}
                                        className="sidebar-link"
                                        onClick={() => abrirModal(label)}
                                    >
                                        <Icon
                                            size={20}
                                            strokeWidth={1.8}
                                        />
                                    </button>
                                );
                            }

                            return (
                                <NavLink
                                    key={path}
                                    to={path}
                                    end={path === "/home"}
                                    title={label}
                                    className={({ isActive }) =>
                                        `sidebar-link ${isActive ? "active" : ""}`
                                    }
                                >
                                    {({ isActive }) => (
                                        <Icon
                                            size={20}
                                            strokeWidth={1.8}
                                            fill={isActive ? "currentColor" : "none"}
                                        />
                                    )}
                                </NavLink>
                            );
                        })}
                    </nav>
                </div>

                <div className="sidebar-bottom">
                    <button
                        type="button"
                        title="Configurações"
                        className="sidebar-link"
                        onClick={() => abrirModal("Configurações")}
                    >
                        <Settings size={22} strokeWidth={1.8} />
                    </button>

                    <button
                        type="button"
                        className="sidebar-profile"
                        title="Meu perfil"
                        onClick={() => abrirModal("Meu perfil")}
                    >
                        <img
                            src="https://i.pravatar.cc/100?img=47"
                            alt="Perfil"
                        />
                    </button>
                    <button
                        type="button"
                        className="sidebar-logout"
                        title="Sair"
                        onClick={() => {navigate("/login")}}
                    >
                        <LogOut size={22} strokeWidth={1.8} />
                    </button>
                </div>
            </aside>

            <PremiumModal
                isOpen={modalOpen}
                funcionalidade={funcionalidade}
                isPremium={false}
                imagemLyo={lyoLogo}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
}

export default Sidebar;