import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';

import App from './App';
import favicon from './static/favicon.ico';

ReactDOM.render([<Favicon key={0} url={favicon}/>, <App key={1}/>], document.getElementById('root'));