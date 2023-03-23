
import { createSlice } from '@reduxjs/toolkit'

export const staySlice = createSlice({
    name: 'stay',
    initialState: {
        filterBy: {},
    },
    reducers: {
        setFilterBy: (state, action) => {
            state.filterBy += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setFilterBy } = staySlice.actions

export default staySlice.reducer