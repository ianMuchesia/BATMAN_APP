import { createSlice } from "@reduxjs/toolkit";
import { Toast } from "../@types/toast";


const initialState: Toast ={
    render:"",
    type:"",
    isLoading:false,
    autoClose:0,

}

const toastSlice= createSlice({
    name: 'toast',
    initialState,
    reducers:{
        displayLoading(state, action){
            state.render = action.payload
            state.isLoading = false
            state.type = 'loading'
        },
        displaySuccess(state, action){
            state.render = action.payload
            state.isLoading = false
            state.type = 'success'
            state.autoClose=2000

        },
        displayError(state, action){
            state.render = action.payload
            state.isLoading = false
            state.type = 'error'
            state.autoClose=5000

        }
    }
})

export const {displayError, displayLoading, displaySuccess} = toastSlice.actions
export default toastSlice.reducer
