import React, { Component } from 'react'

class Input extends Component{
    constructor(){
        super()
        this.inputRef=React.createRef()
        this.otherRef=React.createRef()
    } 
    
    focusHandler() {
       this.inputRef.current.focus()
    }

    focusHandler1() {
        this.otherRef.current.focus()
     }
    
    
    render(){
       return (
            (<div>
                <input type="text" ref={this.inputRef} ></input>
                <h1> name</h1>
                <input type="text" ref={this.otherRef}></input>
            </div>)
        )
    }
}

export default Input