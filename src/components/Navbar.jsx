import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiHomeAlt, BiUserCircle } from "react-icons/bi";
import { FaUsers, FaAngleDown } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
const Navbar = () => {
  return (
    <header className="py-5 bg-primary">
      <div className="container">
        <nav className="flex items-center justify-between gap-5">
          <h1 className="text-light font-bold text-xl uppercase">Logo</h1>
          <form className=" hidden lg:block">
            <div className="relative lg:w-96 ">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-primary">
                <BsSearch color="#34465d" />
              </div>
              <input
                type="text"
                className="bg-light  text-primary text-sm rounded-full focus:outline-none  block w-full pl-10 p-2.5"
                placeholder="Search"
                required
              />
            </div>
          </form>
          <div className="icons ">
            <ul className="flex items-center justify-between lg:gap-10 gap-5">
              <li>
                <a
                  className="text-light transition-colors duration-200 hover:text-light"
                  href="/"
                >
                  <BiHomeAlt size="24" />
                </a>
              </li>
              <li>
                <a
                  className="text-secondary transition-colors duration-200 hover:text-light"
                  href="/"
                >
                  <FaUsers size="24" />
                </a>
              </li>
              <li>
                <a
                  className="text-secondary transition-colors duration-200 hover:text-light"
                  href="/"
                >
                  <FiBell size="24" />
                </a>
              </li>
              <li>
                <a
                  className="text-secondary transition-colors duration-200 hover:text-light"
                  href="/"
                >
                  <AiOutlineMessage size="24" />
                </a>
              </li>
              <li className="lg:hidden block">
                <a
                  className="text-secondary transition-colors duration-200 hover:text-light"
                  href="/"
                >
                  <BsSearch size="24" />
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center gap-2">
                  <span className="text-light transition-colors duration-200 hover:text-secondary">
                    <BiUserCircle size="24" />
                  </span>
                  <span className="text-light lg:block hidden">
                    Adnan Chowdhury
                  </span>
                  <span className="text-light transition-colors duration-200 hover:text-secondary lg:block hidden">
                    <FaAngleDown size="20" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
