import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component{

   
    constructor(){
        super()
        this.state={
              posts:[]
            }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            this.setState({
                posts: response.data
            })
        }).catch((error)=>{
            console.log(error)
        })
    }
    render(){
        var {posts}=this.state
        return( 
            <div>
                <h1> Rendering posts from axios</h1>
               {
                    posts.map(x=><p key ={x.id}>{x.title}</p>)
               }
            </div>
        )
    }
}

export default PostList