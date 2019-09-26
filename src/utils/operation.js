import {
  ERROR_TEXT,
  MAX_LENGTH,
} from './constant';

export function appendNumber(currentNum, num) {
  let newNum = currentNum === '0' ? num.toString() :
    currentNum + num.toString();
  if (newNum.length > MAX_LENGTH) {
    return currentNum;
  }
  return newNum;
}

export function calculate(firstVal, secondVal, operator) {
  const num1 = Number(firstVal);
  const num2 = Number(secondVal);

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case 'x':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return num2;
  }
}

export function printResult(num) {
  if (num === Infinity) {
    return ERROR_TEXT.INFINITY;
  }
  if (num >= Number.MAX_SAFE_INTEGER || num <= Number.MIN_SAFE_INTEGER) {
    return ERROR_TEXT.TOO_LARGE;
  }

  if (num.toString().length > MAX_LENGTH) {
    return num.toFixed(MAX_LENGTH - 1);
  }

  return num;
}
