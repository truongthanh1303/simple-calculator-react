import React from 'react';
import { printResult } from '../utils/operation';

function ResultScreen({ result }) {
  return (
    <div className="result-view">
      <div className="inner-result-view">{printResult(result)}</div>
    </div>
  );
}

export default ResultScreen;
