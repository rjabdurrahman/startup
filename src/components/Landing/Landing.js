import React, { Component } from 'react'
import update from 'react-addons-update';
import axios from 'axios';
import Overlay from '../Overlay';
import CardArea from '../CardArea';
import Post from '../Post';

export class Landing extends Component {

    constructor() {
        super()
        this.state = {
            showRegister: false,
            regType: 'Startup',
            user: {
                username: '',
                email: '',
                password: '',
                type: 1
            },
            agree: false,
            confirmPassword: '',
            userType: global.localStorage.getItem('user') ? JSON.parse(global.localStorage.getItem('user')).type : 0
        }
    }

    inputHandler = (event) => {
        this.state.user[event.target.name] = event.target.value;
        this.setState({ user: this.state.user });
    }

    updateType = (n) => {
        this.setState(
            { user: update(this.state.user, { type: { $set: n } }) }
        )
    }

    confirmPasswordHandler = (event) => {
        this.setState({ confirmPassword: event.target.value });
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (!this.state.agree) {
            alert('Please Agree Terms and Rules!');
            return;
        }
        console.log('submitte');
        axios.post('http://localhost:5000/api/users/register', this.state.user)
            .then(res => {
                console.log(res.data);
                console.log(res.status);
                this.setState({
                    showRegister: false,
                    user: {
                        username: '',
                        email: '',
                        password: '',
                        type: 1
                    },
                    agree: false,
                    confirmPassword: ''
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Overlay>
                    <div style={this.state.userType === 0 ? { display: 'block' } : { display: 'none' }}>
                        <h1 style={{ fontSize: '65px', textAlign: 'center', color: 'white' }} className="ex-font">Get Started As A</h1>
                        <div className="mont-font" style={{ fontSize: '25px', textAlign: 'center' }}>
                            <button className="w3-btn main-bg-color" onClick={() => { this.setState({ showRegister: true, regType: 'Startup' }); this.updateType(1) }}>Startup</button>
                            <button className="w3-btn main-bg-color" onClick={() => { this.setState({ showRegister: true, regType: 'Experienced' }); this.updateType(2) }}>Experienced</button>
                        </div>
                    </div>
                    <div style={this.state.userType === 1 ? { display: 'block', width: '800px' } : { display: 'none' }}>
                        <h1 style={{ fontSize: '65px', textAlign: 'center', color: 'white' }} className="ex-font">Boost Your Business</h1>
                        <div className="mont-font" style={{ fontSize: '25px', textAlign: 'center' }}>
                            <a href="/create-post" style={{marginBottom: '20px'}} className="w3-btn main-bg-color">Create New Post</a>
                            <a href="/posts" className="w3-btn w3-white">Show Experienced</a>
                        </div>
                    </div>
                    <div style={this.state.userType === 2 ? { display: 'block', width: '800px', marginLeft: 'auto' } : { display: 'none' }}>
                        <h1 style={{ fontSize: '65px', textAlign: 'center', color: 'white' }} className="ex-font">Provide Your Experience</h1>
                        <div className="mont-font" style={{ fontSize: '25px', textAlign: 'center' }}>
                            <a href="/" style={{marginBottom: '20px'}} className="w3-btn w3-white">Create Profile</a>
                            <a href="/posts" className="w3-btn main-bg-color">Show Recent Feeds</a>
                        </div>
                    </div>
                </Overlay>
                <div style={this.state.showRegister ? { display: 'block' } : { display: 'none' }} className="w3-modal">
                    <div className="w3-modal-content w3-animate-zoom div-box" style={{ backgroundColor: 'transparent' }}>
                        <div className="w3-light-gray w3-card-4 margin-auto">
                            <div className="w3-container main-bg-color div-title">
                                <span onClick={() => this.setState({ showRegister: false, confirmPassword: '' })} className="w3-button w3-display-topright">×</span>
                                <h2>Register As a {this.state.regType}</h2>
                            </div>
                            <div className="w3-container">
                                <form onSubmit={this.submitHandler}>
                                    <div className="w3-row w3-section">
                                        <div className="w3-col" style={{ width: '120px', padding: '10px' }}>
                                            <label className="w3-medium">Username</label>
                                        </div>
                                        <div className="w3-rest">
                                            <input className="w3-input w3-border" type="text" name="username" value={this.state.user.username} onChange={this.inputHandler} required />
                                        </div>
                                    </div>
                                    <div className="w3-row w3-section">
                                        <div className="w3-col" style={{ width: '120px', padding: '10px' }}>
                                            <label className="w3-medium">Email</label>
                                        </div>
                                        <div className="w3-rest">
                                            <input className="w3-input w3-border" type="email" name="email" value={this.state.user.email} onChange={this.inputHandler} required />
                                        </div>
                                    </div>
                                    <div className="w3-row w3-section">
                                        <div className="w3-col" style={{ width: '120px', padding: '10px' }}>
                                            <label className="w3-medium">Password</label>
                                        </div>
                                        <div className="w3-rest">
                                            <input className="w3-input w3-border" type="password" name="password" value={this.state.user.password} onChange={this.inputHandler} required />
                                        </div>
                                    </div>
                                    <div className="w3-row w3-section">
                                        <div className="w3-col" style={{ width: '120px', padding: '10px' }}>
                                            <label className="w3-medium">Re Passowrd</label>
                                        </div>
                                        <div className="w3-rest">
                                            <input className="w3-input w3-border" type="password" onChange={this.confirmPasswordHandler} value={this.state.confirmPassword} required />
                                        </div>
                                    </div>
                                    <p>
                                        <input className="w3-check" type="checkbox" onChange={() => { this.setState({ agree: true }) }} />
                                        <label style={{ fontSize: '12px', color: 'indigo' }}> I accept the <a style={{ color: 'blue' }} href="terms">Terms and Conditions</a>.</label></p>
                                    <p>
                                    </p><p className="clearfix">
                                        <button className="w3-btn main-bg-color div-title" style={{ float: 'right' }}>Submit</button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <CardArea />
                {/* <Post title="Recent Feeds" /> */}
            </div>
        )
    }
}

export default Landing
