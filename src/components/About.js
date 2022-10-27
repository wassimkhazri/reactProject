import React, { Component } from "react";
import { Link } from 'react-router-dom';


export default class About extends Component {

//  handleClick=()=>{ 
//     this.props.history.push("/profile")
// }
    render() {
        return (
            <div>
          
                Welcome to About Page
                <Link to="/profile" style={{marginLeft:"12px"}}>Profile</Link>
                {/* <button className="btn btn-outline-success"onClick={this.handleClick}>Profile</button> */}

                </div>
        )
    }
}