// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio

import React, { useState } from 'react';
import Navigation from './Navigation';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';


export default function Header() {
    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
      if (currentPage === 'About') {
        return <AboutMe />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <header>
          {<h1>Shane Levites</h1>}
          {/* We are passing the currentPage from state and the function to update it */}
          {<Navigation currentPage={currentPage} handlePageChange={handlePageChange} />} 
        </header>
        {renderPage()}
      </div>
    );
  }