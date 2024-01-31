import React from "react";

import JobCard from "./JobCard";
import "./JobCardList.css";

/**
 * Shows a list of all jobs
 *
 * Props:
 * - jobs: list of jobs
 *  where a job is {id, title, salary, equity, companyHandle, companyName}
 *
 * State:
 * - None
 *
 * { CompanyDetail, Joblist } -> JobCardList -> JobCard
 */

function JobCardList({ jobs }) {
  console.log("JobCardList renders", jobs);

  return (
    <div className="JobCardList">
      {jobs.map(j => (
        <JobCard
          key={j.id}
          id={j.id}
          title={j.title}
          salary={j.salary}
          equity={j.equity}
          companyName={j.companyName}
        />
      ))}
    </div>
  );
}

export default JobCardList;