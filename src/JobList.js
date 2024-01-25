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
 *  - hasLoaded: boolean to track if API has returned a response
 *
 *
 * RouteList -> JobList -> { SearchForm, JobCardList }
 */

function JobList() {
  const [jobs, setJobs] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);
  console.log("JobList, jobs state: ", jobs);

  // Execute the search once after rendering.
  useEffect(function getJobsOnMount() {
    console.log("Calling getJobsOnMount");
    search();
    // console.log("hasLoaded: ", hasLoaded);
  }, []);

  /**
   *  Get jobs from the API using an optional search term.
   *
   *  No direct output -- sets the state to jobsRes directly and rerenders.
   */

  async function search(searchTerm) {
    const jobsRes = await JoblyApi.getJobs(searchTerm);
    console.log("jobsRes: ", jobsRes);
    setJobs(jobsRes);
    setHasLoaded(true);
  }

  if (!hasLoaded) return <h2>Loading...</h2>;

  return (
    <div className="JobList">
      <div className="JobList-search">
        <SearchForm searchFn={search} msg="Search jobs by title"/>
      </div>
      <div className="JobList-list">
        <JobCardList jobs={jobs} />
      </div>
    </div>
  );
}

export default JobList;