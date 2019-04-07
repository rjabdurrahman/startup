import React, { Component } from 'react'
import './ProfileCard.css';

export class ProfileCard extends Component {
    render() {
        return (
            <div className="profile-card">
                <img src="./img/profile-img.jpg" alt="John" style={{ width: '100%' }} />
                <h1>John Doe</h1>
                <p className="title">CEO &amp; Founder, Example</p>
                <p>Harvard University</p>
                <div style={{ margin: '24px 0' }}>
                    <a href="just-link"><i className="fa fa-dribbble" /></a>
                    <a href="just-link"><i className="fa fa-twitter" /></a>
                    <a href="just-link"><i className="fa fa-linkedin" /></a>
                    <a href="just-link"><i className="fa fa-facebook" /></a>
                </div>
                <p><button>Contact</button></p>
            </div>
        )
    }
}

export default ProfileCard
