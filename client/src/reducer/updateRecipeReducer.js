import {
	UPDATE_RECIPE_START,
	UPDATE_RECIPE_SUCCESS,
	UPDATE_RECIPE_FAILURE,
} from "../action"

const initialState = {
	recipe: {
		id: null,
		title: "",
		creator: "",
		ingredients: "",
		directions: "",
		category: "",
		user_id: localStorage.getItem("id"),
	},
	updatingRecipe: false,
	error: "",
}

export const updateRecipeReducer = (
	state = initialState,
	{ type, payload }
) => {
	switch (type) {
		case UPDATE_RECIPE_START:
			return {
				...state,
				updatingRecipe: true,
				error: null,
			}
		case UPDATE_RECIPE_SUCCESS:
			return {
				...state,
				updatingRecipe: false,
				recipe: payload,
			}
		case UPDATE_RECIPE_FAILURE:
			return {
				...state,
				error: payload,
			}
		default:
			return state
	}
}
