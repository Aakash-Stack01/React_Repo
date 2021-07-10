import React, { Component } from 'react'
import RenderList from './RenderList'




class PersonList extends Component{

    render(){
        var person=[{
            name:"Akash",
            age:24
        },{
            name:"John",
            age:30
        },{
            name:"Jack",
            age:21
        }]

        return <RenderList  list={person}></RenderList>

    }
}

export default PersonList