import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './screens/Login/index.js';
import CadastroUsuario from './screens/CadastroUsuario/index.js';
import Home from './screens/Home/index.js';
import Pets from './screens/Pets/index.js';
import Premium from './screens/Premium/index.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App