import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Auth } from "../@types/Auth";

const initialState: Auth = {
    user: null,
    isLoading: false,
    error:""
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setLogin(state, action){
            state.user = action.payload
            state.isLoading= false
            state.error = ""
        },
        setLogout(state, action){
            state.user = null
            state.isLoading=false
            state.error = ""
        },
        setError(state, action){
            state.error = action.payload
            state.user = null
            state.isLoading=false
        },
        setLoading(state, action){
            state.isLoading =true
            
        }
    }
})

export const {setLogin , setLogout} = authSlice.actions
export default authSlice.reducer