import React from "react";
import { FaUserCircle, FaLink } from "react-icons/fa";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
const Comment = () => {
  return (
    <div className="my-3 flex items-center justify-between gap-2">
      <span>
        <FaUserCircle color="#e1e1e1" size="40" />
      </span>
      <div className="flex items-center gap-2">
        <button className="text-secondary">
          <BsFillEmojiSmileFill size="18" />
        </button>
        <button className="text-secondary">
          <FaLink size="18" />
        </button>
        <button className="text-secondary bg-primary rounded ">
          <AiOutlineGif size="18" color="white" />
        </button>
      </div>
      <form className="shrink w-full">
        <div className="relative w-full ">
          <input
            type="text"
            className="bg-primaryBg  text-primary text-sm rounded-full focus:outline-none placeholder:text-xs  block w-full pl-5 p-2 "
            placeholder="Write a comment..."
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Comment;
