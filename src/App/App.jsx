import '../assets/css/app.css'

/** To use JSX - HTML inside in React */
import React from 'react';

import Card from '../components/layout/Card';
import Primeiro from '../components/basicos/Primeiro';
import ComParametro from '../components/basicos/ComParametro';
import Fragmento from '../components/basicos/Fragmento';
import Aleatorio from '../components/basicos/Aleatorio';

/** os parametros dos elementos podem estar em linhas diferentes */
const html = <div id="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
        <Card titulo="#01 - Desafio Aleatório" color="#fa6900">
            <Aleatorio numero1="0" numero2="100" />
        </Card>
        <Card titulo="#02 - Fragmento" color="#e94c6f">
            <Fragmento />
        </Card>
        <Card titulo="#03 - Parametro" color="#e8871a">
            <ComParametro
                aluno="Aluna 2"
                nota={5.24}
            />
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Bruno Marques Nogueira"
                nota={9.48}
            />
        </Card>
        <Card titulo="#04 - Primeiro" color="#588c73">
            <Primeiro></Primeiro>
        </Card>
    </div>
</div>;

//export default function(props) (quando default, funcao anonima)
//export default (props) => {
//export default () => {}
export default function App(props) {
    return (
        html
    )
}