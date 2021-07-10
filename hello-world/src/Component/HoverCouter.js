import React from 'react'
import updatedComponent from './witrhCounter'


class HoverCounter extends React.Component{

    render(){
        const {countValue, handler, name}=this.props
        return(
            <div>
            <h2 onMouseOver={this.props.handler}> {name} Hovered {countValue} time</h2>
            </div>
        )
    }
}

export default updatedComponent(HoverCounter)