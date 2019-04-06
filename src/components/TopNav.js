import React, { Component } from 'react';
import axios from 'axios';
import './TopNav.css';


class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            logged: false
        }
        console.log(this.state.logged);
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
                global.localStorage.setItem('user', JSON.stringify(res.data));
                // global.location.href = "/create-post";
                console.log(this.state.logged)
                if (!(res.status === 200)) {
                    alert(res.message);
                }
            })
            .catch(err => console.log(err));
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
                            <input type="text" className="w3-input" placeholder="Password" name="password" value={this.state.password} onChange={this.passwordInputHandler} required />
                            <button className="w3-white">Login</button>
                        </form>
                    </div>
                    <div className="top-login" style={this.state.logged ? { display: 'block' } : { display: 'none' }}>
                        <button className="w3-white" onClick={() => this.setState({ logged: false })}>Logout</button>
                    </div>
                </div>
            </header>
        );
    }
}

export default TopNav;