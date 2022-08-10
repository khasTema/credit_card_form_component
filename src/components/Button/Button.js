import React from 'react';

function Button({clikHandler, isFilled}) {
  return (
    <button className="action-btn" type='submit' onClick={clikHandler}>
      {isFilled ? 'Confirm' : 'Check'}
    </button>
  )
}

export default Button;