/** To use JSX - HTML inside in React */
import React from 'react';
import FamiliaMembro from './FamiliaMembro';

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Eloise" sobrenome="Duarte" />
            <FamiliaMembro nome="Natalia" {...props} />
            <FamiliaMembro nome="Bruno" sobrenome={props.sobrenome} />
        </div>
    );
}