import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import {
  BsFillBookmarkFill,
  BsFlagFill,
  BsPencilFill,
  BsTrashFill,
  BsLink45Deg,
  BsFillPlayCircleFill,
} from "react-icons/bs";

const PostUser = (props) => {
  const { username, postTime, feelings, group } = props;
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <div className="user flex items-center gap-3">
        <span>
          <FaUserCircle color="#e1e1e1" size="40" />
        </span>
        <div>
          <div className="flex items-center gap-1">
            <p className="text-xs text-darkLight font-semibold capitalize">
              {username}
            </p>
            {feelings && <p className="text-xs text-darkLight">{feelings}</p>}
            {group && (
              <p className="text-xs text-darkLight uppercase flex items-center gap-2 font-semibold">
                <span>
                  <BsFillPlayCircleFill size="12" color="#444" />
                </span>
                <span>{group}</span>
              </p>
            )}
          </div>
          <div className="flex gap-1 items-center mt-1">
            <span className="text-xs text-darkLight">{postTime}</span>
            <span>
              <TbWorld color="#949da9" size="14" />
            </span>
          </div>
        </div>
      </div>
      <div className="relative">
        <button onClick={() => setShowDropDown(!showDropDown)}>
          <IoIosArrowDown size="20" color="#444" />
        </button>
        <ul
          className={`flex flex-col gap-3 absolute bg-white shadow right-0 top-10 w-52 p-4 z-10 ${
            showDropDown ? "" : "hidden"
          }`}
        >
          <li>
            <button className="flex items-center gap-2 text-xs">
              <span>
                <BsFillBookmarkFill size="12" color="#444" />
              </span>
              <span>Save Post</span>
            </button>
          </li>
          <li>
            <button className="flex items-center gap-2 text-xs">
              <span>
                <BsFlagFill size="12" color="#444" />
              </span>
              <span>Report Post</span>
            </button>
          </li>
          <li>
            <button className="flex items-center gap-2 text-xs">
              <span>
                <BsPencilFill size="12" color="#444" />
              </span>
              <span>Edit Post</span>
            </button>
          </li>
          <li>
            <button className="flex items-center gap-2 text-xs">
              <span>
                <BsTrashFill size="12" color="#444" />
              </span>
              <span>Delete Post</span>
            </button>
          </li>
          <hr />
          <li>
            <button className="flex items-center gap-2 text-xs">
              <span>
                <BsLink45Deg size="12" color="#444" />
              </span>
              <span>Open post in new tab</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostUser;
