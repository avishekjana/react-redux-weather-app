import React from 'react';
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux';

import CitySearchForm from '../components/CitySearchForm';
import fetchCityWeather from '../store/weather/actions/fetch_city_weather';

const CitySearchContainer = props => {
  const { handleSubmit } = props;

  const submitForm = ({ q }) => {
    console.log(q)
    props.fetchCityWeather(q);
  }

  return(
    <CitySearchForm handleSubmit={handleSubmit} submitForm={submitForm} />
  );
}

const CitySearchReduxForm = reduxForm({
  // a unique name for the form
  form: 'CitySearchForm'
})(CitySearchContainer)

const CitySearchConnectedReduxForm = connect(
  null,
  { fetchCityWeather }
)(CitySearchReduxForm)

export default CitySearchConnectedReduxForm;