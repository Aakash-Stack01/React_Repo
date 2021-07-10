import React, { Component } from 'react'



class UserGreeting extends Component{

   
    constructor(){
        super()
        this.state={
           isLoggedIn:false
        }
      
    }

   
    render(){

        // return this.state.isLoggedIn? (<div>Hello logged in user</div>) :
        // (<div>Hello not logged in user</div>)
        
        //Second approach
        var message
        if(this.state.isLoggedIn){
            message= <div > {`Welcome  ${this.props.name}`}</div>
            console.log(message)
        }else{
            message= <div>done</div>
            console.log(message)
        }

        
        if(this.state.isLoggedIn){
            return <div > {`Welcome  ${this.props.name}`}</div>
        }else{
            return <div > {'Please log in'}</div>
        }
       // firts approach
        // return( 
        //     <div>
        //         <div>Welcome guest {this.props.id}</div>
        //        <div> Welcome vishwas</div>
        //     </div>
        // )
    }
}

export default UserGreeting