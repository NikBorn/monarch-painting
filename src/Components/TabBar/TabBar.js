import React, { Component } from 'react';

class TabBar extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className='tab-bar'>
        <a href='/' className='tab'>Home</a>
        <a href='/about'className='tab'>About</a>
        <a href='/services' className='tab'>Services</a>
        <a href='/contact' className='tab'>Contact</a>
      </div>
    ) 
  }

};

export default TabBar;

