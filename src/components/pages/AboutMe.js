import React from 'react';

export default function AboutMe() {
  return (
    <div className="about-me">
      <h1>Shane Lev Dev</h1>
      <div className="about-div">
        <img 
          src="https://i.imgur.com/geb4EEE.jpg"
          alt="profile"
          className="img-fluid profile"
          style= {{ maxWidth: '70%', height: "auto", aspectRatio: "1/1" }}
        />
        <p  className="bio">
          I am a problem-solving software engineer based in Los Angeles. I am looking for opportunities to grow and showcase how much of an asset I can be to potential employers. Not only do I have a strong work ethic, but I am a fast learner who likes to take on new challenges. 
        </p>
      </div>
    </div>
  );
  }

  
