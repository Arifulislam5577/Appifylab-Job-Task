import React from "react";
import { BiLike, BiComment } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
const Reaction = () => {
  return (
    <div className="p-4 bg-light flex items-center justify-between">
      <button className="flex gap-1 items-center capitalize text-sm text-darkLight">
        <span>
          <BiLike />
        </span>
        <span>like</span>
      </button>
      <button className="flex gap-1 items-center capitalize text-sm text-darkLight">
        <span>
          <BiComment />
        </span>
        <span>comment</span>
      </button>
      <button className="flex gap-1 items-center capitalize text-sm text-darkLight">
        <span>
          <IoIosShareAlt className="text-secondary" />
        </span>
        <span>share</span>
      </button>
    </div>
  );
};

export default Reaction;
