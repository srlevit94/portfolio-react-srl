import React, { useState } from 'react';
import '../../assets/css/Contact.css';

import { validateEmail } from '../../helpers/validateForm';

// styling for error message
const styles = {
  validationError: {
    color: '#ff0000',
    fontWeight: 'bold',
  }
}

function Contact() {

  const [email, setEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'contactName') {
      setContactName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // sets error message if a form field is not not valid
  const handleBlur = () => {
    if (!contactName) {
      setErrorMessage('Please input a name');
      return;
    } else {
      setErrorMessage('')
    }
    
    if (!validateEmail(email)) {
      setErrorMessage('Email not valid');
      return;
    } else {
      setErrorMessage('')
    }

    if (!message) {
      setErrorMessage('Please input a message');
      return;
    } else {
      setErrorMessage('')
    }

  };

  return (
    <div className = "contact-container">
      <h2>Contact Me at <a href="mailto:srlevit94@gmail.com">srlevit94@gmail.com</a>!</h2>
      <p style={styles.validationError}>{errorMessage}</p>
      <form onSubmit={(e) => e.preventDefault()} className='form-container'>
          <input 
            id="contactName"
            type="text"
            placeholder="Name"
            value={contactName}
            name="contactName"
            onChange={handleInputChange}
            onBlur={handleBlur}
            />
          <input
            id="emailAddress"
            type="text"
            placeholder="Email Address"
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleBlur}
            />
          <textarea
            id="contactMessage"
            type="text"
            placeholder="Message"
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <button className='btn btn-outline-dark' type="submit">Send</button>
      </form>
    </div>
  );



}

export default Contact;