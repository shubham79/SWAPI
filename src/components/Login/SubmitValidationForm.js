import React from 'react';
import { Field, reduxForm } from 'redux-form';
import submit from './submit';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
const validate = val => {
  const errors = {};
  if (!val.username) {
    console.log('User Name is required');
    errors.username = 'Required';
  }
  if (!val.password) {
    console.log('Password is required');
    errors.password = 'Required';
  }
  
  return errors;
};

const SubmitValidationForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>Log In</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'submitValidation', // a unique identifier for this form
  validate, 
})(SubmitValidationForm);
