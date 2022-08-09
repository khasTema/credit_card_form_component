import './App.scss';
import CardFront from './components/CardFront/CardFront';
import CardBack from './components/CardBack/CardBack';
import Forma from './components/Forma/Forma';
import Result from './components/Result/Result'

function App() {
  return (
    <main className="wrapper">
      <div className="panel">
        <CardBack />
        <CardFront />
      </div>
      <div className="user-input">
        <Forma />
        <Result />
      </div>
    </main>
  );
}

export default App;
