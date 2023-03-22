import { RootState } from "./index";
import { Posts } from "../@types/posts";
import postService from "../api/postService";
import postSlice from "./postSlice";
import {ThunkAction, AnyAction } from '@reduxjs/toolkit'




const postActions = postSlice.actions


export const fetchPosts=():ThunkAction<void, RootState, unknown, AnyAction>=>{
    return async(dispatch, getState)=>{
        if(getState().post.length = 0){
            const response:Posts[] = await postService.getAllPosts();
            dispatch(postActions.setPosts(response))
        }
    }
}