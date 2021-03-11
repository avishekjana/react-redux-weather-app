import React from 'react';
import { connect } from 'react-redux';

const CityWeatherContainer = props => {
  const { isFetching, isError, cityWeather} = props;
  if (isFetching) {
    return <span>Loading please wait...</span>
  }
  if (cityWeather) {
    return (
      <div>
        <h2>City: {cityWeather.name}</h2>
        <h5>Current Temp.: {cityWeather.main.temp}</h5>
        <h5>Min. Temp.: {cityWeather.main.temp_min}</h5>
        <h5>Max. Temp.: {cityWeather.main.temp_max}</h5>
      </div>
    )
  }
  return <span>Search by any city.</span>

}
function mapStateToProps(state) {
  return {
    isFetching: state.cityWeather.isFetching,
    isError: state.cityWeather.isError,
    cityWeather: state.cityWeather.data
  }
}
export default connect(mapStateToProps, null)(CityWeatherContainer);