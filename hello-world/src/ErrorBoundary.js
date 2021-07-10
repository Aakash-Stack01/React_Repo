import React, { Component } from 'react'
import Hero from './Component/Hero'



class ErrorBoundary extends Component{
    constructor(){
        super()
        this.state={
            hasError:false,
            errorMessage:""
        }
    }

    static getDerivedStateFromError(error){
        
        return {
            hasError:true,
            errorMessage:error
        }

    }

    handlerError(){
        alert("clicked")
    }

    render(){
        if(this.state.hasError){
            return(<div>
                <h1>Error occured!!  </h1>
                <input value={this.state.errorMessage}></input>
            </div>)
        }
        return(
            <div>
                <Hero hero="Akash" handler={this.handlerError}></Hero>
                <Hero hero="David"></Hero>
                 <Hero hero="joker"></Hero>
            </div>
        )
    }
}

export default ErrorBoundary