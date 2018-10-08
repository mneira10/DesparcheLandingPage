import React, { Component } from 'react';
import './App.css';
import MainBanner from './modules/MainBanner';
import Features from './modules/Features';
import MailingList from "./modules/MailingList";
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainBanner/>
        <Features/>
        <MailingList/>
      </div>
    );
  }
}

export default App;
