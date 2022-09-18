import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Comment from "./Comment";
const UserComment = () => {
  return (
    <div className="flex  gap-2">
      <div>
        <span className="text-darkLight">
          <FaUserCircle color="#e1e1e1" size="40" />
        </span>
      </div>
      <div>
        <div className=" flex items-center gap-4">
          <div className="p-2 bg-light rounded-md shadow">
            <p className="text-sm my-1 text-darkLight">Adnan chowdhury</p>
            <img src="images/funny.jpg" alt="funny" className="h-24" />
          </div>
          <button className="text-darkLight">
            <BsThreeDots />
          </button>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-darkLight capitalize font-semibold">
            like
          </span>
          <span className="text-xs text-darkLight capitalize font-semibold">
            reply
          </span>
          <span className="text-xs text-darkLight">54 minutes ago</span>
        </div>
        <div>
          <div className="flex gap-2 my-3">
            <span className="text-darkLight">
              <FaUserCircle color="#e1e1e1" size="40" />
            </span>
            <div>
              <div>
                <div className="flex gap-2">
                  <div className="bg-primaryBg rounded-md p-2">
                    <p className="text-xs capitalize text-darkLight font-semibold">
                      adnan chowdhury
                    </p>
                    <span className="text-xs capitalize text-darkLight">
                      hello
                    </span>
                  </div>
                  <button className="text-darkLight">
                    <BsThreeDots />
                  </button>
                </div>
                <div className="text-xs text-darkLight flex gap-2 my-1">
                  <button className="capitalize font-semibold text-xs text-darkLight">
                    like
                  </button>
                  <span className="text-xs text-darkLight">1 second ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComment;
