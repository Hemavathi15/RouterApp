import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Jobs = () => {
  const jobsdata = useLoaderData();

  return (
    <>
      <p>List of job openings</p>
      <div className=" flex flex-wrap gap-2">
        {jobsdata.map((job) => {
          return (
            <div className="jobs-card ">
              <Link to={job.id.toString()} key={job.id}>
                <h4 className="font-bold">{job.jobTitle}</h4>
                <p>{job.location}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Jobs;

export const jobsLoader = async () => {
  const res = await fetch("http://localhost:3000/jobs");
  console.log("data got");
  return res.json();
};
