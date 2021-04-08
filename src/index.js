import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

class Calculator extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <App />
    );
  }
}

// ========================================

ReactDOM.render(
    <Calculator />,
    document.getElementById('root'),
);
