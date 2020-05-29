import {
	UPDATE_RECIPE_START,
	UPDATE_RECIPE_SUCCESS,
	UPDATE_RECIPE_FAILURE,
	ADD_RECIPE_EDIT,
} from "./index"

import axiosWithAuth from "../utils/axiosWithAuth"

export const recipeToEdit = (recipe, history) => (dispatch) => {
	console.log(recipe, "i am the recipe being eddited")
	dispatch({ type: ADD_RECIPE_EDIT, payload: recipe })
	history.push(`/update-form/${recipe}`)
}

const updateRecipe = (item, id, history) => (dispatch) => {
	axiosWithAuth()
		.put(`/recipes/${id}`, item)
		.then((res) => {
			dispatch({ type: UPDATE_RECIPE_START })
			console.log(res.data)
			dispatch({ type: UPDATE_RECIPE_SUCCESS, payload: res.data }) //maybe propblem
		})

		.catch((err) => {
			console.log(err)
			dispatch({ type: UPDATE_RECIPE_FAILURE, payload: err })
		})
}

export default updateRecipe
