import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Profile extends Component {
    render() {
        console.log(this.props)
        return (
            
            <div>Welcome to Profile Page<Link to="/about" style={{marginLeft:"12px"}}>About</Link></div>
        )

    }

}