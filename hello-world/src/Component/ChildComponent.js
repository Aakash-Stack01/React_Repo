import React, { Component } from 'react'

const ChildComponent=(props)=>{
    return(
        <div>
            <button onClick={()=>{props.handler("child component")}}>Greet parent</button>
        </div>
    )
}
export default ChildComponent
