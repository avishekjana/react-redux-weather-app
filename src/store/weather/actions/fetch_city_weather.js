import axios from 'axios';

import {
  FETCH_CITY_WEATHER_REQUEST,
  FETCH_CITY_WEATHER_SUCCESS,
  FETCH_CITY_WEATHER_FAILURE
} from '../constants';

function requesting() {
  return {
    type: FETCH_CITY_WEATHER_REQUEST
  };
}
function requestSuccess(data) {
  return {
    type: FETCH_CITY_WEATHER_SUCCESS,
    payload: data
  };
}
function requestError(error) {
  return {
    type: FETCH_CITY_WEATHER_FAILURE,
    payload: error
  };
}

export default function fetchCityWeather(q='') {
  return function(dispatch) {
    dispatch(requesting())
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=a871dce4508733a5a100e&units=metric`)
      .then(response => {
        dispatch(requestSuccess(response.data))
      })
      .catch(error => {
        dispatch(requestError('Something went wrong'));
      })
  }
}
