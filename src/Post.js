import { Avatar } from "@mui/material";
import React from "react";
import "./post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar className='post__avatar' src={profilePic} />
        <div className='post__info'>
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className='post__bottom'>
        <p>{message}</p>
      </div>
      <div className='post__image'>
        <img src={image} alt='post-img' />
      </div>
      <div className='post__options'>
        <div className='post__option'>
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className='post__option'>
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className='post__option'>
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className='post__option'>
          {/* <AccountCircleIcon /> */}
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
