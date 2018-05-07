import axios from "axios"
import { browserHistory } from "react-router"
import * as types from "../constants"

// "Log In" action creators
function beginLogin() {
	return { type: types.MANUAL_LOGIN_USER }
}

function loginSuccess(data) {
	return { 
		type: types.LOGIN_SUCCESS_USER,
		data
	}
}

function loginError(data) {
	return { type: types.LOGIN_ERROR_USER,
	data }
}

// "Log Out" action creators
function beginLogout() {
	return { type: types.LOGOUT_USER }
}

function logoutSuccess() {
	return { type: types.LOGOUT_SUCCESS_USER }
}

function logoutError() {
	return { type: types.LOGOUT_ERROR_USER }
}

// "Register" action creators
function beginRegister() {
	return { type: types.REGISTER_USER }
}

function registerSuccess() {
	return { type: types.REGISTER_SUCCESS_USER }
}

function registerError() {
	return { type: types.REGISTER_ERROR_USER }
}

function makeUserRequest(method, data, api="/login") {
	// returns a Promise
	return axios({
		method: method,
		url: api,
		data: data
	})
}

// Example of an Async Action Creator
// http://redux.js.org/docs/advanced/AsyncActions.html
export function manualLogin(
		data,
		successPath // path to redirect to upon successful log in
	) {	
		//console.log('hqhgdjhgfjsdgfjsdgfjgsdjfgsdjfgsdjfgsdjfgsdjhfgsdjgfjsdfgjsdhgfs')
	return dispatch => {
		dispatch(beginLogin())
		console.log(data);
		axios.get( `https://swapi.co/api/people/?search=${data.username}`).then(res => {
			
		console.log(res);
		if(res.data.results.length){
			if(res.data.results[0].birth_year == data.password){
				dispatch(loginSuccess(data));
				browserHistory.push('/search');
			}
			else
		{
			dispatch(loginError(data));
			alert("wrong username/password!!")
			let loginMessage = "wrong username / password"
			return loginMessage	
		}

		}
		
		else
		{
			dispatch(loginError(data));
			alert("wrong username/password!!")
			let loginMessage = "wrong username / password"
			return loginMessage	
		}
		})			
	}
}

// Example of an Async Action Creator
// http://redux.js.org/docs/advanced/AsyncActions.html
export function manualLogout() {
	return dispatch => {
		dispatch(beginLogout())

		return axios.get("/logout")
			.then(response => {
				if (response.data.success) {
					dispatch(logoutSuccess())
					// use browserHistory singleton to control navigation. Will generate a 
					// state change for time-traveling as we are using the react-router-redux package
					browserHistory.push("/") // logout to home page
				} else {
					dispatch(logoutError())
				}
			})
			.catch(response => {
			    if (response instanceof Error) {
			      // Something happened during logout that triggered an Error
			      console.log('Error', response.message);
			    }
			})
	}			
}

export function manualRegister(data) {	
	
	return dispatch => {
		dispatch(beginRegister())

		return makeUserRequest("post", data, "/register")	
			.then(response => {
				if (response.data.success) {					
					dispatch(registerSuccess())
					dispatch(manualLogin(data, "/"))
				} else {					
					dispatch(registerError())
					let registerMessage = response.data.message
					return registerMessage
				}
			})
			.catch(response => {
			    if (response instanceof Error) {
			      // Something happened in setting up the request that triggered an Error
			      console.log('Error', response.message);
			    }
		    })
	}

}