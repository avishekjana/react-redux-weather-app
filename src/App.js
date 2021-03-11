import logo from './logo.svg';
import './App.css';
import CitySearchContainer from './containers/CitySearchContainer';
import CityWeatherContainer from './containers/CityWeatherContainer';

function App() {
  return (
    <div className="App">
      <h2>React weather App</h2>
      <CitySearchContainer />
      <br />
      <CityWeatherContainer />
    </div>
  );
}

export default App;
