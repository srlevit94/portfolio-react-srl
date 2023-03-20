import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
    return (
        <footer
            className="text-align-center"
            style={{textAlign: "center"}}
        >
            <div className='socialMedia'>
        <a href='https://github.com/srlevit94'>
          <GitHubIcon
            color="action"
            fontSize="large"
            />
        </a>
        <a href='https://www.instagram.com/shane.lvts/'>
          <InstagramIcon
            color="action"
            fontSize="large"/>
        </a>
        <a href='https://www.linkedin.com/in/shanelevites/'>
          <LinkedInIcon
            color="action"
            fontSize="large"/>
        </a>
      </div>
            <p> &copy; Shane Levites 2023 </p>
        </footer>
    );
}


export default Footer;
