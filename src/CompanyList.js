import React, { useState, useEffect } from 'react';
import JoblyApi from './api';

/**
 *  CompanyList shows a page with a list of all companies.
 *
 *  Endpoint: /companies
 *
 *  Props:
 *  - None
 *
 *  States:
 *  - companies (called from API):
 *      [{handle, name, description, numEmployees, logoUrl}, ...]
 *
 *   RouteList -> CompanyList -> {SearchForm, CompanyCard}
 */

function CompanyList() {

  const [companies, setCompanies] = useState();
  console.log("CompanyList, companies state:", companies);

  useEffect(function getCompaniesOnMount() {
    console.log("Calling getCompaniesOnMount");
    search();
  }, []);

  async function search(searchTerm) {
    const companiesRes = await JoblyApi.getCompanies(searchTerm);
    console.log("companiesRes: ", companiesRes);
    setCompanies(companiesRes);
  }

  if (!companies) return <h2>Loading...</h2>;

  return (
    <div className="CompanyList">
      {companies.map(c =>
        <div key={c.handle}>
          <p>{c.handle}</p>
          <p>{c.name}</p>
          <p>{c.description}</p>
          <p>{c.logoUrl}</p>
        </div>)}

    </div>
  ); // TODO: Put CompanyCards here.
}

export default CompanyList;
