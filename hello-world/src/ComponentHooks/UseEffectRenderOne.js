import React, { useEffect, useState } from 'react'

const UseEffectRenderOne =()=>{
    const [x, setX]= useState(0)
    const [y, setY]= useState(0)
    const logMouse=e=>{
        setX(e.clientX);
        setY(e.clientY)}
    useEffect(()=>{
        console.log("rendering of ConditionUseEffect")
        window.addEventListener('mousemove',logMouse)
            return()=>{
                console.log("Doing cleanup")
                window.removeEventListener('mousemove',logMouse)
            }
    },[])
    return(
        <div>
           {`${x} ${y}`} 
        </div>
    )
}

export default  UseEffectRenderOne 