import React from "react";
import Post from "./Post";
import { FaHeart } from "react-icons/fa";
const PostTwo = () => {
  return (
    <Post username="adnan chowdhury" postTime="1 hour ago" reactionName="love">
      <p className="mb-2 text-darkLight text-sm">Have a good day!</p>
      <div className="grid grid-cols-6  gap-2">
        <div className="col-span-3 ">
          <img src="images/img-1.jpg" alt="blog" />
        </div>
        <div className="col-span-3 ">
          <img src="images/img-1.jpg" alt="blog" />
        </div>
        <div className="col-span-2 ">
          <img src="images/img-1.jpg" alt="blog" />
        </div>
        <div className="col-span-2 ">
          <img src="images/img-1.jpg" alt="blog" />
        </div>
        <div className="col-span-2 ">
          <img src="images/img-1.jpg" alt="blog" />
        </div>
      </div>
      <div className="flex items-center gap-2 my-2">
        <span className="h-5 w-5 bg-red-600 rounded-full flex items-center justify-center">
          <FaHeart color="white" size="12" />
        </span>
        <p className="text-darkLight text-sm capitalize">you</p>
      </div>
    </Post>
  );
};

export default PostTwo;
