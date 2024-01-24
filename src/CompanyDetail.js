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
  const { handle } = useParams();
  const [company, setCompany] = useState(null);
  const [error, setError] = useState({});

  console.log("CompanyDetails renders with: ", handle, company, error);
  return (
    <div className="CompanyDetail">CompanyDetail</div>
  );
}

export default CompanyDetail;