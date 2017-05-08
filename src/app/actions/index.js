export var setInitialValues = (values) => {
	return {
		type: 'SET_INITIAL_VALUES',
		values
	}
}

export const GET_PACKAGE_DETAILS = 'GET_PACKAGE_DETAILS';
export const getPackageDetails = (values) => {
	return {
		type: GET_PACKAGE_DETAILS,
		values
	}
}
