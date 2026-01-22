import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl shadow p-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome {user?.name} ✅
          </h2>
          <p className="text-gray-500">Role: {user?.role}</p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {/* <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-lg">📌 Reports</h3>
          <p className="text-gray-500 mt-2">View all allocation reports</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-lg">📊 Charts</h3>
          <p className="text-gray-500 mt-2">Check charts & analytics</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-lg">📈 Statistics</h3>
          <p className="text-gray-500 mt-2">Track fund usage stats</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-lg">✅ Approval</h3>
          <p className="text-gray-500 mt-2">Approve allocations</p>
        </div> */}
      </div>
    </div>
  );
}
