import React from "react";
import { FaUserCircle } from "react-icons/fa";
const FriendRequest = () => {
  return (
    <div className="rounded-md p-5 bg-white">
      <h2 className="text-dark text-base font-semibold pb-4 border-b">
        You might like
      </h2>
      <div className="mt-3">
        <div className="user flex items-center gap-3">
          <span>
            <FaUserCircle color="#e1e1e1" size="40" />
          </span>
          <div>
            <p className="text-sm text-darkLight font-semibold -mb-1">Sakib</p>
            <span className="text-xs text-darkLight">cricketer</span>
          </div>
        </div>
        <div className="my-5 flex items-center  justify-between text-sm font-semibold text-darkLight">
          <button className="px-7 py-2 rounded-md capitalize border">
            ignore
          </button>
          <button className="px-7 py-2 rounded-md capitalize border bg-red-500 text-light">
            follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
