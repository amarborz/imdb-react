import { createSlice, configureStore } from '@reduxjs/toolkit'

export const URL = 'https://imdb-api.com/en/API/'
export const KEY = 'k_4fvx18ze'
// export const KEY = 'k_pqwe9j2u'

const searchSlice = createSlice({
	name: 'search',
	initialState: {
		searchTerm: '',
		errorMessage: '',
	},
	reducers: {
		updateSearchTerm: (state, action) => {
			state.searchTerm = action.payload
		},
		updateErrorMessage: (state, action) => {
			state.errorMessage = action.payload
			console.log(action.payload)
		},
	},
})

export const { updateSearchTerm, updateErrorMessage } = searchSlice.actions

const store = configureStore({
	reducer: searchSlice.reducer,
})

export default store
