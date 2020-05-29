import {
	FETCH_RECIPESBYUSER_START,
	FETCH_RECIPESBYUSER_SUCCESS,
	FETCH_RECIPESBYUSER_FAILURE,
} from "../action"

const initialState = {
	recipe: [
		{
			id: null,
			title: "",
			creator: "",
			ingredients: "",
			directions: "",
			category: "",
			user_id: null,
		},
	],
	fetchingRecipesList: false,
	error: "",
}

export const getRecipesByUserReducer = (
	state = initialState,
	{ type, payload }
) => {
	switch (type) {
		case FETCH_RECIPESBYUSER_START:
			return {
				...state,
				fetchingRecipesList: true,
				error: null,
			}
		case FETCH_RECIPESBYUSER_SUCCESS:
			return {
				...state,
				fetchingRecipesList: true,
				recipe: payload,
			}
		case FETCH_RECIPESBYUSER_FAILURE:
			return {
				...state,
				error: payload,
			}
		default:
			return state
	}
}
