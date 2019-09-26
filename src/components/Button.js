import React from 'react';

function Button({value, onClick}) {
  return (
    <div className="button" onClick={() => onClick(value)}>
      <b>{value}</b>
    </div>
  )
}

export default Button;
