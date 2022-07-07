import './App.css';
import {FaCrosshairs} from 'react-icons/fa'
import logo from './twitter.svg';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {

  const[trends, setTrends] = useState([])
  const[woeid, setWoeid] = useState('1')

  useEffect(() => getTrends(), [woeid])



  function getTrends(){
    axios.get('/api/trends', {
      params: {
        woeid: woeid,
      }
    })
          .then(response => {
            setTrends(response.data[0].trends)
          })
          .catch(error => console.log(error.message))
  }

  function handleLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        axios.get('/near-me', {
          params: {
            lat:position.coords.latitude,
            long:position.coords.longitude,
          },
        }).then(response => {
            console.log(response.data)
        })
          .catch(error => console.lof(error.message))
      },(error) =>{
        console.log(error.message)
      })
    }else{
      alert('Location not supported')
    }
  }
  function listTrends(){
    return(
      <ul>
        {trends.map((trend, index) =>{
          return (
            <li key = {index}>
              <a href={trend.url}>{trend.name}</a>
              {trend.tweet_volume && <span className='tweet_volume'>{trend.tweet_volume}</span>}
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="twitter logo" />
        <h2>Twitter Trends</h2>
      </header>
      <div className="menu">
        <select name="trending-places" onChange={e => setWoeid(e.target.value)}>
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
        <div className='content'>{listTrends()}</div>
    </div>
  );
}

export default App;
