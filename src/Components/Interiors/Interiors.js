import React from 'react';
import './Interiors.css';
import SlideShow from '../SlideShow/SlideShow.js';
import Footer from '../Footer/Footer.js';


const Interiors = () => {
  const slides = ['interior-slide1', 'interior-slide2', 'interior-slide3', 'interior-slide4', 'interior-slide5', 'interior-slide6'];
  const cabinetSlides = ['interior-slide4', 'interior-slide5', 'interior-slide6']

  return (
    <div className='main-container'>
      <h2>Interiors</h2>
      <h4>Monarch painting offers residential interior painting services for the following areas</h4>
      <ul>
        <li>Bathrooms</li>
        <li>Kitchens</li>
        <li>Dining Rooms</li>
        <li>Living Rooms</li>
        <li>Family Rooms</li>
        <li>Game/Play Rooms</li>
        <li>Pantries</li>
        <li>Hallways</li>
        <li>Bedrooms</li>
        <li>Offices</li>
        <li>Closets</li>
        <li>Basements</li>
      </ul>
      <h3>Our interior painting exmples</h3>
      <SlideShow slides={slides} />
      <h3>Our Cabinet Refinish examples</h3>
      <SlideShow slides={cabinetSlides} />
      <h3>Our Interior Painting Process</h3>
      <h4>how we protect your home and create beautiful results</h4>
      <Footer />
    </div>
  )
};

export default Interiors;

