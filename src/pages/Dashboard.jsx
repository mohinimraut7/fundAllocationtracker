// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/");
//   };

//   return (
//     <div className="max-w-5xl mx-auto">
//       <div className="bg-white rounded-2xl shadow p-6 flex justify-between items-center">
//         <div>
//           <h2 className="text-2xl font-bold text-gray-800">
//             Welcome {user?.name} ✅
//           </h2>
//           <p className="text-gray-500">Role: {user?.role}</p>
//         </div>

//         <button
//           onClick={handleLogout}
//           className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
//         >
//           Logout
//         </button>
//       </div>

//       <div className="grid md:grid-cols-2 gap-6 mt-6">
      
//       </div>
//     </div>
//   );
// }


// ===========================================

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
    <div className="w-full">
      {/* Top Header */}
      <div className="bg-white rounded-2xl shadow-sm border p-6 flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome {user?.username} ✅
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Role: <span className="font-semibold">{user?.role}</span>
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="hidden md:inline-flex bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition font-semibold"
        >
          Logout
        </button>
      </div>

      {/* Stat Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-sm border p-5">
          <p className="text-sm text-gray-500">Total Revenue Entries</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-2">3,450</h3>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-green-600 text-sm font-semibold">
              ↑ 25%
            </span>
            <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center text-xl">
              📈
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-sm border p-5">
          <p className="text-sm text-gray-500">Total Allocation</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-2">₹35,256</h3>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-green-600 text-sm font-semibold">
              ↑ 15%
            </span>
            <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-xl">
              💰
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-sm border p-5">
          <p className="text-sm text-gray-500">Average Allocation</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-2">₹35,256</h3>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-red-500 text-sm font-semibold">
              ↓ 15%
            </span>
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-xl">
              ✅
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-sm border p-5">
          <p className="text-sm text-gray-500">Operations</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-2">15,893</h3>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-indigo-600 text-sm font-semibold">
              Updated
            </span>
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl">
              📊
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row (Chart + Activity) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Market Overview (Chart Box) */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h3 className="text-lg font-bold text-gray-800">
              Market Overview
            </h3>

            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Activity
              </span>
              <span className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Goal
              </span>
            </div>
          </div>

          {/* Fake Chart (Bars) */}
          <div className="mt-6 grid grid-cols-10 gap-3 items-end h-44">
            {[30, 55, 40, 70, 35, 45, 25, 60, 50, 65].map((h, i) => (
              <div
                key={i}
                className="w-full bg-blue-200 rounded-lg flex items-end"
                style={{ height: "100%" }}
              >
                <div
                  className="w-full bg-blue-600 rounded-lg"
                  style={{ height: `${h}%` }}
                ></div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-xs text-gray-500">
            Showing sample analytics (connect with backend later ✅)
          </div>
        </div>

        {/* Today Transfers / Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">Recent Activity</h3>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            Today: {new Date().toDateString()}
          </p>

          <div className="mt-5 space-y-4">
            {[
              { title: "Incoming Transfer", subtitle: "Collector Office", icon: "⬆️" },
              { title: "Revenue Report", subtitle: "Corporation", icon: "📄" },
              { title: "Incoming Transfer", subtitle: "Grampanchayat", icon: "⬆️" },
              { title: "Revenue Saved", subtitle: "Head Office", icon: "✅" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-2xl border bg-gray-50 hover:bg-gray-100 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border flex items-center justify-center text-lg">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-gray-800 text-sm">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row (Sales Overview + Analytics) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Sales Overview */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">Sales Overview</h3>
            <span className="text-xs text-gray-500">Today</span>
          </div>

          {/* Ring UI */}
          <div className="mt-6 flex items-center justify-center">
            <div className="relative w-40 h-40 rounded-full border-[10px] border-gray-200 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[10px] border-indigo-600 border-t-transparent border-r-transparent rotate-[120deg]"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">71%</p>
                <p className="text-xs text-gray-500 mt-1">System Status</p>
                <p className="text-sm font-semibold text-green-600 mt-1">
                  OPTIMUM ✅
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-6 text-center">
            Fund allocation system performance
          </p>
        </div>

        {/* Sales Analytics */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">Sales Analytics</h3>
            <span className="text-xs text-gray-500">Weekly</span>
          </div>

          {/* Fake Area Chart */}
          <div className="mt-6 h-44 rounded-2xl bg-blue-50 border flex items-end overflow-hidden">
            <div className="w-full h-full relative">
              <div className="absolute inset-0 flex items-end gap-2 p-4">
                {[30, 45, 25, 60, 75, 50, 65].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-blue-300 rounded-xl"
                    style={{ height: `${h}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            Example chart view (later connect with real revenue stats ✅)
          </div>
        </div>
      </div>
    </div>
  );
}
