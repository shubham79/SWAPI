import React, { Component } from 'react'
import showResults from "../../showResults";
import SubmitValidationForm from "./SubmitValidationForm";



export default class Login extends Component {
    render() {
        return (
            <div style={{ padding: 15 }}>
            <h2>STAR WARS APP LOGIN</h2>
            <SubmitValidationForm onSubmit={showResults} />
            </div>
        )
    }
}



  

