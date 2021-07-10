import React from 'react'
import ContextApi, { UserConsumer } from './ContextApi'


class ContextApiA extends React.Component{

    

    render(){
       
        return <div>{this.context[1]}</div>
        // return(
        //   <UserConsumer>
        //       {
        //           (username)=>{
        //             return (
        //                 <div>
        //                     <h1> Welcome</h1>
        //                     {username.map(num =>{
        //                         return <h1> {num} </h1>
        //                         }
        //                         )
        //                     }
        //                 </div>
        //             )
        //           }
        //       }
        //   </UserConsumer>
        // )
    }
}


ContextApiA.contextType=ContextApi
export default ContextApiA