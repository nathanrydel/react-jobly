import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyCard.css';

/**
 *  CompanyCard shows information about a single company.
 *
 *  Endpoint: /companies   // TODO: The endpoint itself doesn't render the card
 *
 *  Props:
 *  - company: {handle, name, description, numEmployees, logoUrl}
 *
 *  States:
 *  - None
 *
 *   CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  console.log("Rendering CompanyCard with company: ", company);
  return (
    <Link className="CompanyCard" to={`/companies/${company.handle}`}>
      <div className="CompanyCard-card">
        <h4>{company.name}</h4>
        {company.logoUrl
          ? <img src={company.logoUrl} alt={company.name} />
          : ""
        }
        <div className="CompanyCard-card-description">
          <p>{company.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default CompanyCard;