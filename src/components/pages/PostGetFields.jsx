/** To use JSX - HTML inside in React */
import React from 'react';

/** os parametros dos elementos podem estar em linhas diferentes */
const html = <div id="app2" class="col">
    <h2>Post Get Fields Ajax React</h2>
    <p><button class="btn btn-primary">Teste Ajax / React</button></p>
</div>;

export default function PostGetFields(props) {
    return (
        html
    );
}