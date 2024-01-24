import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  console.log("NavBar rendered");

  return (
    <div className="NavBar">
      <div className="NavBar-brand">
        <Link to="/">Jobly</Link>
      </div>
      <div className="NavBar-nav">
        <ul>
          <li>
            <NavLink to="/companies">Companies</NavLink>
          </li>
          <li>
            <NavLink to="/jobs">Jobs</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;