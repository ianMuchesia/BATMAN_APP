import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Posts } from "../@types/posts";
interface Modal{
    display:boolean;
    post:Posts;
}
const initialModalState:Modal = {
  display: false,
  post: {
    name:"",
    imageUrl:"",
    _id:"",
    prompt:'',
  } ,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    showModal(state, action) {
      state.display = action.payload
    },
    closeModal(state, action) {
      state.display = action.payload
    },
    //press Ok
    setConfirm(state, action) {
      state.post = action.payload;

    },
  },
});

export const { showModal, closeModal, setConfirm } = modalSlice.actions;
export default modalSlice.reducer;
