import React from 'react';

export default function Contact() {
  return (
    <div>
      <h2>Get in touch!</h2>
            <div>
                <a href="https://github.com/srlevit94">Github</a>
            </div>
            <div>
                <a href="www.linkedin.com/in/shanelevites">Linkedin</a>
            </div>
            <div>
                <a href="mailto:srlevit94@gmail.com">Email</a>
            </div>
        <h2>Leave your information for future contact</h2>
            <input placeholder="Name"></input>
            <input placeholder="Email address"></input>
            <input placeholder="Message"></input>
    </div>
  );
}