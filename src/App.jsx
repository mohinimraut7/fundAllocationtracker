import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return isLoggedIn ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}