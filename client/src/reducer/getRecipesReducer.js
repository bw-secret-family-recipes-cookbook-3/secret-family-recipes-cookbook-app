import {
	FETCH_RECIPES_START,
	FETCH_RECIPES_SUCCESS,
	FETCH_RECIPES_FAILURE,
} from "../action"

const initialState = {
	recipes: [
		{
			title: "title",
			source: "source",
			ingredients: "ingredients",
			instructions: "instructions",
			category: "category",
		},
	],
	fetchingRecipesList: false,
	error: "",
}

export const getRecipesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_RECIPES_START:
			return {
				...state,
				fetchingRecipesList: true,
				error: null,
			}
		case FETCH_RECIPES_SUCCESS:
			return {
				...state,
				fetchingRecipesList: true,
				recipes: payload,
			}
		case FETCH_RECIPES_FAILURE:
			return {
				...state,
				error: payload,
			}
		default:
			return state
	}
}
