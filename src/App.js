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
  const [expDateMM, setExpDateMM ] = useState('')
  const [expDateYY, setExpDateYY ] = useState('')
  const [cvsCode, setCvsCode ] = useState('')
  const [isFilled, setIsfilled ] = useState(false)

  let navigate = useNavigate();

  function dataChecker () {
    if(userName.length < 1){
        document.getElementById('name-error').classList.add('warnings')
        setIsfilled(false)
    } else { 
        setIsfilled(true)
        document.getElementById('name-error').classList.remove('warnings') 
    }
    
    if(!Number(cardNumber)) {
        document.getElementById('number-error').classList.add('warnings')
        setIsfilled(false)
    } else { 
        setIsfilled(true)
        document.getElementById('number-error').classList.remove('warnings') 
    }
    
    if (Number(expDateMM) > 12 || expDateMM.length <1 || Number(expDateYY) < 22 ||expDateYY.length < 1) {
        document.getElementById('date-error').classList.add('warnings')
        setIsfilled(false)
    } else { 
        setIsfilled(true) 
        document.getElementById('date-error').classList.remove('warnings')
    }
    
    if (!Number(cvsCode) || cvsCode.length < 3) {
        document.getElementById('code-error').classList.add('warnings')
        setIsfilled(false)
    } else { 
        setIsfilled(true)
        document.getElementById('code-error').classList.remove('warnings') 
    }
  }

  function buttonHandler(e){
    e.preventDefault()
    isFilled ? navigate('/thnks') : dataChecker();
  }

  function allClear(e) {
      e.preventDefault()
      setCardNumber('')
      setUserName('')
      setCvsCode('')
      setExpDateMM('')
      setExpDateYY('')
      setIsfilled(false)
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
                                        isFilled={isFilled}
                                    />}/>
            <Route path='/thnks' element={<Result allClear={allClear}/>}/>
        </Routes>
        
        
      </div>
    </main>
  );
}

export default App;
