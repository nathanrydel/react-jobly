import React from 'react';
import SignupForm from './SignupForm';

/**
 * Renders the signup form for the site
 *
 * endpoint: /signup
 *
 * Props:
 * - signUp: fn from parent
 *
 * State:
 * - None
 *
 * RouteList -> Signup -> SignupForm
 */

function Signup({ signUp }) {
  console.log("Signup Page renders");

  return (
    <div className='Signup'>
      <SignupForm signUp={signUp} />
    </div>
  );
}

export default Signup;