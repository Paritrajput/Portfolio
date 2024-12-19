import React from "react";
import { NavLink } from "react-router";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="flex justify-center bg-stone-800 rounded-tr-xl xl:rounded-bl-xl xl:rounded-tl-0 rounded-tl-xl  p-3 w-full xl:w-1/2">
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
