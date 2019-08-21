import {
	UPDATE_PAGE_VAL,
	UPDATE_COLOR_SCHEME,
	UPDATE_TIMEOUT,
} from 'Actions/session.js';

const initialState = {
	newSession: true,
	page: 'landing',
	mode: 'dark',
	timeout: 0,
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
		case UPDATE_TIMEOUT: {
			return {
				...state,
				timeout: action.time,
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