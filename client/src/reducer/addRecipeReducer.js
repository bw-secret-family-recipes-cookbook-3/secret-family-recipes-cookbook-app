import {
	ADD_RECIPE_START,
	ADD_RECIPES_SUCESS,
	ADD_RECIPES_FAILURE,
} from "../action/index"

const initialState = {
	recipes: [],
	error: "",
	addRecipe: false,
}

export const addRecipeReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_RECIPE_START:
			return {
				...state,
				addRecipe: true,
			}

		case ADD_RECIPES_SUCESS:
			return {
				...state,
				addRecipe: false,
				recipes: payload,
			}

		case ADD_RECIPES_FAILURE:
			return {
				...state,
				addRecipe: false,
				error: payload,
			}
		default:
			return state
	}
}
