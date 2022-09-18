import React from "react";
import { BiLike } from "react-icons/bi";
import Post from "./Post";
const PostThree = () => {
  return (
    <Post
      username="alfred parchment"
      postTime="17 days ago"
      userImg="user-1.jpg"
      feelings="updated her profule picture"
    >
      <div className="my-3">
        <img src="images/img-2.jpg" alt="profile" className="w-full" />
      </div>
      <div className="flex items-center gap-2">
        <span className="h-5 w-5 bg-blue-600 rounded-full flex items-center justify-center">
          <BiLike color="white" size="13" />
        </span>
        <span className="text-darkLight text-sm">3</span>
      </div>
    </Post>
  );
};

export default PostThree;
