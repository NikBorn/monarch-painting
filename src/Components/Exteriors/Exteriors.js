import React from 'react';
import './Exteriors.css';
import SlideShow from '../SlideShow/SlideShow';

const Exteriors = () => {
  return (
    <div className='main-container'>
      <h2>Exteriors</h2>
      <h4>Monarch painting offers residential exterior painting services for the following areas</h4>
      <ul>
        <li>Trim</li>
        <li>Doors</li>
        <li>Fascia</li>
        <li>Soffits</li>
        <li>Garages</li>
        <li>Sheds</li>
        <li>Decks</li>
        <li>Fences</li>
      </ul>
      <SlideShow />
      <h3>Our Exterior Painting Process</h3>
      <h4>how we protect your home and create beautiful results</h4>
      <div className='process-image'>
      </div>
      <h4>Free estimate</h4>
      <p>
        Every Monarch Painting project begins with a free home estimate. A Monarch Painting representative will come out to your home and walk through your project with you step by step, bring a color deck to help you pick colors, schedule a time to do test patches (up to 3 colors of your choosing) on your house, and set an estimated start date to paint your house! 
      </p>
      <div className='process-image'>
      </div>
      <h4>Power Wash</h4>
      <p>
        1-2 days before the project begins we will power-wash your home in order to clean the surface of dirt, grime, and other clutter.  This will clean up the house and prepare the surface to better receive a new coat of paint. 
      </p>
      <div className='process-image'>
      </div>
      <h4>Preparing the Project</h4>
      <p>
        In our opinion, the prep is the most important part of the job and this is where we separate ourselves from other contractors! Prepping the house well makes a huge difference in the longevity of the paint job. We will do all the necessary caulking, scraping, sanding, masking, priming, wire brushing, and puttying that needs to be done on your home to ensure that our job is a quality one and that it exceeds your expectations!  At your free home consultation one of our representatives will walk through, in detail, what we will do to prep your home.
      </p>
      <div className='process-image'>
      </div>
      <h4>Spraying the Siding</h4>
      <p>
        Approximately 90% of our clients choose to spray the siding rather than brush or roll it. This is because spraying the siding is a more cost effective option for homeowners, and it provides a nice even coat to the textured siding boards.
      </p>
      <div className='process-image'>
      </div>
      <h4>Trimming it Out</h4>
      <p>
        The final step in the project is hand brushing the trim on your house. We use a thicker paint for this to make sure that the trim lasts as long as the siding. 
      </p>
      <div className='process-image'>
      </div>
      <h4>The Final Product</h4>
      <p>
        Once the project is completed, before collecting final payment, a final walk around will be completed with the homeowner to make sure all necessary touch ups are done and that you are completely satisfied with your job!
      </p>
    </div>
  )
};

export default Exteriors;