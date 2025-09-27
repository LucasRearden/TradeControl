import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const urlBase = "http://localhost:4001/auth/login";
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resp = await fetch(urlBase, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

           
            const ct = resp.headers.get("content-type") || "";
            const data = ct.includes("application/json") ? await resp.json() : { message: await resp.text() };

            if (!resp.ok) {
                const msg = data.error || data.message || `HTTP ${resp.status}`;
                throw new Error(msg);
            }


            localStorage.setItem("token", data.token ?? "");
            localStorage.setItem("user", JSON.stringify(data.user ?? {}));

            alert("Inicio correcto ✅");
            navigate("/Dashboard");
        } catch (err) {
            alert("No se pudo iniciar sesión: " + (err?.message ?? "Error desconocido"));
            console.error(err);
        }
    };

    return (
        <section className="container text-center py-4">
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    className="form-control mb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="form-control mb-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="btn btn-primary w-50">Entrar</button>
            </form>
        </section>
    );
}
