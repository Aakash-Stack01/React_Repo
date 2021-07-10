import React from 'react'
import PersonList from './PersonList'

const RenderList= (props)=>{
    
    var list=props.list.map(p=> <h1 key={p.name}>My name is {p.name} and I am {p.age} year old </h1>)
    console.log( list[0])
    return(
        <div>{list} </div>
    )
}


export default RenderList