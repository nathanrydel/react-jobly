import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import RouteList from "./RouteList";
import NavBar from "./NavBar";
import userContext from "./userContext";
import JoblyApi from './api';

import './App.css';

/** Main App component
 *
 * Props:
 * - none
 *
 * State:
 * - currUser: user object returned from API once logged in
 *   {
 *    "username": string
 *    "firstName": string
 *    "lastName": string
 *    "email": string
 *    "isAdmin": boolean
 *    "applications": number[]
 *   }
 * - token: jwt
 *
 * App -> UserContext.Provider -> { NavBar, RouteList }
 */

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState("");

  console.log('App renders with: ', currUser, token);

  /** useEffect checks status of current user to determine whether to
   *  render the general welcome message or the user-specific message.
   */

  useEffect(function checkForUser() {
    async function getUserFromApi() {
      if (token) {
        try {
          const { username } = jwtDecode(token);
          JoblyApi.token = token;
          const userRes = await JoblyApi.getUser(username);
          setCurrUser(userRes);
        } catch (err) {
          console.log("API encountered error", err);
          setCurrUser(null);
        }
      } else {
        setCurrUser(null);
      }
    }
    getUserFromApi();
  }, [token]);

  /** Sign up user for the site */
  async function signUp(data) {
    let userTokenRes = await JoblyApi.signUp(data);
    setToken(userTokenRes);
  }

  /** App wide function to Login user */
  async function login(data) {
    let userTokenRes = await JoblyApi.login(data);
    setToken(userTokenRes);
  }

  /** Log out a user from the site */
  async function logOut() {
    setCurrUser(null);
    setToken("");
  }

  /** Update user profile on the site */
  async function updateProf() {
    return;
  }

  return (
    <userContext.Provider value={{ currUser }}>
      <BrowserRouter>
        <div className="App">
          <NavBar logOut={logOut} />
          <RouteList
            login={login}
            signUp={signUp}
            updateProf={updateProf}
            currUser={currUser}
          />
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
