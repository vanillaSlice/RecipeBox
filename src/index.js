import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';

import './styles/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
