import { NavLink } from 'react-router-dom';
import {
    House,
    Bell,
    PawPrint,
    Crown,
    Settings,
} from 'lucide-react';

import './index.css';

import lyoLogo from '../../assets/lyo-happy-edited.png'

const menuItems = [
    {
        label: 'Início',
        path: '/home',
        icon: House,
    },
    {
        label: 'Notificações',
        path: '/notificacoes',
        icon: Bell,
    },
    {
        label: 'Meus pets',
        path: '/pets',
        icon: PawPrint,
    },
    {
        label: 'Lembretes',
        path: '/lembretes',
        icon: Crown,
    },
];

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-top">

                <div className="sidebar-logo">
                    <img src={lyoLogo} alt="Lyo" />
                    <p>LYO</p>
                </div>

                <nav className="sidebar-nav">
                    {menuItems.map(({ label, path, icon: Icon }) => (
                        <NavLink
                            key={path}
                            to={path}
                            end={path === '/home'}
                            title={label}
                            className={({ isActive }) =>
                                `sidebar-link ${isActive ? 'active' : ''}`
                            }
                        >
                            <Icon size={18} strokeWidth={1.8} />
                        </NavLink>
                    ))}
                </nav>

            </div>

            <div className="sidebar-bottom">

                <NavLink
                    to="/configuracoes"
                    title="Configurações"
                    className={({ isActive }) =>
                        `sidebar-link ${isActive ? 'active' : ''}`
                    }
                >
                    <Settings size={18} strokeWidth={1.8} />
                </NavLink>

                <button
                    type="button"
                    className="sidebar-profile"
                    title="Meu perfil"
                >
                    <img
                        src="https://i.pravatar.cc/100?img=47"
                        alt="Perfil"
                    />
                </button>

            </div>

        </aside>
    );
}

export default Sidebar;