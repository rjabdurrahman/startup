import React, { Component } from 'react'

class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        fetch('http://localhost:5000/data/posts')
            .then(res => res.json())
            .then(data => this.setState({ posts: data }))
            .catch(err => console.log(err));
    }
    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div className="w3-container" style={{ marginTop: 0, paddingTop: '80px' }}>

                <ul className="w3-ul w3-border w3-card-2">
                    <li className=" w3-light-gray">
                        <h3>My Feeds</h3>
                    </li>
                    <li>
                        <h4>Title</h4>
                        <p>Here is the details</p>
                    </li>
                    <li>Eve</li>
                    <li>Adam</li>
                </ul>
            </div>

        )
    }
}

export default Post

