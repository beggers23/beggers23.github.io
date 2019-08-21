export const UPDATE_PAGE_VAL = 'UPDATE_PAGE_VAL';
export const UPDATE_COLOR_SCHEME = 'UPDATE_COLOR_SCHEME';
export const UPDATE_TIMEOUT = 'UPDATE_TIMEOUT';

export function updatePageVal(page) {
	return {
		type: UPDATE_PAGE_VAL,
		page,
	}
}

export function updateColorScheme(mode) {
	return {
		type: UPDATE_COLOR_SCHEME,
		mode,
	}
}
export function updateTimeout(time) {
	return {
		type: UPDATE_TIMEOUT,
		time,
	}
}