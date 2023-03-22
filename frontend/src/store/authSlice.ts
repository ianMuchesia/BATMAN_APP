import { createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialAuthState = null

const authSlice = createSlice({
    name: 'auth',
    initialState:initialAuthState,
    reducers:{
        setLogin(state,action){
            return action.payload
        },
        setLogout(state, action){
            return null
        }

    }
})

export const {setLogin , setLogout} = authSlice.actions
export default authSlice.reducer