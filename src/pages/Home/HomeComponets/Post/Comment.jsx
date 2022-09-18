import React from "react";
import { FaUserCircle, FaLink } from "react-icons/fa";
import { BsEmojiNeutralFill } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
const Comment = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <span>
        <FaUserCircle color="#e1e1e1" size="40" />
      </span>
      <div className="flex items-center gap-1">
        <button>
          <BsEmojiNeutralFill />
        </button>
        <button>
          <FaLink />
        </button>
        <button>
          <AiOutlineGif />
        </button>
      </div>
      <form className="shrink w-full">
        <div className="relative w-full ">
          <input
            type="text"
            className="bg-primaryBg  text-primary text-sm rounded-full focus:outline-none  block w-full pl-5 p-2 "
            placeholder="Create a new post..."
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Comment;
