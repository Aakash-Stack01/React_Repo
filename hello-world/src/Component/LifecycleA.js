import React, { Component } from 'react'



class LifecycleA extends Component{

   
    constructor(props){
        super(props)
        this.state={
           name:'akash'
        }
       console.log("Lifecycle A constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("Lifecycle A state props")
        return null
    }

    componentDidMount(){
            console.log("ComponentDidMount")
    }
    
    render(){
        console.log("LifeCycle A render")
        return( 
            <div>
               Lifecycle A 
            </div>
        )
    }
}

export default LifecycleA