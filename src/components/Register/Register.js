import React, { Component } from 'react'

export class Register extends Component {

    render() {
        return (
            <div className="w3-modal">
                <div className="w3-modal-content w3-animate-zoom div-box" style={{ backgroundColor: 'transparent' }}>
                    <div className="w3-light-gray w3-card-4 margin-auto">
                        <div className="w3-container main-bg-color div-title">
                            <span className="w3-button w3-display-topright">×</span>
                            <h2>Register As a</h2>
                        </div>
                        <div className="w3-container">
                            <form onSubmit={this.submitHandler}>
                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: '120px', padding: '10px' }}>
                                        <label className="w3-medium">Username</label>
                                    </div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" type="text" name="username" required />
                                    </div>
                                </div>
                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: '120px', padding: '10px' }}>
                                        <label className="w3-medium">Email</label>
                                    </div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" type="email" name="email" required />
                                    </div>
                                </div>
                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: '120px', padding: '10px' }}>
                                        <label className="w3-medium">Password</label>
                                    </div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" type="password" name="password" required />
                                    </div>
                                </div>
                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: '120px', padding: '10px' }}>
                                        <label className="w3-medium">Re Passowrd</label>
                                    </div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" type="password" required />
                                    </div>
                                </div>
                                <p>
                                    <input className="w3-check" type="checkbox" />
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
        )
    }
}

export default Register
