import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <div className="flex justify-center bg-navbarColor border-solid border border-t-0 border-jet rounded-tr-2xl xl:rounded-bl-2xl rounded-tl-2xl xl:rounded-tl-none p-4 w-full xl:w-1/2">
        <ul className="flex gap-5 tablet:gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500" : "text-gray-300"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500" : "text-gray-300"}`
              }
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500" : "text-gray-300"}`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-500" : "text-gray-300"}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
