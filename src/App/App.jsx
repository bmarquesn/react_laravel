/** To use JSX - HTML inside in React */
import React from 'react';

import Fundamentos from '../components/pages/Fundamentos';
import PostGetFields from '../components/pages/PostGetFields';

/** os parametros dos elementos podem estar em linhas diferentes */
const html = <div class="container">
    <div class="row">
        <Fundamentos />
        <PostGetFields />
    </div>
</div>;

//export default function(props) (quando default, funcao anonima)
//export default (props) => {
//export default () => {}
//export default function App(props) {
export default () => {
    return (
        html
    )
}