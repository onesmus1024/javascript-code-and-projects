
import { Input } from '@mui/material'
import React, { Component } from 'react'

class SignupForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:''
        }
    }
    handle_name = event => {
        this.setState({
            name:event.target.value
        })
    }

    handle_form = event => {
        alert(this.state.name);
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handle_form}>
                    <label>text me</label>
                    <Input onChange={this.handle_name}></Input>
                    <button type='submit' >submit</button>
                </form>
            </React.Fragment>
        )
    }
}

export default SignupForm
