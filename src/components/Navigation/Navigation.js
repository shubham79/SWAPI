import React, { Component } from 'react'
import { Link } from "react-router"
import loginSuccess from "../Login/submit"

var navStyle = {
	backgroundColor: "black",
	padding: "10px"
}

var buttonStyle = {
	backgroundColor: "yellow"
}



export default class Navigation extends Component {
	
	_logout (event){
		event.preventDefault()
		alert("Hi I am logout");
		this.props.manualLogout()
	}



	render() {
		
		return (
			<div style={navStyle}>				
				{
					!loginSuccess 
					? <button onClick={this._logout} style={buttonStyle}>Logout</button>
					: <Link to="/login">Log In</Link>
				}				
				{/* {
					!this.props.user.authenticated 
					? <span>&nbsp;|&nbsp;<Link to="/register">Register</Link></span>
					: ""
				}				 */}
				&nbsp;|&nbsp;
				{/* <Link to="/myprofile">MyProfile</Link> */}
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				{/* <Link to="/">About This Repo</Link> */}
			</div>
		)
	}
}

