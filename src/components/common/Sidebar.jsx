import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const linkClass = ({ isActive }) =>
    `group relative flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200
     ${
       isActive
         ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
         : "text-gray-700 hover:bg-gray-100 hover:shadow-sm"
     }`;

  return (
    <aside className="w-[268px] min-h-screen bg-white border-r shadow-lg flex flex-col">
      {/* ✅ Top Brand Section */}
      <div className="px-5 pt-6 pb-5 border-b">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xl shadow-md">
            ₹
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800">
              Fund Allocation
            </h2>
            <p className="text-xs text-gray-500">Tracker Admin Panel</p>
          </div>
        </div>
      </div>

      {/* ✅ Menu */}
      <nav className="flex-1 px-4 py-6 flex flex-col gap-2">
        <NavLink to="/dashboard" className={linkClass}>
          <span className="text-lg">🏠</span>
          <span>Dashboard</span>
        </NavLink>

        
       <NavLink to="/revenue-allocation" className={linkClass}>
  <span className="text-lg">💰</span>
  <span>Revenue Allocation</span>
</NavLink>


      </nav>

      {/* ✅ Bottom Profile + Logout */}
      <div className="p-4 border-t">
        <div className="bg-gray-50 rounded-2xl p-4 mb-3 shadow-sm">
          <p className="text-sm font-semibold text-gray-800">
            {user?.name || "User"}
          </p>
          <p className="text-xs text-gray-500">
            Role: {user?.role || "N/A"}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-all duration-200 shadow-md"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
