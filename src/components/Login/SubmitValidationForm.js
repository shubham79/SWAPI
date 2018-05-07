import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
//import submit, { loginStatus } from './submit';
import getDetail from "./submit";
import showDetail from "./submit";
//import { RingLoader } from 'react-spinners';
import axios from 'axios';
//import Loader from '../Loader';
import { resolve } from 'url';
import {SubmissionError} from "redux-form";
import { manualLogin } from '../../actions/users';

export var user1;
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
//import ReactSimpleLoader from "react-simple-loader"

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
var apiURL =  "https://swapi.co/api/people";
var loginStatus= false;
var loginSuccess = false;
const validate = val => {
  const errors = {};
  if (!val.username) {
    console.log('User Name is required');
    errors.username = 'Required';
  }
  if (!val.password) {
    console.log('Password is required');
    errors.password = 'Required';
  }
  
  return errors;
};

 class SubmitValidationForm extends Component {
 constructor(props)
 {
  
   super(props);
   this.state ={loginMessage:"Hi"}
 }

 
   submit(values,dispatch) {
 // simulate server latency
    return new Promise ((resolve,reject) => {
      dispatch(manualLogin(values,'/search')
      // .then((loginMessage)=>{
      //       if(loginMessage){
      //         this.setState({
      //           loginMessage
      //         })	
      //       }
      // })
    ).catch((error) =>{
      alert("err0r")
      throw new SubmissionError(error);
    })

//  apiURL = `https://swapi.co/api/planets/?search=${values.username}`;

 
//     this.setState({loginStatus : true});

//     axios.get(apiURL).then(function (response) {
//       data= response.data;
//       if(data.results[0].birth_year == values.password){}
//     {

//     }
//     })
//     .catch((error) => {

//     })
  
//     //alert(loginStatus);
  
//     getDetail(values);
//     //this.setState({loginStatus : loginStatus});
    
//     function getDetail(userData){
//       axios.get(apiURL).then(function(response) {
//         //console.log(values);
       
        
        
//         showDetail(response.data,userData);
//       });
//     }

//     function showDetail(data,userData) {
//       var nameArray = [];
//       for (var i = 0; i < data.results.length; i++) {
//         console.log(data.results[i].name);
//         nameArray.push(data.results[i].name);
//       }
//         if(nameArray.includes(userData.username))
//         {
//           var namePos= nameArray.indexOf(userData.username);
//           if(data.results[namePos].birth_year === userData.password){
//             loginSuccess = true;
//            loginStatus= false;
//             window.alert("Login Successful");
//            browserHistory.push('/search')
//             return;
//           }
//           else{
//             loginSuccess = false;
//          //   this.setState({loginStatus : false});
//     loginStatus = false;
//             window.alert("Wrong Password")
//           //  window.alert(loginStatus)
//             return;
//           }
          
          
//         }
//         else{
//           apiURL = data.next;
//           if(apiURL != null)
//           {
//            getDetail(userData);
//           }
//           else{
//             loginSuccess = false;
//             loginStatus= false;
//             window.alert('Wrong Username!! Please Check And Try Again');
//             return;
//           }
         
//         }
    
      
//     }
  
  
})}
  
  render() {
const { error, handleSubmit, pristine, reset, submitting } = this.props;
 const {user} = this.props;
 

console.log(user);


    return (
      <div>

       <form onSubmit={handleSubmit(this.submit.bind(this))}>
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
        />
        {error && <strong>{error}</strong>}
        <div>
          <button type="submit" >Log In</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    {  user.isWaiting && 
    // <Loader />
       <Dimmer active>
        <Loader />
      </Dimmer>}
    
      </div>  
    );
  }
  
}

export default reduxForm({
  form: 'submitValidation', // a unique identifier for this form
  validate, 
})(SubmitValidationForm);
