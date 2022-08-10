import React from 'react';

function Button({clikHandler}) {
  return (
    <button className="action-btn" type='submit' onClick={clikHandler}>Confirm</button>
  )
}

export default Button;