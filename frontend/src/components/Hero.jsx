import React from "react";
import "../styles/hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1 className="hero-title">Bienvenido a TradeControl</h1>
        <p className="hero-subtitle">
          Aprende, mejora y controla tu trading con inteligencia artificial.
        </p>
        <button className="hero-btn">Empezar ahora</button>
      </div>
    </section>
  );
};
