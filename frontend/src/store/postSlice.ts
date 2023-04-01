import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Posts } from "../@types/posts";

const initialPostState = {
  posts: [] as Posts[],
  userPosts: [] as Posts[],
};

const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    setPosts(state, action: PayloadAction<Posts[]>) {
      state.posts = action.payload;
    },
    setUserPosts(state, action: PayloadAction<Posts[]>) {
      state.userPosts = action.payload;
    },
    deletePost(state, action: PayloadAction<Posts>) {
      const toBeDeleted = action.payload;
      state.posts = state.posts.filter((item) => item._id !== toBeDeleted._id);
      state.userPosts = state.userPosts.filter(
        (item) => item._id !== toBeDeleted._id
      );
    },
  },
});

export const { setPosts, deletePost, setUserPosts } = postSlice.actions;
export default postSlice;
