import React, { useContext } from 'react';
import userContext from './userContext';
import { Link } from 'react-router-dom';

/** Renders the homepage of the app
 *
 * Endpoint: "/" (root)
 *
 * Props:
 *  - None
 *
 * State:
 *  - None
 *
 * App -> RouteList -> Homepage
 */

function Homepage() {
  const { currUser } = useContext(userContext);

  console.log("*** Homepage");
  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {currUser
        ? <h2>Welcome back, {currUser.firstName}!</h2>
        : (
          <div>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        )}
    </div>
  );
}

export default Homepage;