import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Posts } from "../@types/posts";


const initialPostState:Posts[]=[]


const postSlice = createSlice({
    name: 'post',
    initialState: initialPostState,
    reducers:{
        setPosts(state,action:PayloadAction<Posts[]>){
            return action.payload
        }
    }
})
    
export default postSlice;