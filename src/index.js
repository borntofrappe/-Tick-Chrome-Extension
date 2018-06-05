import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// render the parent component in the root of the DOM
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
