import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

function App() {
  calculate();
  return (
    <>
        <Display />
        <ButtonPanel />
    </>
  );
}

export default App;
