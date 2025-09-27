import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navBar.css";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-navbar">
      <div className="nav-inner">
        
        <div className="nav-left">
          <NavLink to="/" className="brand">
            <span className="brand-icon">⚡</span> TradeControl
          </NavLink>
        </div>

      
        <nav className={`nav-center ${open ? "is-open" : ""}`}>
          <NavLink to="/tutorial" className="nav-link-mid">
            Tutorial
          </NavLink>
          <NavLink to="/beneficios" className="nav-link-mid">
            Beneficios
          </NavLink>
          <NavLink to="/ia" className="nav-link-mid">
            IA
          </NavLink>
        </nav>

       
        <div className="nav-right">
          <NavLink to="/login" className="btn-ghost">Iniciar sesión</NavLink>
          <NavLink to="/register" className="btn-accent">Registrarse</NavLink>
          <NavLink to="/help" className="nav-help">Ayuda</NavLink>

       
          <button
            className="menu-toggle"
            aria-label="Abrir menú"
            onClick={() => setOpen(v => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};
