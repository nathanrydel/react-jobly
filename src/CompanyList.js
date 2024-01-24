import React, { useState, useEffect } from 'react';
import JoblyApi from './api';
import CompanyCard from './CompanyCard';

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
  // TODO: could be more definitive about state
  // add some tracking for loading

  // TODO: Search is handled here, would need to keep track of search term
  // from SearchForm to track its use here (So it stays in the search field on SearchForm submission)

  const [companies, setCompanies] = useState();
  console.log("CompanyList, companies state:", companies);

  // TODO: add a psuedo docstring to specify useEffect usage
  useEffect(function getCompaniesOnMount() {
    console.log("Calling getCompaniesOnMount");
    search();
  }, []);

  // {nameLike: undefined}
  // {}

  // FIXME: add docstring!!!!!!!!!!
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
        <CompanyCard company={c} />
      </div>)}

    </div>
  );
}

export default CompanyList;
