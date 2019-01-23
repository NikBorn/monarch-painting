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

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'p3v-cXljFJY-heqLFbDcggUbQ9CGrOueb-vskZbmTbGqOuRSHwlr89JqHl0WsGmEndWRRpOhARZbyAPkhtUtCWASFEOWgvwDtcxQTiEjOS37wjTHeX9o5O6f5lxGXHYx';

const searchRequest = {
  term: 'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});


class App extends Component {


  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {
    // // GET https://api.yelp.com/v3/businesses/xAG4O7l-t1ubbwVAlPnDKg/reviews
    // const response = await fetch(`https://api.yelp.com/v3/businesses/xAG4O7l-t1ubbwVAlPnDKg/reviews`);
    // const json = await response.json();
    // this.setState({ data: json });
    const searchRequest = {
      term: 'Four Barrel Coffee',
      location: 'san francisco, ca'
    };

    const client = yelp.client(apiKey);

    client.search(searchRequest).then(response => {
      const firstResult = response.jsonBody.businesses[0];
      const prettyJson = JSON.stringify(firstResult, null, 4);
      console.log(prettyJson);
    }).catch(e => {
      console.log(e);
    });

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
