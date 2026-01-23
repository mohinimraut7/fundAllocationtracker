import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RevenueAllocation from "./pages/RevenueAllocation";
import DashboardLayout from "./components/common/DashboardLayout";

import { loginSuccess } from "./redux/slices/authSlice"; // ✅ import


function ProtectedRoute() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  
  const storedUser = localStorage.getItem("authUser");

  
  if (isLoggedIn || storedUser) {
    return <DashboardLayout />;
  }

  return <Navigate to="/" replace />;
}

export default function App() {
  const dispatch = useDispatch();

 
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");

    if (storedUser) {
      dispatch(loginSuccess(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  return (
    <Routes>
    
      <Route path="/" element={<Login />} />

    
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/revenue-allocation" element={<RevenueAllocation />} />
      </Route>

     
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

