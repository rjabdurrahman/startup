import React, { Component } from 'react'
import update from 'react-addons-update';
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
            agree: false
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

    submitHandler = (event) => {
        event.preventDefault();
        if(!this.state.agree){
            alert('Please Agree Terms and Rules!');
            return;
        }
        console.log('submitte');
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <Overlay>
                    <h1 style={{ fontSize: '65px', textAlign: 'center', color: 'white' }} className="ex-font">Get Started As A</h1>
                    <div className="mont-font" style={{ fontSize: '25px', textAlign: 'center' }}>
                        <button className="w3-btn main-bg-color" onClick={() => { this.setState({ showRegister: true, regType: 'Startup' }); this.updateType(1) }}>Startup</button>
                        <button className="w3-btn main-bg-color" onClick={() => { this.setState({ showRegister: true, regType: 'Experienced' }); this.updateType(2) }}>Experienced</button>
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
                                <form onSubmit={this.submitHandler}>
                                    <div className="w3-row w3-section">
                                        <div className="w3-col" style={{ width: '120px', padding: '10px' }}>
                                            <label className="w3-medium">Username</label>
                                        </div>
                                        <div className="w3-rest">
                                            <input className="w3-input w3-border" type="text" name="username" onChange={this.inputHandler} required />
                                        </div>
                                    </div>
                                    <div className="w3-row w3-section">
                                        <div className="w3-col" style={{ width: '120px', padding: '10px' }}>
                                            <label className="w3-medium">Email</label>
                                        </div>
                                        <div className="w3-rest">
                                            <input className="w3-input w3-border" type="text" name="email" onChange={this.inputHandler} required />
                                        </div>
                                    </div>
                                    <div className="w3-row w3-section">
                                        <div className="w3-col" style={{ width: '120px', padding: '10px' }}>
                                            <label className="w3-medium">Password</label>
                                        </div>
                                        <div className="w3-rest">
                                            <input className="w3-input w3-border" type="text" name="password" onChange={this.inputHandler} required />
                                        </div>
                                    </div>
                                    <div className="w3-row w3-section">
                                        <div className="w3-col" style={{ width: '120px', padding: '10px' }}>
                                            <label className="w3-medium">Re Passowrd</label>
                                        </div>
                                        <div className="w3-rest">
                                            <input className="w3-input w3-border" type="text" required />
                                        </div>
                                    </div>
                                    <p>
                                        <input className="w3-check" type="checkbox" onChange={() => { this.setState({ agree: true }) }} />
                                        <label style={{ fontSize: '12px', color: 'indigo' }}>I accept the <a style={{ color: 'blue' }} href="terms">Terms and Conditions</a>.</label></p>
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
                <Post title="Recent Feeds" />
            </div>
        )
    }
}

export default Landing
