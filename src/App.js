import './App.css';
import Question from './components/Questions/Question';
import Store from './components/Store/Store';

function App() {
  return (
    <div className="App">
      <h1 className='main-title'>Spin & Win!!</h1>
      <Store></Store>
      <Question></Question>
    </div>
  );
}

export default App;
