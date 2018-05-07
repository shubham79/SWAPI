import React, { Component } from 'react'
import showResults from "../../showResults";
import SubmitValidationForm from "./SubmitValidationForm";

import {loginStatus} from "./submit"
import Loader from '../Loader';



export default class Login extends Component {



    render() {
   // store.getState();
 console.log(this.props.user);
      //  console.log(loginSuccess);
     
        //loginSuccess = false;fetc
        return (
            <div style={{ padding: 15 }}>
            <h2>STAR WARS APP LOGIN </h2>
            <SubmitValidationForm  user={this.props.user} />
           
            </div>
        )
    }
  
}



  

