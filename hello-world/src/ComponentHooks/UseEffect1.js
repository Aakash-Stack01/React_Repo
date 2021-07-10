import React, { useEffect, useState } from 'react'

const UseEffect1 =()=>{
    const [count, setCount]= useState(0)
    useEffect(()=>{
        document.title=`I am Counting  ${count}`
    })
    return(
        <div>
            <button onClick={()=>{setCount(prev=>prev+1)}}> Click Me {count} !</button>
        </div>
    )
}

export default  UseEffect1