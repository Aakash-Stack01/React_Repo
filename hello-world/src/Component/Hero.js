import React, { Component } from 'react'



class Hero extends Component{
    constructor(){
        super()
        this.state={
            hasError:false
        }
    }

    render(){
        if(this.props.hero==='Joker'){
            throw new Error("Not an hero!")
        }
        return( 
            <div>
                <h1> {this.props.hero} </h1>
                <button onClick={this.props.handler}> Hit it!</button>
            </div>
        )
    }
}

export default Hero