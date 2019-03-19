import React, { Component } from 'react';
import './TopNav.css';


class TopNav extends Component {
    render() {
        return (
            <header>
                <div className="header-nav" style={{ justifyContent: 'space-between' }}>
                    <div style={{ fontFamily: '"Pacifico", cursive', fontSize: '25px' }}>
                        <a href="#/">
                            <h2 style={{margin: '0'}} className="pac-font">TenStartup</h2>
                        </a>
                    </div>
                    <div className="flex top-login">
                        <input type="text" className="w3-input" placeholder="Username" />
                        <input type="text" className="w3-input" placeholder="Password" />
                        <button className="w3-white">Login</button>
                    </div>
                </div>
            </header>
        );
    }
}

export default TopNav;