import {
	DELETE_RECIPE_START,
	DELETE_RECIPE_SUCCESS,
	DELETE_RECIPE_FAILURE,
} from "../action"

const initialState = {
	recipes: [
		{
			id: null,
			title: "",
			creator: "",
			ingredients: "",
			directions: "",
			category: "",
			user_id: localStorage.getItem("id"),
		},
	],
	deletingRecipes: false,
	error: "",
}

export const deleteRecipesReducer = (
	state = initialState,
	{ type, payload }
) => {
	switch (type) {
		case DELETE_RECIPE_START:
			return {
				...state,
				deletingRecipes: true,
				error: null,
			}
		case DELETE_RECIPE_SUCCESS:
			return {
				...state,
				deletingRecipes: false,
				recipes: state.recipes.filter(
					(recipe) => recipe.id !== payload
				),
			}
		case DELETE_RECIPE_FAILURE:
			return {
				...state,
				error: payload,
			}
		default:
			return state
	}
}
