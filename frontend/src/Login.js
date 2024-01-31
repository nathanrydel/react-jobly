import React from 'react';
import LoginForm from './LoginForm';

/**
 * Renders the login form for the site
 *
 * endpoint: /login
 *
 * Props:
 * - login: fn from parent
 *
 * State:
 * - None
 *
 * RouteList -> Login -> LoginForm
 */

function Login({ login }) {
  return (
    <div className='Login'>
      <LoginForm login={login} />
    </div>
  );
}

export default Login;