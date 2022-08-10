import React from 'react';

function Button({buttonHandler}) {
  return (
    <button className="action-btn" type='submit' onClick={buttonHandler}>Confirm</button>
  )
}

export default Button;