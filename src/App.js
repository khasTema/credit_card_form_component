import React, { useState } from 'react';
import './App.scss';
import CardFront from './components/CardFront/CardFront';
import CardBack from './components/CardBack/CardBack';
import Forma from './components/Forma/Forma';
import Result from './components/Result/Result';
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {

  const [userName, setUserName ] = useState('')
  const [cardNumber, setCardNumber ] = useState('')
//   console.log(Boolean(cardNumber))
  const [expDateMM, setExpDateMM ] = useState('')
  const [expDateYY, setExpDateYY ] = useState('')
  const [cvsCode, setCvsCode ] = useState('')

  let navigate = useNavigate();

  function dataChecker () {
      console.log('cheking')
  }

  function buttonHandler(e){
    e.preventDefault()
    userName && cardNumber && cvsCode && expDateMM && expDateYY ? navigate('/thnks') : dataChecker(); 
    
  }

  function allClear(e) {
      e.preventDefault()
      setCardNumber('')
      setUserName('')
      setCvsCode('')
      setExpDateMM('')
      setExpDateYY('')
      navigate('/')
  }


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
        <Routes>
            <Route path='/' element={<Forma 
                                        setUserName={setUserName}
                                        setCardNumber={setCardNumber}
                                        setCvsCode={setCvsCode}
                                        setExpDateMM={setExpDateMM}
                                        setExpDateYY={setExpDateYY}
                                        buttonHandler={buttonHandler}
                                    />}/>
            <Route path='/thnks' element={<Result allClear={allClear}/>}/>
        </Routes>
        
        
      </div>
    </main>
  );
}

export default App;
