import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Inicio from './pages/Inicio';
import Propuestas from "./pages/Propuestas";
import Ofertas from "./pages/Ofertas";
import OfertaAmpliado from "./pages/OfertaAmpliado";
import PropuestaAmpliado from "./pages/PropuestaAmpliado";
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/inicio" element={<Inicio />} /> 
        <Route path="/propuestas" element={<Propuestas />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/oferta/:id" element={<OfertaAmpliado />} />
        <Route path="/propuesta/:id" element={<PropuestaAmpliado />} />
      </Routes>
    </div>
  );
}

export default App;