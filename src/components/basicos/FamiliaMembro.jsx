/** To use JSX - HTML inside in React */
import React from 'react';

export default props => {
    return (<div>{props.nome} <strong>{props.sobrenome}</strong></div>);
}