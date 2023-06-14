import React from 'react';

export default function AboutMe() {
  return (
    <div className="about-me">
      <h1>Welcome to Shane Lev Dev!</h1>
      <div className="about-div">
        <img 
          src="https://i.imgur.com/geb4EEE.jpg"
          alt="profile"
          className="img-fluid profile"
          style= {{ maxWidth: '70%', height: "auto", aspectRatio: "1/1" }}
        />
        <p  className="bio">
        Software Engineer who identifies and solves problems. Recognized for finding technological solutions to streamline processes and for adapting to evolving compliance standards during ten years in International Education. Can combine past experience with skills acquired from a Certificate in Web Development to help organizations optimize their projects.        </p>
      </div>
    </div>
  );
  }

  
