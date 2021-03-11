import {
  FETCH_CITY_WEATHER_REQUEST,
  FETCH_CITY_WEATHER_SUCCESS,
  FETCH_CITY_WEATHER_FAILURE
} from '../constants';

const INITIAL_STATE = { isFetching: false, data: null, isError: false, errorMessage: null };

export default function(state= INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CITY_WEATHER_REQUEST:
      return {...state, isFetching: true, data: null, isError: false };
    case FETCH_CITY_WEATHER_SUCCESS:
      return {...state, isFetching: false, data: action.payload, isError: false };      
    case FETCH_CITY_WEATHER_FAILURE:
      return {...state, isFetching: false, data: null, isError: true }; 
    default:
      return state;
  }
}