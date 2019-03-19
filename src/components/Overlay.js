import React, { Component } from 'react'
import Background from './bu-bg.jpg';
import './Overlay.css'

class Overlay extends Component {
    showReg() {
        console.log('ok');
    }
    render() {
        return (
            <div className="overlay-container" style={{ backgroundImage: `url(${Background})` }}>
                <div className="overlay">
                    <div className="w3-container home-unlog" style={{ marginTop: '110px' }}>
                        <h1 style={{ fontSize: '65px', textAlign: 'center', color: 'white' }} className="ex-font">Get Started As A</h1>
                        <div className="mont-font" style={{ fontSize: '25px', textAlign: 'center' }}>
                            <button className="w3-btn main-bg-color" onClick={this.showReg}>Startup</button>
                            <button className="w3-btn main-bg-color" onClick={this.showReg}>Experienced</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overlay;
