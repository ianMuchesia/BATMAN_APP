import React from "react";
import { BiLogOut } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import "./Profile.css";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../../store/authSlice";

export const ProfileDetails = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);
  

  const handleSignOut = () => {
    localStorage.removeItem("userToken");
    dispatch(setLogout());
    navigate("/");
  };

  return (
    <div className="profile-details">
      <BsPersonCircle className="profile-icon" />
      <h3 className="profile-name">{auth.user}</h3>
      <button className="profile-logout" onClick={handleSignOut}>
        <span>
          <BiLogOut />
        </span>
        Sign Out
      </button>
    </div>
  );
};

export const MemoizedProfileDetails = React.memo(ProfileDetails);
