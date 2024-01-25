import React from 'react';

/**
 * A single job
 *
 *
 * Props:
 * - job: {id, title, salary, equity, companyHandle, companyName}
 *
 * State:
 * - None
 *
 * Joblist -> JobCard
 */

function JobCard({ id, title, salary, equity, companyName }) {
  console.log("JobCard renders");
  return (
    <div className="JobCard">
      <div className="JobCard-title">
        <h4>{title}</h4>
        <p><i>{companyName}</i></p>
      </div>
      <div className="JobCard-body">
        <p>Salary: {salary ? "$" + salary : "Pride"}</p>
        <p>Equity: {equity ? equity + "%" : "Exposure"}</p>
      </div>
    </div>
  );
}

export default JobCard;