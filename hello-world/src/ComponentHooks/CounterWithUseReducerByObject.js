import React, {useReducer} from 'react'
const initialState={
    value:0
};
const reducer =(state, action)=>{

    switch(action.type){
        case 'increment': 
           return {value : state.value+ action.value};
        case 'decrement':
            return {value : state.value - action.value};
        case 'reset': 
        return {value :  action.value};
        default:
            return {value :  state};
        
    }
}

const CounterWithUseReducerByObject =()=>{
    const [count, dispatch]= useReducer(reducer, initialState);
    console.log(count)
    return(
        <div>
            {`Intial Count is ${count.value}`} <br></br>
            <button onClick={()=>{dispatch({  type:'increment', value:1 })}}> Increment</button>
            <button onClick={()=>{dispatch({  type:'decrement', value:2 })}}> Decrement</button>
            <button onClick={()=>{dispatch({  type:'reset', value:0 })}}> Reset </button>
            <button onClick={()=>{dispatch({  type:'increment', value:5 })}}> Increment Five</button>
            <button onClick={()=>{dispatch({  type:'decrement', value:2 })}}> Decrement Two</button>
        </div>
    )
}

export default  CounterWithUseReducerByObject 