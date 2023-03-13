import logo from '../src/utils/horoscope.png';
import './css/App.css';
import './css/index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Augure</p>
        Everything you don't want to know about your future
      </header>
    </div>
  );
}

export default App;
