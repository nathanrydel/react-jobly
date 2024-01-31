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
  // const [token, setToken] = useState("");
  const [token, setToken] = useState(localStorage.getItem('token'));

  console.log('App renders with: ', currUser, token);

  // TODO: Common to make this a comment rather than full docstring.
  /**
   *  Get the user from the DB to determine whether to update the user state.
   */

  useEffect(function checkForUserTokenChange() {
    async function getUserFromApi() {
      if (token) {
        try {
          const { username } = jwtDecode(token);
          JoblyApi.token = token;
          const userRes = await JoblyApi.getUser(username);
          setCurrUser(userRes);
          localStorage.setItem('token', token);
        } catch (err) {
          console.log("API encountered error", err);
          setCurrUser(null);
          localStorage.setItem('token', null);
        }
      } else {
        setCurrUser(null);
        localStorage.setItem('token', null);
      }
    }
    getUserFromApi();
  }, [token]);

  /**
   *  Set the token into localstorage whenever it changes.
   */

  // useEffect(function setTokenInLocalStorage() {
  //   function setToken() {
  //     // if token is already in local storage
  //       // do nothing
  //     // if the token is ""
  //       //


  //   }
  // })


  /** Sign up user for the site */
  async function signUp(data) {   // TODO: More specific name like signUpData
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
