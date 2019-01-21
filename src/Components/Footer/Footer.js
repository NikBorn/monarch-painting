import React from 'react';
import './Footer.css';

const Footer = () => {

  return(
    <div className='footer'>
      <div className='footer-section footer-contact-section'>
        <p className='footer-category-header'>Contact</p>
        <a className='contact-button  footer-button' href='mailto:Monarchpaintingcompany@gmail.com'>Email Monarch</a>
        <a className='contact-button  footer-button' href='tel:1-720-900-1625'>Call Monarch</a>
        <p className='footer-contact footer-phone'>Phone: 720-900-1625</p>
        <p className='footer-contact'>Email: MonarchPaintingCompany@gmail.com</p>
      </div>
      <div className='footer-section'>
        <p className='footer-category-header'>Services Provided</p>
        <ul className='footer-ul'>
          <li className='footer-li'>Interior Painting</li>
          <li className='footer-li'>Exterior Painting</li>
          <li className='footer-li'>Cabinet Painting and Refinishing</li>
          <li className='footer-li'>Fence Painting and Refinishing</li>
        </ul>
      </div>
    </div>
  )
};

export default Footer;