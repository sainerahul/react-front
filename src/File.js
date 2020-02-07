import React, { Component } from 'react'

export class File extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
            topic:'react'
             
        }
    }
    handleChange=event=>{
        this.setState({
            name:this.state.topic,
            topic:event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
    }
      
    render() {
        const {name,topic} =this.state;
        return (
            <div>
            <input type='text' name='name' value={name} onChange={this.handleChange}></input>
            <select  className="" value={topic} onChange={this.handleChange}
                            name="topic">
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                        <button onClick={this.handleSubmit}>Add</button>
            </div>
        )
    }
}

export default File
