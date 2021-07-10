import React from 'react'

// function greet(props){
//     return <h1> Hello {props.name} </h1>
// }

export const HelloWorld = (props)=>{
    console.log( props.children)
    var arr=Object.values(props.children)
    console.log(arr)
    arr.filter(element => element.type=="button")
    return (
    <div>
        <h1> {props.text} {props.name} </h1>
        {arr.filter(element => element.type=="button")}
    </div>
    )  
    // var a="akash"
    // return (
    //     <div>
    //         <h1>{a} This is test text</h1>
    //     </div>
    // )
}





//export default greet