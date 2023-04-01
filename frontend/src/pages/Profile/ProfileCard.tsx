import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

import { Posts } from "../../@types/posts";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import axios from "axios";
import { closeModal, setConfirm, showModal } from "../../store/modalSlice";
import { deletePost } from "../../store/postSlice";
interface Props {
  post: Posts;
  headers: {
    Authorization: string;
  };
}
const ProfileCard = ({ post, headers }: Props) => {
  const dispatch = useAppDispatch();

  const modal = useAppSelector(state=>state.modal.display)
  console.log(modal)
  const handleDeletePost = () => {
    dispatch(showModal(true));
    dispatch(setConfirm(post));
  };

  return (
    <div className="prompt-card" key={post._id}>
      <h3>{post.name}</h3>
      <div className="profile-img-container">
        <img src={post.imageUrl} />
        <MdDeleteForever className="delete-button" onClick={handleDeletePost} />
      </div>

      <h5>{post.prompt}</h5>
    </div>
  );
};

export default ProfileCard;
