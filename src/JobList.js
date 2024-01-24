import React, { useState, useEffect } from 'react';

import JoblyApi from './api';
import JobCardList from './JobCardList';
import SearchForm from './SearchForm';
import "./JobList.css";

/** JobList page
 *
 *  Lists all the jobs
 *
 *  Endpoint: /jobs
 *
 *  Props:
 *  - none
 *
 *  State:
 *  - jobs: [{id, title, salary, equity, companyHandle, companyName}, ...]
 *
 * RouteList -> JobList -> { SearchForm, JobCardList }
 */

function JobList() {
  const [jobs, setJobs] = useState();
  console.log("JobList, jobs state: ", jobs);

  useEffect(function getJobsOnMount() {
    console.log("Calling getJobsOnMount");
    search();
  }, []);

  async function search(searchTerm) {
    const jobsRes = await JoblyApi.getJobs(searchTerm);
    console.log("jobsRes: ", jobsRes);
    setJobs(jobsRes);
  }

  if (!jobs) return <h2>Loading...</h2>;

  return (
    <div className="JobList">
      <div className="JobList-list">
        {jobs.map(j =>
          <div key={j.id} className="JobList-card">
            <h4>{j.title}</h4>
            <h5>{j.companyName}</h5>
            <p>
              Salary: {j.salary ? '$' + j.salary : 'YOU GET NOTHING / pro bono'}
            </p>
            <p>Equity: {j.equity ? j.equity + '%' : 'NO EQUITY!'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobList;