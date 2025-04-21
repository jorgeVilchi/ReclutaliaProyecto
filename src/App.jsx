/*Se hace la implementación de los hooks state y effect.*/
/*Se llaman todos los componentes principales también el carrito context
que es el encargado del manejo global del carrito.
*/
/*La implementación de react dom para las ruta y también de toast para las notificaciones.*/

import { useState, useEffect } from 'react'

import Usuario from "./components/usuario/Usuario"
import Carrito from "./components/carrito/Carrito"
import Productos from "./components/Productos/Productos"

import { CarritoProvider } from './components/carrito/carritoContex';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './App.css'
/*Se hace el llamado de effect para ocultar el icono de bienvenida de la plataforma*/
/*Se plasma todo el maquetado del menú o ventana principal.
*/
function App() {
  const [count, setCount] = useState(0)

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="splash-screen">
        <img src="src/assets/logo/imageedit_5_4374796751.png" alt="Cargando..." className="splash-img" />
      </div>
    );
  }


  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <CarritoProvider>
        <Router>
          <div className="app-container">
            <nav className="navbar">
              <h1 className="logo">🛒 Tenkomerce</h1>
              <div className="nav-links">
                <Link to="/productos">Productos</Link>
                <Link to="/carrito">Carrito</Link>
                <Link to="/usuario">Usuario</Link>
              </div>
            </nav>

            <main className="main-content">
              <Routes>
                <Route path="/productos" element={<Productos />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/usuario" element={<Usuario />} />
              </Routes>
            </main>

            <footer className="footer">
              <p>© 2025 Tenkomerce. Todos los derechos reservados.</p>
            </footer>
          </div>
        </Router>
      </CarritoProvider>

    </>
  )
}

const linkStyle = {
  color: '#fff',
  marginRight: '1rem',
  textDecoration: 'none'
};

export default App
