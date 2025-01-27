import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const NavBarResp = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link href="/">
            <h1 className="text-base md:text-xl lg:text-xl font-mono hover:text-teal-600 ">
              Harris Perdis
            </h1>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="flex">
              <li className="pl-5">
                <Link href="/about">
                  <p className="font-bold hover:text-teal-600">about</p>
                </Link>
              </li>
              <li className="pl-5">
                <Link href="/portfolio">
                  <p className="font-bold hover:text-teal-600">portfolio</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="pl-5 text-lg lg:text-2xl">
            <Link
              href="https://www.linkedin.com/in/harris-perdis-912308310"
              target="_blank"
            >
              <AiFillLinkedin />
            </Link>
          </div>
          <div className="pl-5 text-lg lg:text-2xl">
            <Link href="https://github.com/HarrisAsync" target="_blank">
              <FaGithub />
            </Link>
          </div>
          <div className="dropdown dropdown-end pl-5">
            <label
              tabIndex={0}
              className="lg:hidden hover:text-teal-600 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/about">
                  <p className="font-bold">about</p>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <p className="font-bold">portfolio</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="h-px bg-gray-600 border-0"></hr>
    </div>
  );
};

export default NavBarResp;
