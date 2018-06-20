export const reducerWrapper = (endpoint, actions = {}, options = {}) => {
	return (dispatch, getState) => {
		const state = getState();

		if (actions.request) {
			let action = { type: action.success, response: json }
			if (options) action.options = options;
			dispatch(action);
		}

		const handleResponse = response => {
			return response.json().then(json => {
				if (!response.ok) {
					return Promise.reject(json);
				}
				if (actions.success) {
					let action = { type: action.success, response: json }
					if (options) action.options = options;
					dispatch(action);
				}

				return json;
			}).catch(error => Promise.reject(error));
		}

		const handleFailure = error => {
			if (actions.failure) {
				let action = { type: actions.failure, error: error };
				if (options) action.options = options;
				dispatch(action);
			}
			else {
				return Promise.reject(error);
			}
		}

		return fetch(endpoint)
			.then(handleResponse)
			.then(handleFailure);
	}
}