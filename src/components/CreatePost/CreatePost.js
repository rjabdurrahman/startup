import React, { Component } from 'react'

export class CreatePost extends Component {
    render() {
        return (
            <div className="w3-container" style={{ marginTop: 0, paddingTop: '80px', marginBottom: '20px' }}>
                <div className=" w3-border w3-card-2">
                    <ul className="w3-ul">
                        <li className=" w3-light-gray">
                            <h3>Create Post</h3>
                        </li>
                    </ul>
                    <div className="post" style={{ margin: '0 15px' }}>
                        <p><label>Post Title</label>
                            <input className="w3-input w3-border" name="first" type="text" />
                        </p>
                        <p><label>Description</label>
                            <textarea className="w3-input w3-border" name="last" type="text"></textarea>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePost
