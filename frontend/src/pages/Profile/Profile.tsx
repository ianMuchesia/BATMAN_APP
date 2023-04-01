import React, { useEffect, useState } from "react";

import "./Profile.css";
import useSWR from 'swr'
import { BatmanCreate } from "../../assets";
import { Auth } from "../../@types/Auth";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import axios from "axios";
import { Posts } from "../../@types/posts";
import {MemoizedProfileDetails} from "./ProfileDetails";
import ProfileCard from "./ProfileCard";
import { setUserPosts } from "../../store/postSlice";







const Profile = () => {

  const dispatch = useAppDispatch()

  const auth = useAppSelector((state) => state.auth);
 
  const userPosts  = useAppSelector((state)=>state.post.userPosts)
  
  const headers = {
    Authorization: `Bearer ${auth.token}`
  }
  
  const fetcher = (url:string) => axios.get(url, { headers }).then(res => res.data);
  
  const { data: postsData, error, isLoading} = useSWR(
    auth.token ? 'http://localhost:3000/api/v1/dalle/userposts' : null,
    fetcher,
    { revalidateOnFocus: true }
  );
  
  useEffect(() => {
    if (postsData) {
      dispatch(setUserPosts(postsData));
    }
  }, [postsData]);

  
  if (error) {
    return <div>Error loading posts</div>
  }

  return (
    <section
      className="section-profile"
      style={{
        backgroundImage: `url(${BatmanCreate})`,
      }}
    >
      <div className="profile-container">
        <MemoizedProfileDetails/>
        <h1> Your Prompts</h1>
        <div className="profile-posts">
         {userPosts && userPosts.map(post=>{
          return(
           <ProfileCard key={post._id} post={post} headers={headers}/>
          )
         }) }
        </div>
      </div>
    </section>
  );
};

export default Profile;
