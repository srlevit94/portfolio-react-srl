import React from 'react';
import '../../assets/css/Contact.css';


export default function Contact() {
  return (
    <div className = "contact-container">
      <h2>Contact Me!</h2>
      <form onSubmit={(e) => e.preventDefault()} className='form-container'>
          <input type="text" required placeholder="Name"></input>
          <input type="text" required placeholder="Email Address"></input>
          <textarea type="text" required placeholder="Message"></textarea>
          <button className='btn btn-outline-dark' type="submit">Submit</button>
      </form>
    </div>
  );
}