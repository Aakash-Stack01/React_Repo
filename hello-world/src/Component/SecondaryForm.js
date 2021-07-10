import { Component } from "react";



class SecondaryForm extends Component{

    constructor(){
        super();
        this.state={
            username:'',
            phoneNumber:0,
            feedback:'',
            topic:'React'

        }
    }

    render(){

        return(
            <div id="main">
                <div>
                    <label> username </label>
                    <input id="name"type="text" value={this.state.username} onChange={(event)=>{this.setState({
                        username: event.target.value
                    })}}></input>
                </div>
                <div>
                    <label> Phone Number </label>
                    <input id="number"type="text" value={this.state.phoneNumber} onChange={(event)=>{this.setState({
                        phoneNumber: event.target.value
                    })}}></input>
                </div>
                <div>
                    <label> FeedBack </label>
                    <textarea value={this.state.feedback} onChange={(event)=>{this.setState({
                        feedback: event.target.value
                    })}}></textarea>
                </div>
                <div>   
                    <label>Topic</label>
                    <select  value={this.state.topic} onChange={(event)=>{this.setState({
                        topic: event.target.value
                    })}}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='View'>View</option>
                    </select>
                </div>
                <div>
                     <button onClick={()=>{alert(`Username is ${this.state.username}, Phone Number is ${this.state.phoneNumber}
                     Text is ${this.state.feedback}, topic selected ${this.state.topic}`)}}>Submit</button>
                </div>
            </div>
        )
    }


}


 export default SecondaryForm

