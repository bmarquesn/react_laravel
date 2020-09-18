/** To use JSX - HTML inside in React */
import React from 'react';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min))+min;
}

export default function(props) {
    /** as Propriedades (atributos) dos elementos, o parametro, sao somente leitura */
    const numero1 = props.numero1;
    const numero2 = props.numero2;
    const sorteio = getRandomInt(numero1, numero2);
    return (
        <div>
            <h2>Sorteando Numero Aleatorio</h2>
            <h3>{ sorteio }</h3>
        </div>
    )
}