import React, { useState } from 'react'


const FunctionClick= ()=>{
    const [message, setMessage]=useState("Hey")  
    function clickHandler(){
        console.log("button clicked")
        setMessage("bye")
    }
    return(
        <div>
            <h1>{message}</h1>
            <button onClick={clickHandler}>Click Me! </button>
        </div>
    )
}

export default FunctionClick