import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cityWeatherReducer from './weather/reducers/city_weather';

const rootReducer = combineReducers({
  form: formReducer,
  cityWeather: cityWeatherReducer
});

export default rootReducer;