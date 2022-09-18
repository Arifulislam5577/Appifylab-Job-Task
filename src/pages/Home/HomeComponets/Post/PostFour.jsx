import React from "react";
import { BiLike } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import Post from "./Post";
const PostFour = () => {
  return (
    <Post
      username="alfred parchment"
      postTime="17 days ago"
      userImg="user-1.jpg"
      group="black bussiness owners"
    >
      <p className="text-darkLight text-sm mt-3 mb-8">Hi everyone</p>
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <span className="h-5 w-5 bg-blue-600 rounded-full flex items-center justify-center">
            <BiLike color="white" size="13" />
          </span>
          <span className="h-5 w-5 bg-red-600 rounded-full flex items-center justify-center">
            <FaHeart color="white" size="12" />
          </span>
        </div>
        <span className="text-darkLight text-sm">3</span>
      </div>
    </Post>
  );
};

export default PostFour;
