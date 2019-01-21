import React from 'react';
import Footer from '../Footer/Footer.js';

const Services = () => {
  return (
    <div className='main-container'>
      <div className='home-hero-image'>
      </div>
      <h2>Services</h2>
      <p>Monarch Painting transforms your home with a vibrant new look. From your bedrooms, hallways, and kitchen to your garage, exterior siding and deck, discover how fresh, clean paint or a new color can revitalize your home. Our skillful craftsmanship, well-engineered processes, and customer service deliver the highest quality painting experience. We invest time to understand your vision, ensuring we get it right the first time.</p>
      <a className='contact-button' href='/interiors'>Interior Services</a>
      <a className='contact-button' href='/exteriors'>Exterior Services</a>
      <Footer />
    </div>
  )
};

export default Services;