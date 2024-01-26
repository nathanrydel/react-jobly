import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouteList from "./RouteList";
import NavBar from "./NavBar";
import { useState } from 'react';
import userContext from "./userContext";


/** Main App component
 *
 * Props:
 * - none
 *
 * State:
 * - username:
 * - token:
 * - ?more
 *
 * App -> UserContext.Provider -> { NavBar, RouteList }
 */

function App() {
  const [currUsername, setCurrUsername] = useState(null);
  const [token, setToken] = useState("");

  console.log('App renders with: ', currUsername, token);

  /** Sign up user for the site */
  async function signUp() {
    return;
  }

  /** Login user into site */
  async function login() {
    return;
  }

  /** Log out a user from the site */
  async function logOut() {
    return;
  }

  /** Update user profile on the site */
  async function updateProfile() {
    return;
  }

  return (
    <userContext.Provider value={{ username: currUsername, token }}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <RouteList />
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
