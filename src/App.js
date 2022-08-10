import React, { useState } from 'react';
import './App.scss';
import CardFront from './components/CardFront/CardFront';
import CardBack from './components/CardBack/CardBack';
import Forma from './components/Forma/Forma';
// import Result from './components/Result/Result';

function App() {

  const [userName, setUserName ] = useState('')
  const [cardNumber, setCardNumber ] = useState('')
  const [expDateMM, setExpDateMM ] = useState('')
  const [expDateYY, setExpDateYY ] = useState('')
  const [cvsCode, setCvsCode ] = useState('')

  return (
    <main className="wrapper">
      <div className="panel">
        <CardBack 
          cvsCode={cvsCode}
        />
        <CardFront 
          userName={userName}
          cardNumber={cardNumber}
          expDateMM={expDateMM}
          expDateYY={expDateYY}
        />
      </div>
      <div className="user-input">
        <Forma 
          setUserName={setUserName}
          setCardNumber={setCardNumber}
          setCvsCode={setCvsCode}
          setExpDateMM={setExpDateMM}
          setExpDateYY={setExpDateYY}
        />
      </div>
    </main>
  );
}

export default App;
