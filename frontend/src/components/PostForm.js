import React, { Component } from 'react';
import axios from 'axios'

class PostForm extends Component {
    constructor(props){
        super(props)

        this.state={
            name: '',
            post: ''
        }
    }
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e => {
        // e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/api/main',this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }
    render(){
        console.log("rendering")
        const {name, post} = this.state
        return(<div>
<form onSubmit={this.submitHandler}>
    <div>
        <input type="text" name="name" value={name} onChange={this.changeHandler} />
    </div>
    <div>
        <input type="text" name="post" value={post} onChange={this.changeHandler} />
    </div><button type="submit">submit </button>
</form>

        </div>)



    }
}

export default PostForm;