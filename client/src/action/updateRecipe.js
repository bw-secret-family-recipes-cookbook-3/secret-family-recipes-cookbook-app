import {
	UPDATE_RECIPE_START,
	UPDATE_RECIPE_SUCCESS,
	UPDATE_RECIPE_SUCCESS,
	UPDATE_RECIPE_FAILURE,
} from "./index"

import axiosWithAuth from "../utils/axiosWithAuth"

const updateRecipe = (item) => (dispatch) => {
	dispatch({ type: UPDATE_RECIPE_START })

	return axiosWithAuth()
		.put(`/recipes/${item.id}`, item)
		.then((res) => {
			console.log(res.data)
			dispatch({ type: UPDATE_RECIPE_SUCCESS, payload: item })
		})

		.catch((err) => {
			console.log(err)
			dispatch({ type: UPDATE_RECIPE_FAILURE, payload: err })
		})
}

export default updateRecipe
