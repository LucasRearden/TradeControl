import React from 'react';

export const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    return (
        <>
            <h1>Hola, {user.email || "Usuario"} 👋</h1>
        </>
    );
};
