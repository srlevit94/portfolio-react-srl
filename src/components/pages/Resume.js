import React from 'react';
import resumePdf from '../../assets/LevitesResume.pdf';

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
      <div>
        <h2>Skills</h2>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
      </div>
    </div>
  );
}