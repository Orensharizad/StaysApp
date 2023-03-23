
import { StayFilter } from '@/models/stay'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface StayState {
    filterBy: StayFilter
}

// Define the initial state using that type
const initialState: StayState = {
    filterBy: { type: 'Campers', minPrice: 20, maxPrice: 1000 },
}

export const counterSlice = createSlice({
    name: 'stay',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setFilterBy: (state, action: PayloadAction<StayFilter>) => {
            state.filterBy = action.payload
        },
    },
})

export const { setFilterBy } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const filterBy = (state: RootState) => state.stay.filterBy

export default counterSlice.reducer