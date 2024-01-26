import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import JobList from "./JobList";

import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

/** Site-wide routes
 *
 * Props:
 * - login: fn from parent to login a user
 * - signup: fn from parent to sign up a user
 * - currentUser: {}
 *
 * State:
 * - none
 *
 * Visiting a not found route navigates to homepage
 *
 * Protected Routes:
 * - CompanyList: /companies
 * - CompanyDetail: /companies: handle
 * - JobList: /jobs
 * - Profile: /profile
 *
 * Public Routes:
 * - Homepage: "/"
 * - Login: /login
 * - Signup: /signup
 *
 * RouteList -> { Homepage, CompanyList, CompanyDetail, JobList }
 */

function RouteList({ login, signUp, currUser }) {
  console.log("RouteList");
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage user={currUser} />} />

        {!currUser &&
          <>
            <Route path="/login" element={<Login login={login} />} />
            <Route path="/signup" element={<Signup signUp={signUp} />} />
          </>
        }

        {currUser &&
          <>
            <Route path="/companies" element={<CompanyList />} />
            <Route path="/companies/:handle" element={<CompanyDetail />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/profile" element={<Profile />} />
          </>
        }

        {/* TODO: NO SLASH, JUST THE STAR.  */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RouteList;
