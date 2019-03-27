import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import TopNav from './components/TopNav';
import './w3.css';
import Overlay from './components/Overlay';
import CardArea from './components/CardArea';
import Footer from './components/Footer';
import Post from './components/Post';

class App extends Component {
  constructor() {
    super()
    this.state = {
      showRegister: false,
      regType: 'Startup'
    }
  }
  render() {
    return (
      <div>
        <TopNav />
        <BrowserRouter>
          <div>
            <Route path='/posts' exact component={Post} />
          </div>
        </BrowserRouter>
        <Overlay>
          <h1 style={{ fontSize: '65px', textAlign: 'center', color: 'white' }} className="ex-font">Get Started As A</h1>
          <div className="mont-font" style={{ fontSize: '25px', textAlign: 'center' }}>
            <button className="w3-btn main-bg-color" onClick={() => this.setState({ showRegister: true, regType: 'Startup' })}>Startup</button>
            <button className="w3-btn main-bg-color" onClick={() => this.setState({ showRegister: true, regType: 'Experienced' })}>Experienced</button>
          </div>
        </Overlay>
        <div style={this.state.showRegister ? { display: 'block' } : { display: 'none' }} className="w3-modal">
          <div className="w3-modal-content w3-animate-zoom div-box" style={{ backgroundColor: 'transparent' }}>
            <div className="w3-light-gray w3-card-4 margin-auto">
              <div className="w3-container main-bg-color div-title">
                <span onClick={() => this.setState({ showRegister: false })} className="w3-button w3-display-topright">×</span>
                <h2>Register As a {this.state.regType}</h2>
              </div>
              <div className="w3-container">
                <form id="form1">
                  <div className="w3-row w3-section">
                    <div className="w3-col" style={{ width: '120px', padding: '10px' }}>
                      <label className="w3-medium">Username</label>
                    </div>
                    <div className="w3-rest">
                      <input className="w3-input w3-border" type="text" id="payACCode" required />
                    </div>
                  </div>
                  <div className="w3-row w3-section">
                    <div className="w3-col" style={{ width: '120px', padding: '10px' }}>
                      <label className="w3-medium">Email</label>
                    </div>
                    <div className="w3-rest">
                      <input className="w3-input w3-border" type="text" id="payPartyName" required />
                    </div>
                  </div>
                  <div className="w3-row w3-section">
                    <div className="w3-col" style={{ width: '120px', padding: '10px' }}>
                      <label className="w3-medium">Password</label>
                    </div>
                    <div className="w3-rest">
                      <input className="w3-input w3-border" type="text" id="payPartyType" required />
                    </div>
                  </div>
                  <div className="w3-row w3-section">
                    <div className="w3-col" style={{ width: '120px', padding: '10px' }}>
                      <label className="w3-medium">Re Passowrd</label>
                    </div>
                    <div className="w3-rest">
                      <input className="w3-input w3-border" type="text" id="payProprietor" required />
                    </div>
                  </div>
                  <p>
                    <input className="w3-check" type="checkbox" />
                    <label style={{ fontSize: '12px', color: 'indigo' }}>I accept the <a style={{ color: 'blue' }} href="terms">Terms and Conditions</a>.</label></p>
                  <p>
                  </p><p className="clearfix">
                    <button id="submitPayBtn" className="w3-btn main-bg-color div-title" style={{ float: 'right' }}>Submit</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <CardArea />
        <Post />
        <Footer />
      </div>
    );
  }
}

export default App;
