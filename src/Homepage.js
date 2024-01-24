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
    <div>Welcome to the home of Jobly</div>
  );
}

export default Homepage;