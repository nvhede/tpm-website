import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/rootReducer';

export const history = createHistory();

const initialState = {};
const middleWare = [
	thunk,
	routerMiddleware(history),
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
	applyMiddleware(...middleWare)
);

const store = createStore(
	rootReducer,
	initialState,
	enhancers
);

export default store;


