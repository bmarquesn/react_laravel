/** To use JSX - HTML inside in React */
import React from 'react';

export default function Fragmento(props) {
    return (
        //<React.Fragment key="1"> *to use properties
        <>
            <h2>Fragmento</h2>
            <p>Cuidado com este erro!!!</p>
        </>
        //</React.Fragment>
    );
}