import React from 'react';

function CardFront() {
  return (
    <div className="card-front card">
      <div className="decorative">
        <div className="circle _big"></div>
        <div className="circle _small"></div>
      </div>
      <div className="card-number">
        <span className="__digits">0000 0000 0000 0000</span>
      </div>
      <div className="card_user">
        <span className="__user-name">user name</span>
        <span className="__exp-date">
          00/00
        </span>
      </div>
    </div>
  )
}

export default CardFront;