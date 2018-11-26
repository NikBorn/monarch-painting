import React, { Component } from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage.js';
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
        
      </div>
 
    );
  }
}

export default App;
