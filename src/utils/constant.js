export const OPERATOR_VAL = {
  ADD: '+',
  SUBSTRACT: '-',
  MULTIPLY: 'x',
  DEVIDE: '/',
  EQUAL: '=',
  CLEAR: 'C',
}

export const KEYS = [
  7, 8, 9, OPERATOR_VAL.ADD,
  4, 5, 6, OPERATOR_VAL.SUBSTRACT,
  1, 2, 3, OPERATOR_VAL.MULTIPLY,
  OPERATOR_VAL.CLEAR, 0, OPERATOR_VAL.EQUAL, OPERATOR_VAL.DEVIDE
];

export const INIT_STATE = {
  isCalculating: false,
  currentValStr: '0',
  holderValStr: '',
  operator: '',
};

export const MAX_LENGTH = 15;
export const ERROR_TEXT = {
  INFINITY: 'Infinity',
  TOO_LARGE: 'Oops, dont know :)'
};
