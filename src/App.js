import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav';
import './w3.css';
import Overlay from './components/Overlay';
import CardArea from './components/CardArea';
import Footer from './components/Footer';
// import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <Overlay />
        {/* <Register/> */}
        <CardArea/>
        <Footer/>
      </div>
    );
  }
}

export default App;
