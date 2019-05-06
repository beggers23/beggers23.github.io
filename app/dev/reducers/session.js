import {
	UPDATE_PAGE_VAL,
} from 'Actions/session.js';

const initialState = {
	newSession: true,
	page: 'landing',
}

const sessionReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_PAGE_VAL: {
			return {
				...state,
				page: action.page,
			}
		}
		default:
			return state;
	}
}

const rootSessionReducer = (state = initialState, action) => {
	return sessionReducer(state, action);
}

export default rootSessionReducer;