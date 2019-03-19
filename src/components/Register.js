import React, { Component } from 'react'

class Register extends Component {
    render() {
        return (
            <div className="w3-modal">
                <div className="w3-modal-content w3-animate-zoom div-box" style={{ backgroundColor: 'transparent' }}>
                    <div className="w3-light-gray w3-card-4 margin-auto">
                        <div className="w3-container main-bg-color div-title">
                            <span className="w3-button w3-display-topright">×</span>
                            <h2>Register</h2>
                        </div>
                        <div className="w3-container">
                            <form id="form1">
                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: '150px', padding: '10px' }}>
                                        <label className="w3-medium">Username</label>
                                    </div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" type="text" name id="payACCode" required />
                                    </div>
                                </div>
                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: '150px', padding: '10px' }}>
                                        <label className="w3-medium">Email</label>
                                    </div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" type="text" name id="payPartyName" required />
                                    </div>
                                </div>
                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: '150px', padding: '10px' }}>
                                        <label className="w3-medium">Password</label>
                                    </div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" type="text" name id="payPartyType" required />
                                    </div>
                                </div>
                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: '150px', padding: '10px' }}>
                                        <label className="w3-medium">Re Passowrd</label>
                                    </div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" type="text" name id="payProprietor" required />
                                    </div>
                                </div>
                                <p>
                                    <input className="w3-check" type="checkbox" defaultChecked="checked" />
                                    <label>I accept the Terms and Conditions.</label></p>
                                <p>
                                </p><p className="clearfix">
                                    <button id="submitPayBtn" className="w3-btn main-bg-color div-title" style={{ float: 'right' }}>Submit</button>
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
