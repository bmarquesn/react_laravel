/** to use CSS */
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom';
/** To use JSX - HTML inside in React */
import React from 'react';

/** importar o Componente pai */
import App from './App/App';

const elemento_pai_html = document.getElementById('root');

ReactDOM.render(
    <App />
    , elemento_pai_html
)