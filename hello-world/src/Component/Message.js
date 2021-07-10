import React, { Component } from 'react'

class Message extends Component{

    constructor(){
        super() 
        this.state={
            Message:"Welcome visitor",
            sent:"true"
        }
    }

     changeMessage(){
        this.setState({  Message:"Hey there",
        sent:"false"})
    }
    render(){
        return( 
            <div>
                <h1> {this.state.Message} </h1>
                <h1> {this.state.sent} </h1>
                <button onClick={()=>this.setState({Message:"Thanks for subscribing"})}>Subscribe</button>
                <br/>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message