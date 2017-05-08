import { combineReducers } from 'redux';
import { setInitialValuesReducer, getPackageDetailsReducer } from '../reducers/reducers';

// export var config = (initialState = {}) => {
// 	var reducer = redux.combineReducers({
// 		values: setInitialValuesReducer
// 	})
// 	var store = redux.createStore(reducer);
// 	return store;
// }

const rootReducer = combineReducers({
  packages: getPackageDetailsReducer,
  values: setInitialValuesReducer
});

export default rootReducer;