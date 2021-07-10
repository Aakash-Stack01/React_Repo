import React, { useEffect, useState } from 'react'

const ConditionUseEffect =()=>{
    const [count, setCount]= useState(0)
    const [input, setInput]= useState("")
    useEffect(()=>{
        console.log("rendering of ConditionUseEffect")
        document.title=`I am Counting  ${count}`
    },[count])
    return(
        <div>
            <button onClick={()=>{setCount(prev=>prev+1)}}> Click Me {count} !</button>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
        </div>
    )
}

export default  ConditionUseEffect 