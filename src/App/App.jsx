/** To use JSX - HTML inside in React */
import React from 'react';

import Primeiro from '../components/basicos/Primeiro';
import ComParametro from '../components/basicos/ComParametro';
import Fragmento from '../components/basicos/Fragmento';
import Aleatorio from '../components/basicos/Aleatorio';

/** os parametros dos elementos podem estar em linhas diferentes */
const html = <div id="app">
    <h1>Fundamentos React</h1>
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

//export default function(props) (quando default, funcao anonima)
//export default (props) => {
//export default () => {}
export default function App(props) {
    return (
        html
    )
}