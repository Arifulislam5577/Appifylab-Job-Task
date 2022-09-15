import React from "react";
import { BiSave } from "react-icons/bi";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiUser, FiUsers } from "react-icons/fi";
const Explore = () => {
  return (
    <div className="bg-white p-5  rounded-md">
      <h2 className="text-dark text-base font-semibold">Explore</h2>
      <ul className="flex flex-col gap-4 mt-3">
        <li>
          <a
            href="/"
            className="flex items-center gap-2 text-darkLight capitalize text-sm font-semibold"
          >
            <span>
              <BiSave size="18" color="#34465ddf" />
            </span>
            <span>save posts</span>
          </a>
        </li>
        <li>
          <a
            href="/"
            className="flex items-center gap-2 text-darkLight capitalize text-sm font-semibold"
          >
            <span>
              <FiUser size="18" color="#34465ddf" />
            </span>
            <span>people</span>
          </a>
        </li>
        <li>
          <a
            href="/"
            className="flex items-center gap-2 text-darkLight capitalize text-sm font-semibold"
          >
            <span>
              <FiUsers size="18" color="#34465ddf" />
            </span>
            <span>groups</span>
          </a>
        </li>
        <li>
          <a
            href="/"
            className="flex items-center gap-2 text-darkLight capitalize text-sm font-semibold"
          >
            <span>
              <RiPagesLine size="18" color="#34465ddf" />
            </span>
            <span>pages</span>
          </a>
        </li>
        <li>
          <a
            href="/"
            className="flex items-center gap-2 capitalize text-sm font-semibold text-darkLight"
          >
            <span>
              <AiOutlineCalendar size="18" color="#34465ddf" />
            </span>
            <span>events</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Explore;
