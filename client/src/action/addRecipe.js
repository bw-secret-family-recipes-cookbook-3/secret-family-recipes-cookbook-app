import {
	ADD_RECIPE_START,
	ADD_RECIPES_SUCCESS,
	ADD_RECIPES_FAILURE,
} from "./index"

import axiosWithAuth from "../utils/axiosWithAuth"

export const addRecipe = (recipe) => (dispatch) => {
	dispatch({ type: ADD_RECIPE_START })
	axiosWithAuth()
		.post(`/recipes/${localStorage.getItem("id")}/user`, recipe)
		.then((res) => {
			console.log("It works", res)
			dispatch({ type: ADD_RECIPES_SUCCESS, payload: recipe })
		})

		.catch((err) => {
			console.log(err)
			dispatch({ type: ADD_RECIPES_FAILURE })
		})
}
