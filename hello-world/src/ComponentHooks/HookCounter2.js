import React, { useState } from 'react'

const HookCounter2 =()=>{
    var intialCount=0;
    const [count, setCount]= useState(0)
    return(
        <div>
            {count}
             <button onClick={()=>{setCount(intialCount)}}>Reset</button>
             <button onClick={()=>{setCount(prev=>count+1)}}>Incerement </button>
             <button onClick={()=>{setCount(prev=>count-1)}}>Decrement </button>
        </div>
    )
}

export default  HookCounter2