import React, { Component } from 'react'
import './Post.css'
import ProfileCard from './ProfileCard/ProfileCard';

class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            users: [],
            count: 0,
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
                <a href="http://gov.org">
                    <h4 style={{ margin: 0 }} className="title">{post.title}</h4>
                    <h6 style={{ margin: 0, display: 'inline' }} className="author">{post.author}</h6>
                    <h6 style={{ margin: 0 }} className="author">Estimated Budget: {post.budget}</h6>
                    <h5 style={{ margin: 0, textDecoration: 'underline' }}>Description:</h5>
                    <p>{post.description}</p>
                    <p>Skills: {post.skills.map(x => (<span style={{backgroundColor: 'gray', marginRight: '8px', color: 'white', padding: '6px 12px', borderRadius: '8px'}}>{x + ' '}</span>))}</p>
                </a>
            </li>
        ));
        const userList = this.state.users.map(user => (
            <ProfileCard key={'id' + user._id} data={user._id} name={user.username} />
        ));
        return (
            <div className="w3-container" style={{ marginTop: 0, paddingTop: '80px', marginBottom: '20px' }}>
                <div style={this.state.userType == 1 ? {display: 'block'} : {display: 'none'}} className="w3-border w3-card-2">
                    <ul className="w3-ul">
                        <li className=" w3-light-gray">
                            <h3>Experienced Clients</h3>
                        </li>
                    </ul>
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', marginBottom: '15px' }}>
                        {userList}
                    </div>
                </div>
                <div style={this.state.userType == 2 ? {display: 'block'} : {display: 'none'}} className="w3-border w3-card-2">
                    <ul className="w3-ul">
                        <li className=" w3-light-gray">
                            <h3>{this.props.title ? this.props.title : 'My Feeds'}</h3>
                        </li>
                    </ul>
                    <ul className="w3-ul post">
                        {postItems}
                    </ul>
                </div>
            </div>

        )
    }
}

export default Post

