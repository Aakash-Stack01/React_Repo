import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component{
    constructor(){
        super()
        this.componentRef=React.createRef()
    } 
    componentDidMount(){
        console.log(this.componentRef)
    }
    render(){
       return (
            (<div>
                <Input ref={this.componentRef}></Input>
                <button onClick={()=>{this.componentRef.current.focusHandler1()}}>Button</button>
            </div>)
        )
    }
}

export default FocusInput