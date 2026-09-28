import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login/index.js';
import CadastroUsuario from './screens/CadastroUsuario/index.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App