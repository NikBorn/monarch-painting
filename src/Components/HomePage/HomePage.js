import React from 'react';
import './HomePage.css';
import Footer from '../Footer/Footer.js';

const HomePage = () => {
  return (
    <div className='main-container'>
      <div className='monarch-logo'></div>
          {/* <h1>MONARCH PAINTING</h1> */}
      <div className='home-hero-image'>

      </div>
          <h2>Customer-focused Painting Specialists</h2>
          <p>
            Monarch Painting works with homeowners, property managers, homeowners’ associations, and communities across the Denver Metro area to restore, revitalize, and enhance their properties with high quality painting services. Our clients choose us because they’ve experienced the difference in our process, the ease of communication with our team, and the passion of our painters. Partner with Monarch Painting on your next residential painting project for a personalized experience and incredible results.
          </p>
      <h3>Trust in Monarch Painting’s Difference</h3>
      <p>
        Monarch Painting is a team of caring, passionate, service-oriented professionals. Locally owned and operated, we’re committed to making your interior painting experience easy and low-stress with our unique combination of personalized service, quality work, and streamlined process. We understand the frustration of working with interior painting contractors who fail to deliver on promises. Team up with Monarch Painting for brilliant results.
      </p>
      <Footer />
    </div>
  )
};

export default HomePage;