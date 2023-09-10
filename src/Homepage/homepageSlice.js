import { createSlice } from '@reduxjs/toolkit'

const homepageSlice = createSlice({
	name: 'homepage',
	initialState: {
		status: 'loading',
	},
	reducers: {
		setStatus: (state, { payload: status }) => {
			state.status = status
		},
	},
})

export const { setStatus } = homepageSlice.actions

export const selectHomepageState = state => state.homepage
export const selectStatus = state => selectHomepageState(state).status

export default homepageSlice.reducer
