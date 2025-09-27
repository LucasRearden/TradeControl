
import React, { useState } from "react";

export default function Register() {
  const urlBase = "http://localhost:4001/auth/register";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(urlBase, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error en el registro");
      }

      const data = await response.json();
      console.log("Registro correcto:", data);

      alert("Cuenta creada ✅");

    } catch (error) {
      console.error("Error al registrar:", error.message);
      alert("No se pudo registrar: " + error.message);
    }
  };

  return (
    <section className="container text-center py-4">
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="form-control mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-success w-50">Crear cuenta</button>
      </form>
    </section>
  );
}
