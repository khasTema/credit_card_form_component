import React from 'react';


function CardFront({userName, cardNumber, expDateMM, expDateYY}) {
  return (
    <div className="card-front card">
      <div className="decorative">
        <div className="circle _big"></div>
        <div className="circle _small"></div>
      </div>
      <div className="card-number">
        <span className="__digits">
          {
            cardNumber.length > 0 ? 
                cardNumber.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim() 
                : 
                '0000 0000 0000 0000'
          }
        </span>
      </div>
      <div className="card_user">
        <span className="__user-name">{userName.length > 0 ? userName : 'user name'}</span>
        <span className="__exp-date">
        {expDateMM.length > 0 ? expDateMM : '00'}/{expDateYY.length > 0 ? expDateYY : '00'}
        </span>
      </div>
    </div>
  )
}

export default CardFront;