import React from "react";
import { BiLike, BiComment } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { FaHeart, FaAngry } from "react-icons/fa";
const Reaction = ({ reactionName }) => {
  return (
    <div className="my-3 p-4 bg-light flex items-center justify-between">
      <button className="flex gap-1 items-center capitalize text-sm text-darkLight">
        {reactionName === "love" ? (
          <>
            <span className="h-5 w-5 bg-red-600 rounded-full flex items-center justify-center">
              <FaHeart color="white" size="12" />
            </span>
            <span className="font-semibold">Love</span>
          </>
        ) : reactionName === "angry" ? (
          <>
            <span>
              <FaAngry color="#eb872f" />
            </span>
            <span className="text-[#eb872f] font-semibold">Angry</span>
          </>
        ) : (
          <>
            <span>
              <BiLike />
            </span>
            <span>like</span>
          </>
        )}
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
