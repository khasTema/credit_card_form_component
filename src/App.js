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
        document.getElementById('username-label').classList.add('labels_error')
        setIsfilled(false)
    } else { 
        setIsfilled(true)
        document.getElementById('username-label').classList.remove('labels_error') 
    }
    
    if(!Number(cardNumber)) {
        document.getElementById('number-label').classList.add('labels_error')
        setIsfilled(false)
    } else { 
        setIsfilled(true)
        document.getElementById('number-label').classList.remove('labels_error') 
    }
    
    if (Number(expDateMM) > 12 || expDateMM.length <1 || Number(expDateYY) < 22 ||expDateYY.length < 1) {
        document.getElementById('date-label').classList.add('labels_error')
        setIsfilled(false)
    } else { 
        setIsfilled(true) 
        document.getElementById('date-label').classList.remove('labels_error')
    }
    
    if (!Number(cvsCode) || cvsCode.length < 3) {
        document.getElementById('code-label').classList.add('labels_error')
        setIsfilled(false)
    } else { 
        setIsfilled(true)
        document.getElementById('code-label').classList.remove('labels_error') 
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
      <section className='credits-disclaimer'><b>DO NOT ENTER REAL DETAILS</b> <br/>This project is built for learning purpose only by <a href='https://github.com/khasTema' rel="noreferrer" target="_blank">Artem Khasin</a></section>
    </main>
  );
}

export default App;
