import axios from 'axios';
import { browserHistory } from "react-router"


var apiURL = "https://swapi.co/api/people";
export var loginSuccess = false;
    
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


function submit(values,state) {
  return sleep(1000).then(() => { // simulate server latency
    apiURL = "https://swapi.co/api/people";
  
    getDetail(values);
    if(loginSuccess === true)
    {
      alert("Hii Login Succeed")
    }
  
  });
}

function getDetail(userData){
  axios.get(apiURL).then(function(response) {
    //console.log(values);
    showDetail(response.data,userData);
  });
}

function showDetail(data,userData) {
  var nameArray = [];
  for (var i = 0; i < data.results.length; i++) {
    console.log(data.results[i].name);
    nameArray.push(data.results[i].name);
  }
    if(nameArray.includes(userData.username))
    {
      var namePos= nameArray.indexOf(userData.username);
      if(data.results[namePos].birth_year === userData.password){
        loginSuccess = true;
        window.alert("Login Successful");
       browserHistory.push('/search')
        return;
      }
      else{
        loginSuccess = false;
        window.alert("Wrong Password")
        return;
      }
      
      
    }
    else{
      apiURL = data.next;
      if(apiURL != null)
      {
       getDetail(userData);
      }
      else{
        loginSuccess = false;
        window.alert('Wrong Username!! Please Check And Try Again');
        return;
      }
     
    }

  
}

export default submit;
