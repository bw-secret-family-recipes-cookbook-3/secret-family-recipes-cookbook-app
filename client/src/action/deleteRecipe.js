import {
	DELETE_RECIPE_START,
	DELETE_RECIPE_SUCCESS,
	DELETE_RECIPE_FAILURE,
} from "./index"

import axiosWithAuth from "../utils/axiosWithAuth"

const deleteRecipes = (id) => (dispatch) => {
	dispatch({ type: DELETE_RECIPE_START })
	return axiosWithAuth()
		.delete(`/recipes/${id}`)
		.then((res) => {
			console.log(res)
			dispatch({ type: DELETE_RECIPE_SUCCESS, payload: id })
			document.location.reload(true)
		})

		.catch((err) => {
			console.log(err)
			dispatch({ type: DELETE_RECIPE_FAILURE, payload: err })
		})
}

export default deleteRecipes
