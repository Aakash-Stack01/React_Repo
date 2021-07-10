import React, { useState } from 'react'

const StateWithObject =()=>{
    var intialCount=0;
    const [pojo, setpojo]= useState({username:"", lastname:"", number:0})
    return(
        <div>
            <form>
                <label> User Name</label>
                <input type="text" value={pojo.username} 
                onChange={(event)=>{
                    setpojo({...pojo, username: event.target.value})
                }}/> 
                <br/>
                <label> Last Name</label>
                <input type="text" value={pojo.lastname}  onChange={(event)=>{
                    setpojo({...pojo, lastname: event.target.value})
                }}/> 
                <br/>
                <label> Mobile Number</label>
                <input type="number" value={pojo.number} onChange={(event)=>{
                    setpojo((pojo)=>{return {...pojo, number: event.target.value}})
                }}/>                
            </form>
           <h3> {`Name is ${pojo.username} ${pojo.lastname}. Number is ${pojo.number}`} </h3>
        </div>
    )
}

export default  StateWithObject