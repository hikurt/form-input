import React from 'react';
import useInput from '../hooks/use-input';

import '../index.css';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {
  const {
    value:  firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameIsInvalid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,

  } = useInput(isNotEmpty);

  const {
    value:  lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameIsInvalid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,

  } = useInput(isNotEmpty);

  const {
    value:  emailValue,
    isValid: emailIsValid,
    hasError: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    if (!formIsValid) {
      return;
    }
    console.log('Submitted data: ');
    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(emailValue);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

    const lastNameClasses = lastNameIsInvalid
    ? 'form-control invalid'
    : 'form-control';

    const emailClasses = emailIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameIsInvalid && <p className='error-text'>Please enter a first name.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='surname'>Last Name</label>
          <input
            type='text'
            id='surname'
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
           {lastNameIsInvalid && <p className='error-text'>Please enter a last name.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
         {emailIsInvalid && <p className='error-text'>Please enter a valid email.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
