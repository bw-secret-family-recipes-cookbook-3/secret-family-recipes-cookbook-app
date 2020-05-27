import {
	REGISTER_START,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
} from "../action/index"

const initialState = {
	users: {},
	isRegistering: false,
	error: "",
}

export const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_START:
			return {
				...state,
				isRegistering: true,
				error: null,
			}
		case REGISTER_SUCCESS:
			return {
				state,
				error: null,
				users: action.payload,
			}
		case REGISTER_FAILURE:
			return {
				...state,
				error: action.payload,
			}
		default:
			return state
	}
}
