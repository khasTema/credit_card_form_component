import React from 'react';
import Button from '../Button/Button';

function Form() {
  return (
    <div className="user_info_form">
        <form>
            <div className="card-data">
                <label className="input-labels" for="username">Cardholder Name</label>
                <input className="input-fields" type="text" id="username" name="username" placeholder='e.g. Jane Appleseed'></input>
                <span className="input_error">Can't be blank</span>
                <label className="input-labels" for="cardnumber">Card Number</label>
                <input className="input-fields" type="number" id="cardnumber" name="cardnumber" placeholder='e.g. 1234 5678 9123 0000'></input>
                <span className="input_error">Wrong format</span>
            </div>
            <div className="card-security-data">
                <div className="exp-date__block">
                    <label className="input-labels" for="exp-date">Exp. Date (MM/YY)</label>
                    <div className="date_input">
                        <input className="input-fields" type="number" id="exp-date-mm" name="exp-date" placeholder='MM'></input>
                        <input className="input-fields" type="number" id="exp-date-yy" name="exp-date" placeholder='YY'></input>
                    </div>
                </div>
                <div className="security-code__block">
                    <label className="input-labels" for="cvc-code">CVC</label>
                    <input className="input-fields" type="number" id="cvc-code" name="cvc-code" placeholder='e.g. 123'></input>
                    <span className="input_error">Can't be blank</span>
                </div>
            </div>
            <Button />
        </form>
    </div>
  )
}

export default Form