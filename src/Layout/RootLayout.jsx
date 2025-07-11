import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="main-container flex justify-center  items-center h-[87vh]">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
