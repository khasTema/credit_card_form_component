import React from 'react';
import {ReactComponent as Complete} from '../../images/icon-complete.svg';
import Button from '../Button/Button';

function Result({allClear}) {
  return (
    <div className='result-part'>
        <div className="result-icon">
            <Complete />
        </div>
        <h3 className="result_greetings">THANK YOU!</h3>
        <p className="result_deskr">We've added your card details</p>
        <Button clikHandler={allClear} />
    </div>
  )
}

export default Result;