import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '0',
      next: '',
      operation: '',
    };
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <>
        <Display />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
