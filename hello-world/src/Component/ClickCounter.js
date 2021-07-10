import React from 'react'
import updatedComponent from './witrhCounter'

class ClickCounter extends React.Component{

    

    render(){
        const {countValue, handler, name}=this.props
        console.log(this.props)
        return(
            <div>
            <button onClick={this.props.handler}> {name} Clicked {countValue} time</button>
            </div>
        )
    }
}

export default updatedComponent(ClickCounter)