import React from "react";
import Post from "./Post";
import { FaUserCircle, FaRegTimesCircle } from "react-icons/fa";
const PostOne = () => {
  return (
    <Post hasComment={true} username="adnan chowdhury" postTime="1 hour ago">
      <div className="p-3">
        <p className="mb-2 text-darkLight text-sm">your favorite game</p>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-3">
            <input type="checkbox" id="football" checked />
            <label
              htmlFor="football"
              className="px-3 py-2 flex flex-col text-sm bg-primaryBg text-darkLight w-full border rounded-md"
            >
              <span className="text-xs">Added by you</span>
              <span>Football</span>
            </label>
            <span className="flex flex-col items-center gap-1 text-darkLight">
              <FaUserCircle color="#e1e1e1" size="40" />
              <span className="text-xs">1 vote</span>
            </span>
            <button className="text-darkLight">
              <FaRegTimesCircle size="20" />
            </button>
          </li>
          <li className="flex items-center gap-3">
            <input type="checkbox" id="cricket" />
            <label
              htmlFor="cricket"
              className="px-3 py-2 flex flex-col text-sm bg-primaryBg text-darkLight w-full border rounded-md"
            >
              <span className="text-xs">Added by you</span>
              <span>Cricket</span>
            </label>
            <span className="flex flex-col items-center gap-1 text-darkLight invisible">
              <FaUserCircle color="#e1e1e1" size="40" />
              <span className="text-xs">1 vote</span>
            </span>
            <button className="text-darkLight">
              <FaRegTimesCircle size="20" />
            </button>
          </li>
          <li className="flex items-center gap-3">
            <input type="checkbox" id="Badminton" />
            <label
              htmlFor="Badminton"
              className="px-3 py-2 flex flex-col text-sm bg-primaryBg text-darkLight w-full border rounded-md"
            >
              <span className="text-xs">Added by you</span>
              <span>Badminton</span>
            </label>
            <span className="flex flex-col items-center gap-1 text-darkLight invisible">
              <FaUserCircle color="#e1e1e1" size="40" />
              <span className="text-xs">1 vote</span>
            </span>
            <button className="text-darkLight">
              <FaRegTimesCircle size="20" />
            </button>
          </li>
        </ul>
        <p className="text-right mt-3 text-sm">
          <span className="text-primary">1</span>
          <span className="text-darkLight ml-1">comment</span>
        </p>
      </div>
    </Post>
  );
};

export default PostOne;
