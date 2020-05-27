import { REGISTER_START, REGISTER_FAILURE, REGISTER_SUCCESS } from "./index"

import axios from "axios"

const register = (user) => (dispatch) => {
	console.log("I am a action:")
	dispatch({ type: REGISTER_START })
	return axios
		.post("https://bw-secret-recipe.herokuapp.com/api/auth/register", user)
		.then((res) => {
			console.log("i am a new user", res)
			dispatch({ type: REGISTER_SUCCESS, payload: res })
		})

		.catch((err) => {
			console.log("Failure to Register", err)
			dispatch({ type: REGISTER_FAILURE, payload: err })
		})
}

export default register
