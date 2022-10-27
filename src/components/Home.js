// import axios from "axios";
import React, { Component } from "react";

import "./Home.css";
// const url = "http://localhost:9000/api/authors";
// const url1 = "http://localhost:9000/api/addAuthor";
// const url2 = "http://localhost:9000/api/authors/";

// const config = {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//     }
//   };
  

export default class Home extends Component {
    constructor(props){
        super(props);
        console.log("constructor")
        this.state={
            authors:[],
            newauthor:{
                name:"hammadi",
                adress:"bengardan",
                phonenumber:"52635"
            },
            x:12
        }
    }
    componentDidMount(){
        //console.log("componentDidMount")
       // localStorage.setItem("wassim","hiGuys, my name's wassim and I work at Shinra")
        // axios.get(url).then((response)=>this.setState({authors:response.data}))
        // axios.post(url1,this.state.newauthor).then((response)=>console.log(response))
        //axios.delete(url2 + this.state.x).then((response)=>console.log(response.data))
      //  axios.patch(url2+ this.state.x,this.state.newauthor).then((response)=>console.log(response.data))
    }
    componentDidUpdate(prevProps, prevState, snapshot){
       
        // console.log("componentDidUpdate")
        // console.log(prevState)
    }
    shouldComponentUpdate(nextProps,nextState){
    //     if(this.state.x === nextState.x){
    //         return false
    //     }else{
        // console.log("shouldCoponentUpdate")
        // console.log(nextState)
        return true
    // }
    }
    componentWillUnmount(){
        // console.log("componentWillUnmount")
        // localStorage.removeItem("wassim")
    }
    render() {
        // console.log("render")
        return (
         
            <div className="stl">
                <h1>Welcome To Our WebSite</h1>
            </div>
        )
    }
}
