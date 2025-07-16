import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  

  return (
    <>
      <div className="flex  flex-col gap-2">
        <h5> {error.message}</h5>
        <div className="">
            
            <button onClick={()=>{navigate("/")}} className="btn">
          Go Back Home
        </button>
            </div>
      </div>
    </>
  );
};

export default ErrorPage;
