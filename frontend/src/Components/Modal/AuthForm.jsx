import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUp } from '../../actions/authActions';

import './AuthForm.scss';

const AuthForm = props => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const [formInputErrors, setFormInputErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

    setFormInputErrors({
      ...formInputErrors,
      [e.target.name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errorsToSet = {};

    if (!formValues.email.trim()) {
      isValid = false;
      errorsToSet.email = 'Email is required.';
    }
    if (formValues.password !== formValues.passwordConfirmation) {
      isValid = false;
      errorsToSet.password = 'Passwords must match.';
    }

    setFormInputErrors({ ...formInputErrors, ...errorsToSet });

    return isValid;
  };

  const handleFormSubmission = e => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted');
      debugger
      const x = 2;
      return props.signUp(formValues);
    } else {
      console.log('Form invalid');
    }
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <input 
        type="text" 
        placeholder="Email"
        autoComplete="new-username"
        name="email" 
        onChange={handleInputChange} 
        value={formValues.email} 
      />
      <input 
        type="password"
        placeholder="Password"
        autoComplete="new-password"
        name="password"
        onChange={handleInputChange} 
        value={formValues.password} 
      />
      <input 
        type="password" 
        placeholder="Confirm Password"
        autoComplete="new-password"
        name="passwordConfirmation" 
        onChange={handleInputChange} 
        value={formValues.passwordConfirmation} 
      />
      <button type="submit">Let's Go</button>
    </form>
  );
};


const mapDispatchToProps = {
  signUp,
};


export default connect(null, mapDispatchToProps)(AuthForm);
