import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobDetails = useLoaderData();

  return (
    <div className="Job-des flex flex-col gap-3">
      <p>
        <b>Job Title: </b>
        {jobDetails.jobTitle}
      </p>
      <p>
        <b>Salary: </b>
        {jobDetails.salary}
      </p>
      <p>
        <b>Location: </b>
        {jobDetails.location}
      </p>
      <p>
        <b>Job Description: </b>We seek a motivated professional to join our
        team and contribute to dynamic projects. Responsibilities include
        collaboration, problem-solving, and delivering high-quality results.
        Ideal candidates possess strong communication skills, technical
        proficiency, and a passion for growth.{" "}
      </p>
      <div className="btn-container">
      <button className="apply-btn ">Apply now</button>
      </div>
    </div>
  );
};

export default JobDetails;

export const jobDetailLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:3000/jobs/" + id);
  return res.json();
};
