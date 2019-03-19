import React, { Component } from 'react'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            show: true
        }
    }
    render() {
        return (
            <div style={this.props.show && this.state.show ? { display: 'block' } : { display: 'none' }} className="w3-modal">
                <div className="w3-modal-content w3-animate-zoom div-box" style={{ backgroundColor: 'transparent' }}>
                    <div className="w3-light-gray w3-card-4 margin-auto">
                        <div className="w3-container main-bg-color div-title">
                            <span onClick={() => this.setState({ show: false })} className="w3-button w3-display-topright">×</span>
                            <h2>Register</h2>
                        </div>
                        <div className="w3-container">
                            <form id="form1">
                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: '150px', padding: '10px' }}>
                                        <label className="w3-medium">Username</label>
                                    </div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" type="text" id="payACCode" required />
                                    </div>
                                </div>
                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: '150px', padding: '10px' }}>
                                        <label className="w3-medium">Email</label>
                                    </div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" type="text" id="payPartyName" required />
                                    </div>
                                </div>
                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: '150px', padding: '10px' }}>
                                        <label className="w3-medium">Password</label>
                                    </div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" type="text" id="payPartyType" required />
                                    </div>
                                </div>
                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: '150px', padding: '10px' }}>
                                        <label className="w3-medium">Re Passowrd</label>
                                    </div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" type="text" id="payProprietor" required />
                                    </div>
                                </div>
                                <p>
                                    <input className="w3-check" type="checkbox" />
                                    <label style={{ fontSize: '12px', color: 'indigo' }}>I accept the <a style={{ color: 'blue' }} href="#">Terms and Conditions</a>.</label></p>
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
