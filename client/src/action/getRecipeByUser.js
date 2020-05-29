import {
	FETCH_RECIPESBYUSER_START,
	FETCH_RECIPESBYUSER_SUCCESS,
	FETCH_RECIPESBYUSER_FAILURE,
} from "./index"

import axiosWithAuth from "../utils/axiosWithAuth"

const getRecipesByUser = () => (dispatch) => {
	dispatch({ type: FETCH_RECIPESBYUSER_START })
	axiosWithAuth()
		.get("/api/recipes/my-recipes")
		.then((res) => {
			console.log("Getting my stuff")
			dispatch({ type: FETCH_RECIPESBYUSER_SUCCESS, payload: res.data })
		})

		.catch((err) => {
			console.log(err)
			dispatch({ type: FETCH_RECIPESBYUSER_FAILURE, payload: err })
		})
}

export default getRecipesByUser
