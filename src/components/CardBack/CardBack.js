import React from 'react';

function CardBack({cvsCode}) {
  return (
    <div className='card-back card'>
      <span className="ccv-code">{cvsCode.length > 0 ? cvsCode : '000'}</span>
    </div> 
  )
}

export default CardBack;