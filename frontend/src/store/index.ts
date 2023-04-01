import {configureStore } from '@reduxjs/toolkit'
import postSlice from './postSlice'
import authSlice from './authSlice'
import toastSlice from './toastSlice'
import modalSlice from './modalSlice'


const store = configureStore({
    reducer:{
        post:postSlice.reducer,
        auth:authSlice,
        toast:toastSlice,
        modal:modalSlice,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store