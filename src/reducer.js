// This is setting up a data layer to use throughout the app

// this is not a component, which is why file name is lower case

// initial state, object showing what the data looks like
// the search term is going to live inside here as the term
export const initialState = {
	term: null,
}

// whenever we want to change the data layer, we need to dispatch an action
export const actionTypes = {
	SET_SEARCH_TERM: 'SET_SEARCH_TERM',
}

// the reducer's job is to listen for any dispatches
const reducer = (state, action) => {
	console.log(action)

	switch (action.type) {
		case actionTypes.SET_SEARCH_TERM:
			return {
				...state,
				term: action.term,
			}

		default:
			return state
	}
}

export default reducer
