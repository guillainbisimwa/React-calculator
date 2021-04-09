import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

const Calculator = () => (
    <App />
);

// ========================================

ReactDOM.render(
    <Calculator />,
    document.getElementById('root'),
);
