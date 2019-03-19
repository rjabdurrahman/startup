import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav';
import './w3.css';
import Overlay from './components/Overlay';
import CardArea from './components/CardArea';
import Footer from './components/Footer';
import Register from './components/Register';

class App extends Component {
  constructor() {
    super()
    this.state = {
      showRegister: false
    }
  }
  showReg() {
    this.setState({ showRegister: true });
    console.log(this.state.showRegister);
  }
  render() {
    return (
      <div>
        <TopNav />
        <Overlay>
          <h1 style={{ fontSize: '65px', textAlign: 'center', color: 'white' }} className="ex-font">Get Started As A</h1>
          <div className="mont-font" style={{ fontSize: '25px', textAlign: 'center' }}>
            <button className="w3-btn main-bg-color" onClick={() => this.showReg()}>Startup</button>
            <button className="w3-btn main-bg-color" onClick={() => this.showReg()}>Experienced</button>
          </div>
        </Overlay>
        <Register show={this.state.showRegister} />
        <CardArea />
        <Footer />
      </div>
    );
  }
}

export default App;
