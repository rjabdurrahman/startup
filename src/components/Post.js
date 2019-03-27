import React, { Component } from 'react'
import './Post.css'

class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
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
                <a href="#">
                    <h4 className="title">{post.title}</h4>
                    <p style={{ margin: 0 }}>{post.body}</p>
                </a>
            </li>
        ));
        return (
            <div className="w3-container" style={{ marginTop: 0, paddingTop: '80px', marginBottom: '20px' }}>
                <ul className="w3-ul w3-border w3-card-2 post">
                    <li className=" w3-light-gray">
                        <h3>My Feeds</h3>
                    </li>
                    {postItems}
                </ul>
            </div>

        )
    }
}

export default Post

