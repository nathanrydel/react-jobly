import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";


function RouteList() {
  return (
    <Routes>
      <Route to="/" element={<Homepage />} />
      <Route to="/companies" element={<CompaniesList />} />
      <Route to="/companies/:handle" element={<CompanyDetail />} />
      <Route to="/jobs" element={<JobsList />} />
      <Route to="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;
