import {
	UPDATE_PAGE_VAL,
	UPDATE_COLOR_SCHEME,
} from 'Actions/session.js';

const initialState = {
	newSession: true,
	page: 'landing',
	mode: '',
}

const sessionReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_PAGE_VAL: {
			return {
				...state,
				page: action.page,
			}
		}
		case UPDATE_COLOR_SCHEME: {
			return {
				...state,
				mode: action.mode,
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