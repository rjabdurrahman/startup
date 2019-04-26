import React, { Component } from 'react'
import axios from 'axios';
import './Post.css'
import ProfileCard from './ProfileCard/ProfileCard';

class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            users: [],
            count: 0,
            proposal: '',
            proposalBudget: 0,
            coverText: '',
            showPorposal: false,
            userType: global.localStorage.getItem('user') ? JSON.parse(global.localStorage.getItem('user')).type : 0
        }
        console.log(this.state.userType);
    }

    componentWillMount() {
        fetch('http://localhost:5000/api/posts')
            .then(res => res.json())
            .then(data => this.setState({ posts: data }))
            .catch(err => console.log(err));
        fetch('http://localhost:5000/api/users/list')
            .then(res => res.json())
            .then(data => this.setState({ users: data }))
            .catch(err => console.log(err));
    }
    render() {
        const postItems = this.state.posts.map(post => (
            <li key={post._id}>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h4 style={{ margin: 0 }} className="title">{post.title}</h4>
                            <h6 style={{ margin: 0, display: 'inline' }} className="author"><b>By:</b> {post.author}</h6>
                            <h6 style={{ margin: 0 }} className="author"><b>Estimated Budget:</b> {post.budget}</h6>
                            <h5 style={{ margin: 0, textDecoration: 'underline' }}>Description:</h5>
                        </div>
                        <div>
                            <button className="w3-btn w3-indigo w3-round-medium" style={{ marginTop: '20px', marginRight: '30px' }} onClick={() => { this.setState({ showPorposal: true, proposal: post._id }) }}>Submit Proposal</button>
                        </div>
                    </div>
                    <p>{post.description}</p>
                    <p>Skills: {post.skills.map(x => (<span style={{ backgroundColor: 'gray', marginRight: '8px', color: 'white', padding: '6px 12px', borderRadius: '8px' }}>{x + ' '}</span>))}</p>
                </div>
            </li>
        ));
        const userList = this.state.users.map(user => (
            <ProfileCard key={'id' + user._id} data={user._id} name={user.username} />
        ));
        return (
            <div className="w3-container" style={{ marginTop: 0, paddingTop: '80px', marginBottom: '20px' }}>
                <div style={this.state.userType == 1 ? { display: 'block' } : { display: 'none' }} className="w3-border w3-card-2">
                    <ul className="w3-ul">
                        <li className=" w3-light-gray">
                            <h3>Experienced Clients</h3>
                        </li>
                    </ul>
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', marginBottom: '15px' }}>
                        {userList}
                    </div>
                </div>
                {/* For experienced to view all posts */}
                <div style={this.state.userType == 2 ? { display: 'block' } : { display: 'none' }} className="w3-border w3-card-2">
                    <ul className="w3-ul">
                        <li className=" w3-light-gray">
                            <h3>{this.props.title ? this.props.title : 'My Feeds'}</h3>
                        </li>
                    </ul>
                    <ul className="w3-ul post">
                        {postItems}
                    </ul>
                </div>
                {/* Proposal Area */}
                <div style={this.state.showPorposal ? { display: 'block' } : { display: 'none' }} className="w3-modal">
                    <div className="w3-modal-content w3-animate-zoom div-box" style={{ backgroundColor: 'transparent' }}>
                        <div className="w3-light-gray w3-card-4 margin-auto">
                            <div className="w3-container main-bg-color div-title">
                                <span onClick={() => this.setState({ showPorposal: false })} className="w3-button w3-display-topright">×</span>
                                <h2>Proposal</h2>
                            </div>
                            <div className="w3-container">
                                <form onSubmit={this.submitHandler}>
                                    <p><label>Budget</label>
                                        <input className="w3-input w3-border" name="budget" type="number" onChange={this.inputHandler} />
                                    </p>
                                    <p><label>Deadline</label>
                                        <input className="w3-input w3-border" name="deadline" type="date" onChange={this.inputHandler} />
                                    </p>
                                    <p><label>Cover Letter</label>
                                        <textarea className="w3-input w3-border" name="description" type="text" onChange={this.inputHandler}></textarea>
                                    </p>
                                    <p className="clearfix"><button style={{ float: 'right' }} className="w3-btn main-bg-color">Submit</button></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Proposal Area End */}
            </div>
        )
    }
}

export default Post

