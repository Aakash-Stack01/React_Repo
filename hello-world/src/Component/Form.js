import React, { Component } from 'react'

class Form extends Component{

    constructor(){
        super()
        this.state={
            username:'',
            feedback:'',
            topic:'React'
        }
       
    }
    handleUserNameChange=event=>{
        this.setState({
            username:event.target.value
        })
    }

    handleFeedbackChange=event=>{
        this.setState({
            feedback:event.target.value
        })
    }

    handleTopicChange=event=>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit=event=>{
        event.preventDefault();
        alert(`${this.state.username} ${this.state.feedback} ${this.state.topic}`)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.Title}</h1>
                <div>   
                    <label>username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUserNameChange}></input>
                </div>
                <div>   
                    <label>feedBack</label>
                    <textarea  value={this.state.feedback} onChange={this.handleFeedbackChange}></textarea>
                </div>
                <div>   
                    <label>Topic</label>
                    <select  value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='View'>View</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
          </form>    
        )
    }
}

export default Form