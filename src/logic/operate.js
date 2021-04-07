import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const nbrOne = Big(numberOne);
  const nbrTwo = Big(numberTwo);
  let result = 0;

  switch (operation) {
    case '+':
      result = nbrOne.plus(nbrTwo);
      break;

    case '-':
      result = nbrOne.minus(nbrTwo);
      break;

    case 'x':
      result = nbrOne.times(nbrTwo);
      break;

    case '%':
      result = nbrOne.mod(nbrTwo);
      break;

    case '/':
      result = nbrOne.div(nbrTwo);
      break;

    default:
      break;
  }
  return result;
};

export default operate;
