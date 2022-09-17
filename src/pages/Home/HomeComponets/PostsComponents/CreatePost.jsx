import React from "react";
import { FaUserCircle, FaCameraRetro } from "react-icons/fa";
import { BsCircleHalf, BsEmojiSmile } from "react-icons/bs";
const CreatePost = () => {
  return (
    <div className="bg-white p-5 rounded-md">
      <div className="flex items-center gap-2 pb-3 border-b">
        <span>
          <FaUserCircle color="#e1e1e1" size="40" />
        </span>
        <form className="shrink w-full">
          <div className="relative w-full ">
            <input
              type="text"
              className="bg-primaryBg  text-primary text-sm rounded-full focus:outline-none  block w-full pl-5 p-2.5 "
              placeholder="Create a new post..."
              required
            />
          </div>
        </form>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <button className="flex gap-2 items-center text-sm text-darkLight capitalize">
          <BsCircleHalf />
          <span>background</span>
        </button>
        <button className="flex gap-2 items-center text-sm text-darkLight capitalize">
          <FaCameraRetro />
          <span>photo/video</span>
        </button>
        <button className="flex gap-2 items-center text-sm text-darkLight capitalize">
          <BsEmojiSmile />
          <span>feeling/activity</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
