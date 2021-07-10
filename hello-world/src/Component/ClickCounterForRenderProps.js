import React, { Component } from 'react'

class ClickCounterForRenderProps extends Component{

    

    render(){
        console.log("here")
        return(
            <div>
                <h6>Hi </h6>
                <button onClick={this.props.handler}> Hitted {this.props.currentCount}</button>
            </div>
        )
    }
}

export default ClickCounterForRenderProps