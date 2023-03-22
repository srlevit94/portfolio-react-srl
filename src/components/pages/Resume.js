import React from 'react';
import resumePdf from '../../assets/LevitesResume.pdf';
import '../../assets/css/Resume.css';


// opens pdf of resume
const handleResumeClick = () => {
  window.open(resumePdf);
}

//download button style
const styles = {
  resume: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: "40px",
  }
}

export default function Resume() {
  return (
    <div>
      <div 
      style={styles.resume}
      onClick={handleResumeClick}>
        <button className="btn btn-outline-success btn-lg btn-block">Click to Download Resume</button>
      </div>
      <div className="skillsContainer">
        <div>
          <h2>Front-End Skills</h2>
          <ul className="skillsList">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React</li>
          </ul>
        </div>
        <div>
        <h2>Back-End Skills</h2>
          <ul className="skillsList">
              <li>APIs</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>MERN Stack</li>
              <li>NodeJS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}