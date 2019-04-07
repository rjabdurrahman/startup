import React, { Component } from 'react'
import './Post.css'
import ProfileCard from './ProfileCard/ProfileCard';

class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            users: []
        }
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({ posts: data }))
            .catch(err => console.log(err));
    }
    render() {
        const postItems = this.state.posts.map(post => (
            <li key={post.id}>
                <a href="http://gov.org">
                    <h4 style={{ margin: 0 }} className="title">{post.title}</h4>
                    <h6 style={{ margin: 0, display: 'inline' }} className="author">Author Name</h6>
                    <p>{post.body}</p>
                </a>
            </li>
        ));
        return (
            <div className="w3-container" style={{ marginTop: 0, paddingTop: '80px', marginBottom: '20px' }}>
                <div className="w3-border w3-card-2">
                    <ul className="w3-ul">
                        <li className=" w3-light-gray">
                            <h3>Experienced Clients</h3>
                        </li>
                    </ul>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px', marginBottom: '15px'}}>
                        <ProfileCard name="Abdur Rahman" />
                    </div>
                </div>
                <div className="w3-border w3-card-2">
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

