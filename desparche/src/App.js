import React, { Component } from 'react';
import './App.css';
import MainBanner from './modules/MainBanner';
import Features from './modules/Features';
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainBanner/>
        <Features/>
      </div>
    );
  }
}

export default App;
