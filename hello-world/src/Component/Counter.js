import React, { Component } from 'react'

class Counter extends Component{

   
    constructor(){
        super()
        this.state={
            counter:1,
            message:"hello"
        }
    }

    increment(){
        // this.setState({
        //     counter:this.state.counter+1
        // },()=>console.log(this.state.counter));
       
        this.setState(prev=>{
            return{
                counter: prev.counter+1,
                message:"changed",
                company:"delloite"
            }
        })
    }
 
    incrementFive= () =>{
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    
    render(){
        return( 
            <div>
                <h1> {this.state.message}</h1>
                <h1>count is --{this.state.counter}</h1>
                <button onClick={this.incrementFive.bind(this)}> Increment Counter </button>
                <button onClick={this.incrementFive}> Increment Counter second </button>
            </div>
        )
    }
}

export default Counter