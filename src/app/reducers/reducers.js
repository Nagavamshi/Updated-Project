export var setInitialValuesReducer = (state=null, action) => {
	switch(action.type){
		case 'SET_INITIAL_VALUES': 
		 return action.value;
		default:
		 return state;
	}
}

export var getPackageDetailsReducer = (state=[], action) => {
	switch(action.type){
		case 'GET_PACKAGE_DETAILS': 
		 return action.value;
		default:
		 return state;
	}
}