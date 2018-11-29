import React, { Component } from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage.js';
import Exteriors from './Components/Exteriors/Exteriors.js';
import Interiors from './Components/Interiors/Interiors.js';
import TabBar from './Components/TabBar/TabBar.js';
import { Route } from 'react-router';

class App extends Component {
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
