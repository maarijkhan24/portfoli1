import React from "react";
import Link from "next/link"; // Ensure this import is present

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-label="Menu"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#skill">Skills</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-4xl">
            MK
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-semibold menu-horizontal px-1">
            <li>
              <Link href="/" className="text-xl bg-blue-300 rounded-full p-2 pr-4 pl-4 m-4">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-xl bg-blue-300 rounded-full p-2 pr-4 pl-4 m-4">
                About
              </Link>
            </li>
            <li>
              <Link href="#skill" className="text-xl bg-blue-300 rounded-full p-2 pr-4 pl-4 m-4">
                Skills
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="#contact" className="btn text-1xl bg-black rounded-full p-2 pr-4 pl-4 m-4 text-white">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
