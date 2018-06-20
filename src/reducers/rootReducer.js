import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import viewport from './viewportReducer';
import maps from './mapReducer';
import scheduling from './schedulingReducer';

export default combineReducers({
	routing: routerReducer,
	viewport,
	// googleMaps: mapsReducer,
	// scheduling: schedulingReducer,
})