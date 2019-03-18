import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav';
import './w3.css';
import Overlay from './components/Overlay';

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <Overlay />
      </div>
    );
  }
}

export default App;
