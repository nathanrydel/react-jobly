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
 *  - error: {message, status}
 *
 * RouteList -> CompanyDetail -> JobCardList -> JobCard
 */

function CompanyDetail() {
  // TODO: have someone way to track loading state, be explicit to handle it
  const { handle } = useParams();
  const [company, setCompany] = useState(null);
  const [error, setError] = useState([]);

  console.log("CompanyDetails renders with: ", handle, company, error);

  // Execute the getCompany API call when the URL param changes.
  useEffect(function getCompanyAndJobs() {
    async function getCompany() {
      try {
        const companyRes = await JoblyApi.getCompany(handle);
        setCompany(companyRes);
      } catch (err) {
        setError(err);
      }
    }

    getCompany();
  }, [handle]);

  // TODO: currently priniting error out on screen -- Not an end user error to show
  // Currently shows a 200 response due to how React handles it -- even if its a 404 from the backend
  // Should redirect (Navigate Component) OR could make a reusable 404Component to show instead
  // This helps for UX AND for SEO

  if (error.length !== 0) return <h2>404: Company not found</h2>;

  if (!company) return <h2>Loading...</h2>;

  return (
    <div className="CompanyDetail">
      <h3>{company.name}</h3>
      <img src={company.logoUrl} />
      <p>{company.description}</p>
      <h4>Jobs</h4>
      <ul>
        {company.jobs.map(j => <li key={j.id}>{j.title}</li>)}
      </ul>
    </div>

  );
}

export default CompanyDetail;