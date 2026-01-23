import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RevenueAllocation from "./pages/RevenueAllocation";
import DashboardLayout from "./components/common/DashboardLayout";

function ProtectedRoute() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return isLoggedIn ? <DashboardLayout /> : <Navigate to="/" />;
}

export default function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login />} />

      {/* Protected Dashboard Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/revenue-allocation"
          element={<RevenueAllocation />}
        />
      </Route>
    </Routes>
  );
}
