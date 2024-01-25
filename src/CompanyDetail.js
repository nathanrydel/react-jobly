import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import JobCardList from "./JobCardList";
import JoblyApi from "./api";
import "./CompanyDetail.css";

/** Company Detail Page
 *  Lists the Company Name, Logo, and Description
 *  Lists all the open jobs at the company
 *
 *  Endpoint: /companies/:handle
 *
 *  Props:
 *  - none:
 *
 *  State:
 *  - company: {handle, name, description, numEmployees, logoUrl, jobs[]}
 *  - hasLoaded: boolean to track if API has returned a response
 *  - error: [errors from API]
 *
 * RouteList -> CompanyDetail -> JobCardList -> JobCard
 */

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState([]);

  console.log("CompanyDetails renders with: ", handle, company, error);

  // Execute the getCompany API call when the URL param changes.
  useEffect(function getCompanyAndJobs() {
    async function getCompany() {
      try {
        const companyRes = await JoblyApi.getCompany(handle);
        setCompany(companyRes);
        setHasLoaded(true);
      } catch (err) {
        setError(err);
      }
    }

    getCompany();
  }, [handle]);

  if (error.length !== 0) return <h2>404: Company not found</h2>;

  if (!hasLoaded) return <h2>Loading...</h2>;

  return (
    <div className="CompanyDetail">
      <div className="CompanyDetail-company">
        <h2>{company.name}</h2>
        {company.logoUrl
          ? <img src={company.logoUrl} alt={company.name} />
          : ""
        }
        <p>{company.description}</p>
      </div>
      <div className="CompanyDetail-job-card-list">
        <h3>Jobs</h3>
        {company.jobs && <JobCardList jobs={company.jobs} />}
      </div>
    </div>
  );
}

export default CompanyDetail;