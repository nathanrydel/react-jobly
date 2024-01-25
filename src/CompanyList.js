import React, { useState, useEffect } from 'react';
import JoblyApi from './api';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';

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
  // TODO: Search is handled here, would need to keep track of search term
  // from SearchForm to track its use here (So it stays in the search field on SearchForm submission)

  const [companies, setCompanies] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);
  console.log("CompanyList, companies state:", companies);

  // Execute the search once after rendering.
  useEffect(function getCompaniesOnMount() {
    console.log("Calling getCompaniesOnMount");
    search();
  }, []);

  /**
   *  Get companies from the API using an optional search term.
   *
   *  No direct output -- sets the state to companiesRes directly and rerenders.
   */

  async function search(searchTerm) {
    const companiesRes = await JoblyApi.getCompanies(searchTerm);
    console.log("companiesRes: ", companiesRes);
    setCompanies(companiesRes);
    setHasLoaded(true);
  }

  if (!hasLoaded) return <h2>Loading...</h2>;

  return (
    <div className="CompanyList">
      <div className="CompanyList-search">
        <SearchForm searchFn={search} msg="Search companies by name"/>
      </div>
      {companies.length > 0 &&
      <div className="CompanyList-companies">
        {companies.map(c =>
        <div key={c.handle}>
          <CompanyCard company={c} />
        </div>)}
      </div>}
      {companies.length === 0 && <h4>Sorry, no results found.</h4>}
    </div>
  );
}

export default CompanyList;
