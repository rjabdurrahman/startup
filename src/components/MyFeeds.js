import React, { Component } from 'react'
import axios from 'axios';
import './Post.css'

class myFeeds extends Component {

    constructor(props) {
        super(props)
        this.state = {
            myFeeds: [],
            userType: global.localStorage.getItem('user') ? JSON.parse(global.localStorage.getItem('user')).type : 0
        }
        console.log(this.state.userType);
    }

    componentWillMount() {
        axios.get('http://localhost:5000/api/posts/myfeed', { headers: { auth: JSON.parse(global.localStorage.getItem('user')).token } })
            .then(res => this.setState({ myFeeds: res.data }))
            .catch(err => console.log(err));
    }
    render() {
        const myFeeds = this.state.myFeeds.map(post => (
            <li key={post._id}>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h4 style={{ margin: 0 }} className="title">{post.title}</h4>
                            <h6 style={{ margin: 0 }} className="author"><b>Estimated Budget:</b> {post.budget}</h6>
                            <h5 style={{ margin: 0, textDecoration: 'underline' }}>Description:</h5>
                        </div>
                    </div>
                    <p>{post.description}</p>
                    <p>Skills: {post.skills.map(x => (<span style={{ backgroundColor: 'gray', marginRight: '8px', color: 'white', padding: '6px 12px', borderRadius: '8px' }}>{x + ' '}</span>))}</p>
                </div>
            </li>
        ));
        return (
            <div className="w3-container" style={{ marginTop: 0, paddingTop: '80px', marginBottom: '20px' }}>
                {/* For Strtup To View their created post */}
                <div style={this.state.userType == 1 ? { display: 'block' } : { display: 'none' }} className="w3-border w3-card-2">
                    <ul className="w3-ul">
                        <li className=" w3-light-gray">
                            <h3>{this.props.title ? this.props.title : 'My Created Feeds'}</h3>
                        </li>
                    </ul>
                    <ul className="w3-ul post">
                        {myFeeds}
                    </ul>
                </div>
            </div>
        )
    }
}

export default myFeeds