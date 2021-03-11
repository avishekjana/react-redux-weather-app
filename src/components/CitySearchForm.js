import React from 'react';
import { Form, Field } from 'redux-form';

const CitySearchForm = props => {
  const { handleSubmit, submitForm } = props;
  return(
    <Form onSubmit={handleSubmit(submitForm)}>
      <h6>Search by city</h6>
      <Field
        name="q"
        component="input"
        type="text"
        placeholder="Search by city's name"
      />
      <button type="submit">Search</button>
    </Form>
  );
}

export default CitySearchForm;