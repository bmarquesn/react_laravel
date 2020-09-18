/** To use JSX - HTML inside in React */
import React from 'react';

export default function(props) {
    /** as Propriedades (atributos) dos elementos, o parametro, sao somente leitura */
    const aluno = props.aluno;
    const nota = Math.ceil(props.nota);
    const status = props.nota>=7?"Aprovado":"Recuperação";
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <h3>{ aluno }</h3>
            <p>Tem nota: { nota } - <strong>{ status }</strong></p>
        </div>
    )
}