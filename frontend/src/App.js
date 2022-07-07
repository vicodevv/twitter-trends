import './App.css';
import {FaCrosshairs} from 'react-icons/fa'
import logo from './twitter.svg';

function App() {
  function handleLocation(){
    alert("No Location selected")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="twitter logo" />
        <h2>Twitter Trends</h2>
      </header>
      <div className="menu">
        <select name="trending-places">
          <option value="1"> Worldwide </option>
          <option value="23424975">UK</option>
          <option value="23424768">Brazil</option>
          <option value="23424829">Germany</option>
          <option value="23424900">Mexico</option>
          <option value="23424775">Canada</option>
          <option value="23424977">United States</option>
        </select>
        <div className="location" onClick={handleLocation}>
          <FaCrosshairs />
        </div>
        </div>
    </div>
  );
}

export default App;
