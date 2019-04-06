import React, { Component } from 'react';
import './TopNav.css';


class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            logged: false
        }
    }
    usernameInputHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    passwordInputHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <header>
                <div className="header-nav" style={{ justifyContent: 'space-between' }}>
                    <div style={{ fontFamily: '"Pacifico", cursive', fontSize: '25px' }}>
                        <a href="#/">
                            <h2 style={{ margin: '0' }} className="pac-font">TenStartup</h2>
                        </a>
                    </div>
                    <div>
                        <form className="flex top-login" onSubmit={this.submitHandler}>
                            <input type="text" className="w3-input" placeholder="Username" name="username" value={this.state.username} onChange={this.usernameInputHandler} required />
                            <input type="text" className="w3-input" placeholder="Password" name="password" value={this.state.password} onChange={this.passwordInputHandler} required />
                            <button className="w3-white">Login</button>
                        </form>
                    </div>
                </div>
            </header>
        );
    }
}

export default TopNav;