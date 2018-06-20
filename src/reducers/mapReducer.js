
// Actions types
const SET_DIRECTION_REQUEST = 'SET_DIRECTION_REQUEST';
const SET_DIRECTION_SUCCESS = 'SET_DIRECTION_SUCCESS';
const SET_DIRECTION_FAILURE = 'SET_DIRECTION_FAILURE';

const apiKey = 'AIzaSyC_pPLgtxaogZGjAIbbqGIfHdrd_chJ3Ss';
const initialState = {};
const destination = '29.9485541,-95.6744382,10';

// Actions creators
export const setDirectionRequest = bool => {
	return {
		type: SET_DIRECTION_REQUEST,
		isLoading: bool,
	}
}

export const setDirectionSuccess = directions => {
	return {
		type: SET_DIRECTION_SUCCESS,
		directions,
		isLoading: false,
	}
}

export const setDirectionFailure = bool => {
	return {
		type: SET_DIRECTION_FAILURE,
		hasError: bool,
	}
}

// Async Action creators
/** @param array including origin and other optional parameters if necessary  */
// export const setDirections = origin => {
// let endpoint = 'https://maps.googleapis.com/maps/api/directions/json/';
// const key = `&key=${apiKey}`;
// let body = encodeURIComponent(JSON.stringify(payload));
// endpoint += body + destination + key;

// 	return dispatch => {
// 		dispatch(setDirectionRequest(true));

// 		fetch(endpoint)
// 			.then(response => {
// 				if (!response.ok) {
// 					throw Error(response.statusText);
// 				}
// 				dispatch(setDirectionRequest(false));
// 				return response;
// 			})
// 			.then(response => response.json())
// 			.then(response => dispatch(setDirectionSuccess(response)))
// 			.catch(() => dispatch(setDirectionFailure(true)));
// 	}
// }

// Reducer
export default function mapsReducer(state = initialState, action) {
	switch (action.type) {
		case SET_DIRECTION_REQUEST: {
			return {
				...state,
				isLoading: true,
			}
		}

		case SET_DIRECTION_SUCCESS: {
			const mapData = action.response;
			return {
				...state,
				mapData,
				isLoading: false,
			}
		}

		case SET_DIRECTION_FAILURE: {

		}
	}
}

