import React from 'react';
import resumePdf from '../../assets/LevitesResume.pdf';


const handleResumeClick = () => {
  window.open(resumePdf);
}

const styles = {
  resume: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: "40px",
  }
}

export default function Resume() {
  return (
    <div 
    
    style={styles.resume}
    onClick={handleResumeClick}>
      <button className="btn btn-outline-primary btn-lg btn-block">Click to Download Resume</button>
    </div>
  );
}