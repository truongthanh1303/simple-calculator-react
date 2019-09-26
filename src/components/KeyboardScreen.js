import React, {useEffect} from 'react';

import {
  KEYS,
  OPERATOR_VAL,
} from '../utils/constant';
import Button from './Button';

function KeyboardScreen({state, actions}) {
  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp, false);

    return function () {
      document.removeEventListener('keyup', handleKeyUp);
    }
  });

  function handleKeyUp(e) {
    const keyCode = e.keyCode

    if (((keyCode >= 48 && keyCode <= 57) ||
        keyCode === 110 || keyCode === 190) && !e.shiftKey) {
      actions.getNumber(e.key);
    } else if (keyCode === 107 || (keyCode === 187 && e.shiftKey)) {
      actions.operate(OPERATOR_VAL.ADD);
    } else if (keyCode === 109 || (keyCode === 189 && !e.shiftKey)) {
      actions.operate(OPERATOR_VAL.SUBSTRACT);
    } else if (keyCode === 106 || (keyCode === 56 && e.shiftKey)) {
      actions.operate(OPERATOR_VAL.MULTIPLY);
    } else if (keyCode === 111 || (keyCode === 191 && !e.shiftKey)) {
      actions.operate(OPERATOR_VAL.DEVIDE);
    } else if (keyCode === 8) {
      actions.reset();
    } else if (keyCode === 13) {
      actions.getResult();
    }
  }

  function handleClick(val) {
    switch (val) {
      case OPERATOR_VAL.ADD:
        actions.operate(OPERATOR_VAL.ADD);
        break;
      case OPERATOR_VAL.SUBSTRACT:
        actions.operate(OPERATOR_VAL.SUBSTRACT);
        break;
      case OPERATOR_VAL.MULTIPLY:
        actions.operate(OPERATOR_VAL.MULTIPLY);
        break;
      case OPERATOR_VAL.DEVIDE:
        actions.operate(OPERATOR_VAL.DEVIDE);
        break;
      case OPERATOR_VAL.CLEAR:
        actions.reset();
        break;
      case OPERATOR_VAL.EQUAL:
        actions.getResult();
        break;
      default:
        actions.getNumber(val);
    }
  }

  return (
    <div className="keyboard-view">
      {KEYS.map(val => (
        <Button
          key={val}
          value={val}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default KeyboardScreen;
