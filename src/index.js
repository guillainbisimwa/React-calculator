import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>Calculator</div>
    );
  }
}

// ========================================

ReactDOM.render(
    <Calculator />,
    document.getElementById('root'),
);
