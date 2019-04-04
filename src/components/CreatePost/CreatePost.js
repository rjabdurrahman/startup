import React, { Component } from 'react'

export class CreatePost extends Component {
    constructor(){
        super();
        this.state = {
            post : {
                category : '',
                title: '',
                description: '',
                budget: '',
                deadline: '',
                skills: []
            }
        }
    }
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
                        <p>
                            <select class="w3-select w3-border" name="option">
                                <option value="" disabled selected>Choose your option</option>
                                <option value="project">Project Managing</option>
                                <option value="requirement">Requirement Managing</option>
                                <option value="client">Client Handling</option>
                                <option value="crm">CRM</option>
                                <option value="crm">SRM</option>
                            </select>
                        </p>
                        <p><label>Post Title</label>
                            <input className="w3-input w3-border" name="first" type="text" />
                        </p>
                        <p><label>Description</label>
                            <textarea className="w3-input w3-border" name="last" type="text"></textarea>
                        </p>
                        <p><label>Budget</label>
                            <input className="w3-input w3-border" name="first" type="number" />
                        </p>
                        <p><label>Deadline</label>
                            <input className="w3-input w3-border" name="first" type="date" />
                        </p>
                        <p><label>Skills</label>
                            <input className="w3-input w3-border" name="first" type="text" />
                        </p>
                        <p><button class="w3-btn main-bg-color">Submit</button></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePost
