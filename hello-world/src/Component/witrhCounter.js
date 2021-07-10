import React from 'react'


const withCounter = WrappedComponent=>{
    class WithCounter extends React.Component{
        constructor(){
            super()
            this.state={
                counter:0
            }
        }

        clickHandler=()=>{
            this.setState((prevState)=>{
                return {
                    counter: prevState.counter+1
                }
            })
        } 

        render(){
            console.log(this.props)
            return  <WrappedComponent name="Akash" countValue={this.state.counter} handler={this.clickHandler} {...this.props}/>
       }
   }
   return WithCounter
}

export default withCounter