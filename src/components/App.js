import React from 'react';
import calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const result = calculate(this.state, buttonName);
    this.setState(() => result);
  };

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <>
        <Display />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
