/** To use JSX - HTML inside in React */
import React from 'react';

import Primeiro from '../basicos/Primeiro';
import ComParametro from '../basicos/ComParametro';
import Fragmento from '../basicos/Fragmento';
import Aleatorio from '../basicos/Aleatorio';

/** os parametros dos elementos podem estar em linhas diferentes */
const html = <div id="app" class="col">
    <h2>Fundamentos React</h2>
    <Aleatorio
        numero1="0" 
        numero2="100"
    />
    <Fragmento />
    <ComParametro
        aluno="Aluna 2"
        nota={5.24}
    />
    <ComParametro
        titulo="Situação do Aluno"
        aluno="Bruno Marques Nogueira"
        nota={9.48}
    />
    <Primeiro></Primeiro>
</div>;

export default function Fundamentos(props) {
    return (
        html
    );
}