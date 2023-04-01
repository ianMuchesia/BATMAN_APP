import React from "react";
import './modal.css'
import { AiOutlineClose } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { closeModal, setConfirm } from "../../store/modalSlice";
import axios from "axios";
import { deletePost } from "../../store/postSlice";
import { ToastContainer, toast } from "react-toastify";
const Modal = () => {

    const dispatch = useAppDispatch()

    const auth = useAppSelector((state) => state.auth);
    const post = useAppSelector(state=>state.modal.post)

    const handleCloseModal=()=>{
        dispatch(closeModal())
    }

    const headers = {
        Authorization: `Bearer ${auth.token}`
      }
    const handleDelete=async()=>{
        try {
            console.log('here')
            const response =  await axios.delete(`http://localhost:3000/api/v1/dalle/userposts/${post._id}`,{headers})
          if(response.data.msg === 'SUCCESS'){
            toast.success('deleted')
              dispatch(deletePost(post))
              dispatch(closeModal())
          } 
          } catch (error) {
            console.log(error)
          }
    }

  return (
    <aside className="modal-overlay">
        <ToastContainer/>
      <div className="modal-container">
        <button className=" close-btn" onClick={handleCloseModal}> <AiOutlineClose/></button>
        <h3>Are You Sure You Want to Delete?
        </h3>
        <div className="confirm-button">
        <button type="button" className="confirm" onClick={handleDelete}>CONFIRM</button>
        <button type="button" className="cancel" onClick={handleCloseModal}>CANCEL</button>
        </div>
     
      </div>
    </aside>
  );
};

export default Modal;
