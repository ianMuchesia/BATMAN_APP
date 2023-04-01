import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Auth } from "../@types/Auth";

const initialState: Auth = {
    user: null,
    token:"",
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setLogin(state, action){
            state.user = action.payload.user
            state.token = action.payload.token
        },
        setLogout(state){
            state.user = null
            state.token=""
        },
       
        }
    }
)

export const {setLogin , setLogout} = authSlice.actions
export default authSlice.reducer