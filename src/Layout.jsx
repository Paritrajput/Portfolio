import React from "react";
import Navbar from "./assets/nav/Navbar";
import Header from "./header/Header";
import { Outlet } from "react-router";
import "./app.css";

function Layout() {
  return (
    <div className="xl:flex xl:flex-row flex flex-col tablet:max-xl:items-center   xl:gap-7  w-full xl:pt-9 ">
      <Header />
      <main className="bg-zinc-900 text-white  rounded-2xl w-full min-w-80 lg:w-250 xl:w-260 md:w-full tablet:full bigtab:w-11/12">
        <div className="flex justify-end">
          <Navbar />
        </div>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
