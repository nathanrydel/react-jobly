import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import JobList from "./JobsList";


function RouteList() {
  return (
    <Routes>
      <Route to="/" element={<Homepage />} />
      <Route to="/companies" element={<CompanyList />} />
      <Route to="/companies/:handle" element={<CompanyDetail />} />
      <Route to="/jobs" element={<JobList />} />
      <Route to="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;
