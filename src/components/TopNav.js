import React, { Component } from 'react';
import axios from 'axios';
import './TopNav.css';


class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            logged: global.localStorage.getItem('user') ? true : false,
            type: global.localStorage.getItem('user') ? JSON.parse(global.localStorage.getItem('user')).type : 0
        }
        // if (global.localStorage.getItem('user') && global.location.pathname != "/create-post")
        //     global.location.href = "/create-post";
    }
    usernameInputHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    passwordInputHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    submitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/users/login', { username: this.state.username, password: this.state.password })
            .then(res => {
                this.setState({ logged: true });
                this.setState({ type: res.data.type });
                global.localStorage.setItem('user', JSON.stringify(res.data));
                // global.location.href = "/create-post";
            })
            .catch(err => {
                console.log(err);
                alert('Username or Password is Incorrect!');
            });
    }

    logOutHandler = () => {
        this.setState({ logged: false });
        global.localStorage.removeItem('user');
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
                    <div style={this.state.logged ? { display: 'none' } : { display: 'block' }}>
                        <form className="flex top-login" onSubmit={this.submitHandler}>
                            <input type="text" className="w3-input" placeholder="Username" name="username" value={this.state.username} onChange={this.usernameInputHandler} required />
                            <input type="password" className="w3-input" placeholder="Password" name="password" value={this.state.password} onChange={this.passwordInputHandler} required />
                            <button className="w3-white">Login</button>
                        </form>
                    </div>
                    <div className="top-login" style={this.state.logged ? { display: 'block' } : { display: 'none' }}>
                        <div className="w3-bar" style={this.state.type === 1 ? { display: 'block' } : { display: 'none' }}>
                            <a href="jsutlinek" className="w3-bar-item w3-button w3-bottombar">HOME</a>
                            <a href="jsutlinek" className="w3-bar-item w3-button w3-bottombar">CREATE POST</a>
                            <a href="jsutlinek" className="w3-bar-item w3-button w3-bottombar">MESSAGES</a>
                            <a href="jsutlinek" className="w3-bar-item w3-button w3-bottombar">PROFILE</a>
                            <a href="/" className="w3-bar-item w3-button w3-bottombar" onClick={this.logOutHandler}>LOG OUT</a>
                        </div>
                        <div className="w3-bar" style={this.state.type === 2 ? { display: 'block' } : { display: 'none' }}>
                            <a href="jsutlinek" className="w3-bar-item w3-button w3-bottombar">HOME</a>
                            <a href="jsutlinek" className="w3-bar-item w3-button w3-bottombar">MY FEEDS</a>
                            <a href="jsutlinek" className="w3-bar-item w3-button w3-bottombar">OVERVIEW</a>
                            <a href="jsutlinek" className="w3-bar-item w3-button w3-bottombar">MESSAGES</a>
                            <a href="jsutlinek" className="w3-bar-item w3-button w3-bottombar">PROFILE</a>
                            <a href="/" className="w3-bar-item w3-button w3-bottombar" onClick={this.logOutHandler}>LOG OUT</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default TopNav;