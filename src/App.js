import React, {useState} from 'react';
import './App.css';
import ResultScreen from './components/ResultScreen';
import KeyboardScreen from './components/KeyboardScreen';
import {
  ERROR_TEXT,
  INIT_STATE,
  OPERATOR_VAL,
} from './utils/constant';
import {
  appendNumber,
  calculate,
} from './utils/operation';

function App() {
  const [state, setState] = useState(INIT_STATE);

  const actions = {
    operate: function(operator) {
      const isCalculating = operator !== '=';
      const _state = {
        ...state,
        isCalculating,
        operator
      };

      if (state.holderValStr !== '' && isCalculating !== state.isCalculating) {
        const newVal = calculate(
          state.holderValStr,
          state.currentValStr,
          state.operator
        );
        _state.currentValStr = newVal;
        _state.holderValStr = newVal;
      } else {
        _state.holderValStr = _state.currentValStr;
      }
      setState(_state);
    },
    getNumber: function(num) {
      const _state = {
        ...state,
        currentValStr: state.isCalculating ?
          num: appendNumber(state.currentValStr, num),
        isCalculating: false
      };

      if (
        _state.currentValStr === ERROR_TEXT.INFINITY ||
        _state.currentValStr === ERROR_TEXT.TOO_LARGE
      ) {
        _state.holderValStr = '';
        _state.operator = '';
      }
      setState(_state);
    },
    getResult: function() {
      const _state = {
        ...state,
        operator: OPERATOR_VAL.EQUAL
      };
      const newVal = calculate(
        state.holderValStr,
        state.currentValStr,
        state.operator
      );
      _state.currentValStr = newVal;
      _state.holderValStr = newVal;
      _state.isCalculating = true;
      setState(_state);
    },
    reset: function() {
      setState(INIT_STATE);
    }
  };

  return (
    <div className="App">
      <div className="main-view">
        <ResultScreen result={state.currentValStr}/>
        <KeyboardScreen state={state} actions={actions}/>
      </div>
    </div>
  );
}

export default App;
