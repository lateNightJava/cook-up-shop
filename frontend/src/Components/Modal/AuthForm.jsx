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
      errorsToSet.email = 'required';
    }
    if (!formValues.password) {
      isValid = false;
      errorsToSet.password = 'required';
    }

    if (!formValues.password && !formValues.passwordConfirmation && false) {
      isValid = false;
      errorsToSet.passwordConfirmation = 'required';
    } else if (!formValues.passwordConfirmation || formValues.password !== formValues.passwordConfirmation) {
      isValid = false;
      errorsToSet.passwordConfirmation = 'confirm password';
    }

    setFormInputErrors({ ...errorsToSet });

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
    <form className="auth-form" onSubmit={handleFormSubmission}>
      <div className="text-input-wrapper">
        <input 
          type="text"
          className={`${formInputErrors.email ? 'text-input-has-error' : ''}`}
          placeholder="Email"
          autoComplete="new-username"
          name="email" 
          onChange={handleInputChange} 
          value={formValues.email} 
        />
        <span className={`text-input-error ${formInputErrors.email ? 'text-input-error-active' : ''}`}>{formInputErrors.email || 'required'}</span>
      </div>
      <div className="text-input-wrapper">
        <input 
          type="password"
          className={`${formInputErrors.password ? 'text-input-has-error' : ''}`}
          placeholder="Password"
          autoComplete="new-password"
          name="password"
          onChange={handleInputChange} 
          value={formValues.password} 
        />
        <span className={`text-input-error ${formInputErrors.password ? 'text-input-error-active' : ''}`}>{formInputErrors.password || 'required'}</span>
      </div>
      <div className="text-input-wrapper">
        <input 
          type="password" 
          className={`${formInputErrors.passwordConfirmation ? 'text-input-has-error' : ''}`}
          placeholder="Confirm Password"
          autoComplete="new-password"
          name="passwordConfirmation" 
          onChange={handleInputChange} 
          value={formValues.passwordConfirmation} 
        />
        <span className={`text-input-error ${formInputErrors.passwordConfirmation ? 'text-input-error-active' : ''}`}>{formInputErrors.passwordConfirmation || 'passwords must match'}</span>
      </div>

      <button type="submit">let's go</button>
    </form>
  );
};


const mapDispatchToProps = {
  signUp,
};


export default connect(null, mapDispatchToProps)(AuthForm);
