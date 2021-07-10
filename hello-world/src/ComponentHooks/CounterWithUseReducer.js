import React, { useEffect, useReducer, useState } from 'react'
const initialState = 0;
const reducer = (state, action) => {

    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state

    }
}


const reducerTwo = (state, action) => { 
    switch(action){
        case 'reset':
            return {...state, firstName:"akash"}
            break;
        default:
            break;
    }
}
const CounterWithUseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [counter, dispatcher]= useReducer(reducerTwo, {})
    return (
        <div>
            {`Intial Count is ${count}`} <br></br>
            <button onClick={() => { dispatch('increment') }}> Increment</button>
            <button onClick={() => { dispatch('decrement') }}> Decrement</button>
            <button onClick={() => { dispatcher('reset') }}> Reset </button>
        </div>
    )
}

export default CounterWithUseReducer