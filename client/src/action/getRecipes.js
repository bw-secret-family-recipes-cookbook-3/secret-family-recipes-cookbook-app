import {
	FETCH_RECIPES_START,
	FETCH_RECIPES_SUCCESS,
	FETCH_RECIPES_FAILURE,
} from "./index"

import axiosWithAuth from "../utils/axiosWithAuth"

const getRecipes = () => (dispatch) => {
	dispatch({ type: FETCH_RECIPES_START })

	return axiosWithAuth()
		.get(`/recipes/$`)
		.then((res) => {
			console.log("getting food instructions", res.data)
			dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data })
		})

		.catch((err) => {
			console.log(err)
			dispatch({ type: FETCH_RECIPES_FAILURE, payload: err })
		})
}

export default getRecipes
