import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

/** App NavBar element for navigation
 *
 * Props:
 * - None
 *
 * State:
 * - None
 *
 * App -> NavBar
 */

function NavBar() {
  console.log("NavBar rendered");

  return (
    <div className="NavBar">
      <div className="NavBar-brand">
        <NavLink to="/" end>Jobly</NavLink>
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