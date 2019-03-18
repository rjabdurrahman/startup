import React, { Component } from 'react';
import './TopNav.css';


class TopNav extends Component {
    render() {
        return (
            <header>
                <div className="header-nav" style={{ justifyContent: 'space-between' }}>
                    <div style={{ fontFamily: '"Pacifico", cursive', fontSize: '25px' }}>
                        <a href="#/">
                            <img src="img/logo3.png" alt="logo" height={40} />
                            <img src="img/logo.png" alt="logo" height={30} />
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