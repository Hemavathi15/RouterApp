import React from "react";
import { Outlet } from "react-router-dom";

const JobLayout = () => {
  return (
    <>
      <div className="flex flex-col gap-1.5  w-[75%] mt-2">
        <h1 className="page-text">Jobs</h1>
        
      <Outlet />
      </div>
    </>
  );
};

export default JobLayout;
