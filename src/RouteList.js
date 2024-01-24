import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import JobList from "./JobList";

/** Site-wide routes
 * TODO: add in the full docstring
 *
 * Props:
 * -
 *
 * State:
 * -
 *
 * Visiting a not found route navigates to homepage
 *
 * RouteList -> { Home... }
 */

function RouteList() {
  console.log("RouteList");
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:handle" element={<CompanyDetail />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RouteList;
