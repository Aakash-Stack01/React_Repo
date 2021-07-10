import  React, { Component } from 'react'
import ClickCounterForRenderProps from './ClickCounterForRenderProps'

class RenderProps extends Component{

    constructor(){
        super()
        this.state={
            count:0
        }
    }

    countHandler= ()=>{
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            }
        })
    }
     render(){
        
        return(
           <div>
                {this.props.render(this.state.count, this.countHandler)}
           </div>
        )
     }   
}

export default RenderProps