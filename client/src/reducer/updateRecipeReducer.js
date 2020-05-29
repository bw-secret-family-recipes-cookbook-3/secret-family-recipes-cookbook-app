import {
	UPDATE_RECIPE_START,
	UPDATE_RECIPE_SUCCESS,
	UPDATE_RECIPE_FAILURE,
	ADD_RECIPE_EDIT,
} from "../action"

const initialState = {
	recipe: {
		title: "title",
		source: "source",
		ingredients: "ingredients",
		instructions: "instructions",
		category: "category",
	},
	recipeToEdit: 0,
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
		case ADD_RECIPE_EDIT:
			return {
				...state,
				recipeToEdit: payload,
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
