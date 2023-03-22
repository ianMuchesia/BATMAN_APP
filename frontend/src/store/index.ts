import {configureStore } from '@reduxjs/toolkit'
import postSlice from './postSlice'
import authSlice from './authSlice'


const store = configureStore({
    reducer:{
        post:postSlice.reducer,
        auth:authSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store