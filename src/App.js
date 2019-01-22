import React, { Component } from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage.js';
import Exteriors from './Components/Exteriors/Exteriors.js';
import Interiors from './Components/Interiors/Interiors.js';
import TabBar from './Components/TabBar/TabBar.js';
import About from './Components/About/About.js';
import Services from './Components/Services/Services.js';
import Contact from './Components/Contact/Contact.js';

import { Route } from 'react-router';
// p3v-cXljFJY-heqLFbDcggUbQ9CGrOueb-vskZbmTbGqOuRSHwlr89JqHl0WsGmEndWRRpOhARZbyAPkhtUtCWASFEOWgvwDtcxQTiEjOS37wjTHeX9o5O6f5lxGXHYx


class App extends Component {


  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {
    // GET https://api.yelp.com/v3/businesses/xAG4O7l-t1ubbwVAlPnDKg/reviews
    const response = await fetch(`https://api.yelp.com/v3/businesses/xAG4O7l-t1ubbwVAlPnDKg/reviews`);
    const json = await response.json();
    this.setState({ data: json });
  }

  render() {
    return (
      <div className="App">

        <Route exact path='/'
          render={() =>
              <HomePage />
          }
        />

        <Route exact path='/Interiors'
          render={() =>
            <Interiors />
          }
        />

        <Route exact path='/Exteriors'
          render={() =>
            <Exteriors />
          }
        />

        <Route exact path='/About'
          render={() =>
            <About />
          }
        />

        <Route exact path='/Services'
          render={() =>
            <Services />
          }
        />

        <Route exact path='/Contact'
          render={() =>
            <Contact />
          }
        />

        <Route path='/'
          render={() =>
            <TabBar />
          }
        />
        
      </div>
 
    );
  }
}

export default App;
