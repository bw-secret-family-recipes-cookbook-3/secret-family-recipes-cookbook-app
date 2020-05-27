import {
	FETCH_RECIPESBYUSER_START,
	FETCH_RECIPESBYUSER_SUCCESS,
	FETCH_RECIPESBYUSER_FAILURE,
} from "./index"

import axiosWithAuth from "../utils/axiosWithAuth"

const getRecipesByUser = () => (dispatch) => {
	dispatch({ type: FETCH_RECIPESBYUSER_START })
	return axiosWithAuth()
		.get(`/recipes/${localStorage.getItem("id")}/user`)
		.then((res) => {
			console.log("Getting peopls stuff")
			dispatch({ type: FETCH_RECIPESBYUSER_SUCCESS, payload: res.data })
		})

		.catch((err) => {
			console.log(err)
			dispatch({ type: FETCH_RECIPESBYUSER_FAILURE, payload: err })
		})
}

export default getRecipesByUser
