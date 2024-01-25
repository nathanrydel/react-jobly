import React from 'react';

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
  console.log("*** Homepage");
  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
    </div>
  );
}

export default Homepage;