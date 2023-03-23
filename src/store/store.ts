import { configureStore } from '@reduxjs/toolkit'
import staySlice from './staySlice'

export default configureStore({
    reducer: {
        stay: staySlice,
    },
})