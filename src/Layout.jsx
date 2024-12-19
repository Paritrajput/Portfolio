import React from "react";
import Navbar from "./assets/nav/Navbar";
import Header from "./header/Header";
import { Outlet } from "react-router";
import "./app.css";

function Layout() {
  return (
    <div className="xl:flex xl:flex-row flex flex-col items-center  gap-8  w-full pt-9 ">
      <Header />
      <main className="bg-zinc-900 text-white  rounded-2xl w-80 lg:w-250 xl:w-260 md:w-180 tablet:w-130 bigtab:w-180">
        <div className="flex justify-end">
          <Navbar />
        </div>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
