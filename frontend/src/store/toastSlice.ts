import { createSlice } from "@reduxjs/toolkit";
import { Toast } from "../@types/toast";
import { toast } from "react-toastify";

const initialState: Toast = {
  render: "loading...",
  type: null,
  isLoading: false,
  autoClose: 0,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    displayLoading(state, action) {
      state.render = action.payload;
      state.isLoading = false;
    },
    displaySuccess(state, action) {
      state.render = action.payload;
      state.isLoading = false;
      state.type = toast.TYPE.SUCCESS;
      state.autoClose = 2000;
    },
    displayError(state, action) {
      state.render = action.payload;
      state.isLoading = false;
      state.type = toast.TYPE.ERROR;
      state.autoClose = 6000;
    },
    displayWarning(state, action) {
      state.render = action.payload;
      state.isLoading = false;
      state.autoClose = 4000;
    },
  },
});

export const { displayError, displayLoading, displaySuccess, displayWarning } =
  toastSlice.actions;
export default toastSlice.reducer;
