import React from 'react';
import './Interiors.css';
import SlideShow from '../SlideShow/SlideShow.js';
import Footer from '../Footer/Footer.js';


const Interiors = () => {
  //'interior-slide1'
  const slides = ['interior-slide10', 'interior-slide11', 'interior-slide12', 'interior-slide13', 'interior-slide2', 'interior-slide3', 'interior-slide7', 'interior-slide8', 'interior-slide9'];
  const cabinetSlides = ['interior-slide4', 'interior-slide5', 'interior-slide6']

  return (
    <div className='main-container'>
      <h2>Interiors</h2>
      <h4>Monarch painting offers residential interior painting services for the following areas</h4>
      <ul className='interior-services-ul'>
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
      <h5>Drywall Repair</h5>
      <div className='drywall-image'></div>
      <p className='service-blurb'>Blurb about drywall repair</p>

      <h5>Cabinet Refinishing</h5>
      <p className='service-blurb'>Looking for a fresh look in the kitchen?  Monarch painting can make your cabinets look like new.  We use premium quality finishes and detail oriented techniques to ensure a perfectly finished product.</p>
      <h3>Our Cabinet Refinish examples</h3>
      <SlideShow slides={cabinetSlides} />

      <h3>Our interior painting exmples</h3>
      <SlideShow slides={slides} />
      <h3>Our Interior Painting Process</h3>
      <h4>how we protect your home and create beautiful results</h4>
      <div className='process-image setup-image'>
      </div>
      <h4>Set up</h4>
      <p>
        We will move large furniture to the middle of the room and cover with clean plastic.
        The floors will then be covered with drop cloths.
      </p>
      <div className='process-image'>
      </div>
      <h4>Prep</h4>
      <p>
        We fill holes and cracks. Prime and seal any stains and sand any necessary surfaces.
      </p>
      <div className='process-image paint-image'>
      </div>
      <h4>Paint</h4>
      <p>
        We then prime any necessary surfaces and apply premium quality top coat paint to
        create a beautiful uniform finish.
      </p>
      <div className='process-image'>
      </div>
      <h4>Clean up</h4>
      <p>
        We then remove all our coverings and move furniture back to the original positions.
        We then clean any surfaces needed.
      </p>
      <div className='process-image inspect-image'>
      </div>
      <h4>Inspect</h4>
      <p>
        We then do a walk through so you can see our final product and provide any feedback.
      </p>
      <Footer />
    </div>
  )
};

export default Interiors;

