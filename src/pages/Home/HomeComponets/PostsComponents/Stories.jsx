import React from "react";
import { BsPlus } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
const Stories = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="h-52 w-1/3 md:w-1/4">
        <div className="addStory rounded-md  px-5 py-2   overflow-hidden bg-[#717171] relative">
          <img
            src="images/story.png"
            alt="story"
            className="h-40 w-32 object-contain scale-125"
          />
          <div className="flex flex-col items-center gap-1 bg-dark w-full absolute bottom-0 left-0 right-0 rounded-t-3xl">
            <div className="flex items-center flex-col p-2 relative">
              <button className="h-7 w-7 rounded-full bg-blue-500 flex items-center justify-center absolute -top-3 border-2 border-dark">
                <BsPlus color="white" />
              </button>
              <h3 className="text-light text-xs mt-3">Your Story</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="h-52 w-1/3 md:w-1/4">
        <div className="rounded-md bg-[#717171] flex  flex-col relative">
          <span className="absolute right-2 top-2 ">
            <FaUserCircle color="#e1e1e1" size="24" />
          </span>
          <img
            src="images/adnanStory.jpg"
            alt="story"
            className="rounded-xl  h-36 w-full object-cover"
          />
          <p className="text-xs my-2 text-center text-light ">
            Adnan Chowdhury
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stories;
