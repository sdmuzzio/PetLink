import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Inicio from './pages/Inicio';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </div>
  );
}

export default App;