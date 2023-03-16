import React from 'react';

export default function AboutMe() {
  return (
    <div className="justify-content-center">
      <h1>About Me</h1>
      <div
        className="text-center"
        style= {{/*paddingBottom:"100%", overflow: "hidden", position: "relative"}*/}}
      >
        <img 
          src="https://i.imgur.com/geb4EEE.jpg"
          alt="profile"
          className="img-fluid"
          style= {{ maxWidth: '70%', height: "auto", aspectRatio: "1/1" }}
        />
        <p
          className="text-align-center"
          style= {{ maxWidth: '70%' }}
        >
          Welcome to my website! I am a web developer who is eager to find opportunities to showcase my skills and prove that I can be an asset to any employer. I have project experience in front-end and back-end web development, including React.
          Feel free to contact me for opportunites to connect!
        </p>
      </div>
    </div>
  );
  }

  
