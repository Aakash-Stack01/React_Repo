import React, { PureComponent } from 'react'

class InputRef extends PureComponent{

constructor(props){
    super(props)
    this.inputRef=React.createRef()
    this.state={
        name:'dummy'
    }
}

handler=(event)=>{
    //alert(this.inputRef.current.value)
    this.setState({name:event.target.value})
}

componentDidMount(){
    alert(this.inputRef.current)
    console.log(this.inputRef.current)
    this.inputRef.current.focus()
}

render(){
    return <input type="text" onChange={this.handler}  value ={this.state.name} ref={this.inputRef}></input>
}
}

export default InputRef