import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="main flex justify-center items-center  h-[87vh] ">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
