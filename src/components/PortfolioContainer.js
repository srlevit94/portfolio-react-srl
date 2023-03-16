import React from 'react';
import Header from './Header'
import Footer from './Footer'

export default function PortfolioContainer() {

  return (
    <div>
      {<Header/>}
      {/* We are passing the currentPage from state and the function to update it */}
      {<Footer/>}
    </div>
  );
}
