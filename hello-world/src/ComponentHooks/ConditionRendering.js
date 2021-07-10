import React, { useEffect, useState } from 'react'
import UseEffectRenderOne from './UseEffectRenderOne'

const ConditionRendering =()=>{
    const [Display, setDisplay]= useState(true)
    useEffect(()=>{
        console.log(Display)
    })
    useEffect(()=>{
        console.log("Display")
    })
    return(
        <div>
           <button onClick={()=>setDisplay(!Display)}>setDisplay</button>
            <p>{Display}</p>
           {Display}
           {Display && <UseEffectRenderOne/>} 
        </div>
    )
}

export default  ConditionRendering 