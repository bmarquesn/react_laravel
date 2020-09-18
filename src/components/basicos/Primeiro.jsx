/** To use JSX - HTML inside in React */
import React from 'react';

/** por convencao os Components começam com letra maiuscula */
export default function Primeiro() {
    //return "Primeiro Component";
    const msg = "Seja bem vindo";
    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p>{ msg }</p>
        </div>
    );
}