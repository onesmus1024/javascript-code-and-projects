import React, { Component } from 'react';
import axios from 'axios';

class TasView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tasks:[]
        }
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/task').then((response)=>{
            console.log(response);
            this.setState({
                tasks:response.data
            })
        }).then((error)=>{
            console.log(error);
        })
    }
    
    render() {
        const { tasks } = this.state;
        return (
            <div>
                <h1>task will appear here</h1>
                {
                    tasks.length?
                    tasks.map(taskdata =>
                        <h2 key={taskdata.url}>{taskdata.name} <br></br> <h6>{taskdata.description}</h6> </h2>
                    ):<h3>no data</h3>
                }
            </div>
        )
    }
}

export default TasView;