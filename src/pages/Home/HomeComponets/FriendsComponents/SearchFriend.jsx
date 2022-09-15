import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
const SearchFriend = () => {
  return (
    <div className="rounded-md p-5 bg-white">
      <h2 className="text-dark text-base font-semibold">Your Friends</h2>
      <form className=" hidden lg:block my-5">
        <div className="relative ">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-primary">
            <BsSearch color="#9fa3a3" />
          </div>
          <input
            type="text"
            className="bg-primaryBg  text-primary text-sm rounded-full focus:outline-none  block w-full pl-10 p-2"
            required
          />
        </div>
      </form>
      <div className="flex flex-col gap-3">
        <div className="user flex items-center gap-3">
          <span>
            <FaUserCircle color="#e1e1e1" size="40" />
          </span>
          <p className="text-sm text-darkLight ">admin</p>
        </div>
        <div className="user flex items-center gap-3">
          <img
            src="images/user-3.jpg"
            alt="user"
            className="h-10 w-10 rounded-full"
          />
          <p className="text-sm text-darkLight ">Sadia</p>
        </div>
      </div>
    </div>
  );
};

export default SearchFriend;
