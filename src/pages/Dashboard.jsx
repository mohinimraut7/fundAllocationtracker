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
//     <div className="w-full">
//       {/* Top Header */}
//       <div className="bg-white rounded-2xl shadow-sm border p-6 flex flex-col md:flex-row justify-between gap-4 md:items-center">
//         <div>
//           <h2 className="text-2xl font-bold text-gray-800">
//             Welcome {user?.username} ✅
//           </h2>
//           <p className="text-gray-500 text-sm mt-1">
//             Role: <span className="font-semibold">{user?.role}</span>
//           </p>
//         </div>

//         <button
//           onClick={handleLogout}
//           className="hidden md:inline-flex bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition font-semibold"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Stat Cards Row */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//         {/* Card 1 */}
//         <div className="bg-white rounded-2xl shadow-sm border p-5">
//           <p className="text-sm text-gray-500">Total Revenue Entries</p>
//           <h3 className="text-2xl font-bold text-gray-800 mt-2">3,450</h3>

//           <div className="mt-4 flex items-center justify-between">
//             <span className="text-green-600 text-sm font-semibold">
//               ↑ 25%
//             </span>
//             <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center text-xl">
//               📈
//             </div>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-white rounded-2xl shadow-sm border p-5">
//           <p className="text-sm text-gray-500">Total Allocation</p>
//           <h3 className="text-2xl font-bold text-gray-800 mt-2">₹35,256</h3>

//           <div className="mt-4 flex items-center justify-between">
//             <span className="text-green-600 text-sm font-semibold">
//               ↑ 15%
//             </span>
//             <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-xl">
//               💰
//             </div>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-white rounded-2xl shadow-sm border p-5">
//           <p className="text-sm text-gray-500">Average Allocation</p>
//           <h3 className="text-2xl font-bold text-gray-800 mt-2">₹35,256</h3>

//           <div className="mt-4 flex items-center justify-between">
//             <span className="text-red-500 text-sm font-semibold">
//               ↓ 15%
//             </span>
//             <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-xl">
//               ✅
//             </div>
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div className="bg-white rounded-2xl shadow-sm border p-5">
//           <p className="text-sm text-gray-500">Operations</p>
//           <h3 className="text-2xl font-bold text-gray-800 mt-2">15,893</h3>

//           <div className="mt-4 flex items-center justify-between">
//             <span className="text-indigo-600 text-sm font-semibold">
//               Updated
//             </span>
//             <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl">
//               📊
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Middle Row (Chart + Activity) */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
//         {/* Market Overview (Chart Box) */}
//         <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-6">
//           <div className="flex items-center justify-between gap-4 flex-wrap">
//             <h3 className="text-lg font-bold text-gray-800">
//               Market Overview
//             </h3>

//             <div className="flex items-center gap-4 text-sm">
//               <span className="flex items-center gap-2 text-gray-500">
//                 <span className="w-2 h-2 rounded-full bg-blue-500"></span>
//                 Activity
//               </span>
//               <span className="flex items-center gap-2 text-gray-500">
//                 <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
//                 Goal
//               </span>
//             </div>
//           </div>

//           {/* Fake Chart (Bars) */}
//           <div className="mt-6 grid grid-cols-10 gap-3 items-end h-44">
//             {[30, 55, 40, 70, 35, 45, 25, 60, 50, 65].map((h, i) => (
//               <div
//                 key={i}
//                 className="w-full bg-blue-200 rounded-lg flex items-end"
//                 style={{ height: "100%" }}
//               >
//                 <div
//                   className="w-full bg-blue-600 rounded-lg"
//                   style={{ height: `${h}%` }}
//                 ></div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-4 text-xs text-gray-500">
//             Showing sample analytics (connect with backend later ✅)
//           </div>
//         </div>

//         {/* Today Transfers / Recent Activity */}
//         <div className="bg-white rounded-2xl shadow-sm border p-6">
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-bold text-gray-800">Recent Activity</h3>
//           </div>

//           <p className="text-sm text-gray-500 mt-1">
//             Today: {new Date().toDateString()}
//           </p>

//           <div className="mt-5 space-y-4">
//             {[
//               { title: "Incoming Transfer", subtitle: "Collector Office", icon: "⬆️" },
//               { title: "Revenue Report", subtitle: "Corporation", icon: "📄" },
//               { title: "Incoming Transfer", subtitle: "Grampanchayat", icon: "⬆️" },
//               { title: "Revenue Saved", subtitle: "Head Office", icon: "✅" },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-center gap-4 p-4 rounded-2xl border bg-gray-50 hover:bg-gray-100 transition"
//               >
//                 <div className="w-10 h-10 rounded-xl bg-white shadow-sm border flex items-center justify-center text-lg">
//                   {item.icon}
//                 </div>

//                 <div className="flex-1">
//                   <p className="font-semibold text-gray-800 text-sm">
//                     {item.title}
//                   </p>
//                   <p className="text-xs text-gray-500 mt-0.5">
//                     {item.subtitle}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Row (Sales Overview + Analytics) */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
//         {/* Sales Overview */}
//         <div className="bg-white rounded-2xl shadow-sm border p-6">
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-bold text-gray-800">Sales Overview</h3>
//             <span className="text-xs text-gray-500">Today</span>
//           </div>

//           {/* Ring UI */}
//           <div className="mt-6 flex items-center justify-center">
//             <div className="relative w-40 h-40 rounded-full border-[10px] border-gray-200 flex items-center justify-center">
//               <div className="absolute inset-0 rounded-full border-[10px] border-indigo-600 border-t-transparent border-r-transparent rotate-[120deg]"></div>
//               <div className="text-center">
//                 <p className="text-3xl font-bold text-gray-800">71%</p>
//                 <p className="text-xs text-gray-500 mt-1">System Status</p>
//                 <p className="text-sm font-semibold text-green-600 mt-1">
//                   OPTIMUM ✅
//                 </p>
//               </div>
//             </div>
//           </div>

//           <p className="text-xs text-gray-500 mt-6 text-center">
//             Fund allocation system performance
//           </p>
//         </div>

//         {/* Sales Analytics */}
//         <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-6">
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-bold text-gray-800">Sales Analytics</h3>
//             <span className="text-xs text-gray-500">Weekly</span>
//           </div>

//           {/* Fake Area Chart */}
//           <div className="mt-6 h-44 rounded-2xl bg-blue-50 border flex items-end overflow-hidden">
//             <div className="w-full h-full relative">
//               <div className="absolute inset-0 flex items-end gap-2 p-4">
//                 {[30, 45, 25, 60, 75, 50, 65].map((h, i) => (
//                   <div
//                     key={i}
//                     className="flex-1 bg-blue-300 rounded-xl"
//                     style={{ height: `${h}%` }}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="mt-4 text-xs text-gray-500">
//             Example chart view (later connect with real revenue stats ✅)
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// ============================================

// import React, { useEffect, useMemo, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../services/axiosInstance"; // ✅ ADD

// export default function Dashboard() {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [revenues, setRevenues] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/");
//   };

//   // ✅ Fetch all revenues
//   const fetchRevenues = async () => {
//     try {
//       setLoading(true);
//       const res = await axiosInstance.get("/revenue");

//       const responseData = res.data;

//       // ✅ support both formats
//       const data = Array.isArray(responseData)
//         ? responseData
//         : responseData?.data || [];

//       setRevenues(data);
//     } catch (err) {
//       console.log("❌ Dashboard revenue fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRevenues();
//   }, []);

//   // ✅ role wise filter (same as RevenueAllocation screen)
//   const role = localStorage.getItem("userRole") || user?.role;

//   const roleWiseRevenues = useMemo(() => {
//     if (!role) return revenues;
//     return revenues.filter((r) => r.role === role);
//   }, [revenues, role]);

//   // ✅ Calculations
//   const totalEntries = roleWiseRevenues.length;

//   const totalRevenueSum = roleWiseRevenues.reduce(
//     (sum, item) => sum + Number(item.totalRevenue || 0),
//     0
//   );

//   const totalAllocatedSum = roleWiseRevenues.reduce(
//     (sum, item) => sum + Number(item.allocatedAmount || 0),
//     0
//   );

//   const avgAllocated =
//     totalEntries > 0 ? totalAllocatedSum / totalEntries : 0;

//   // ✅ Recent Activity (latest 4)
//   const recentActivity = useMemo(() => {
//     return roleWiseRevenues
//       .slice()
//       .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//       .slice(0, 4);
//   }, [roleWiseRevenues]);

//   // ✅ Chart heights = last 10 allocations
//   const chartData = useMemo(() => {
//     const latest10 = roleWiseRevenues
//       .slice()
//       .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
//       .slice(-10);

//     // max allocation for % conversion
//     const maxVal = Math.max(
//       ...latest10.map((x) => Number(x.allocatedAmount || 0)),
//       1
//     );

//     return latest10.map((x) => {
//       const percent = (Number(x.allocatedAmount || 0) / maxVal) * 100;
//       return Math.max(5, Math.round(percent)); // ✅ minimum 5%
//     });
//   }, [roleWiseRevenues]);

//   return (
//     <div className="w-full">
//       {/* Top Header */}
//       <div className="bg-white rounded-2xl shadow-sm border p-6 flex flex-col md:flex-row justify-between gap-4 md:items-center">
//         <div>
//           <h2 className="text-2xl font-bold text-gray-800">
//             Welcome {user?.username} ✅
//           </h2>
//           <p className="text-gray-500 text-sm mt-1">
//             Role: <span className="font-semibold">{user?.role}</span>
//           </p>
//           {loading && (
//             <p className="text-xs text-blue-600 mt-1 font-semibold">
//               Loading real data...
//             </p>
//           )}
//         </div>

//         <button
//           onClick={handleLogout}
//           className="hidden md:inline-flex bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition font-semibold"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Stat Cards Row */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//         {/* Card 1 */}
//         <div className="bg-white rounded-2xl shadow-sm border p-5">
//           <p className="text-sm text-gray-500">Total Revenue Entries</p>
//           <h3 className="text-2xl font-bold text-gray-800 mt-2">
//             {totalEntries}
//           </h3>

//           <div className="mt-4 flex items-center justify-between">
//             <span className="text-green-600 text-sm font-semibold">↑ Live</span>
//             <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center text-xl">
//               📈
//             </div>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-white rounded-2xl shadow-sm border p-5">
//           <p className="text-sm text-gray-500">Total Allocation</p>
//           <h3 className="text-2xl font-bold text-gray-800 mt-2">
//             ₹{totalAllocatedSum.toLocaleString("en-IN")}
//           </h3>

//           <div className="mt-4 flex items-center justify-between">
//             <span className="text-green-600 text-sm font-semibold">↑ Live</span>
//             <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-xl">
//               💰
//             </div>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-white rounded-2xl shadow-sm border p-5">
//           <p className="text-sm text-gray-500">Average Allocation</p>
//           <h3 className="text-2xl font-bold text-gray-800 mt-2">
//             ₹{avgAllocated.toFixed(2).toLocaleString("en-IN")}
//           </h3>

//           <div className="mt-4 flex items-center justify-between">
//             <span className="text-red-500 text-sm font-semibold">↓ Live</span>
//             <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-xl">
//               ✅
//             </div>
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div className="bg-white rounded-2xl shadow-sm border p-5">
//           <p className="text-sm text-gray-500">Operations</p>
//           <h3 className="text-2xl font-bold text-gray-800 mt-2">
//             ₹{totalRevenueSum.toLocaleString("en-IN")}
//           </h3>

//           <div className="mt-4 flex items-center justify-between">
//             <span className="text-indigo-600 text-sm font-semibold">
//               Updated
//             </span>
//             <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl">
//               📊
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Middle Row (Chart + Activity) */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
//         {/* Market Overview (Chart Box) */}
//         <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-6">
//           <div className="flex items-center justify-between gap-4 flex-wrap">
//             <h3 className="text-lg font-bold text-gray-800">
//               Market Overview
//             </h3>

//             <div className="flex items-center gap-4 text-sm">
//               <span className="flex items-center gap-2 text-gray-500">
//                 <span className="w-2 h-2 rounded-full bg-blue-500"></span>
//                 Activity
//               </span>
//               <span className="flex items-center gap-2 text-gray-500">
//                 <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
//                 Goal
//               </span>
//             </div>
//           </div>

//           {/* ✅ Real Chart (Bars) */}
//           <div className="mt-6 grid grid-cols-10 gap-3 items-end h-44">
//             {(chartData.length > 0 ? chartData : [10, 20, 15, 25, 18, 22, 14, 28, 19, 24]).map(
//               (h, i) => (
//                 <div
//                   key={i}
//                   className="w-full bg-blue-200 rounded-lg flex items-end"
//                   style={{ height: "100%" }}
//                 >
//                   <div
//                     className="w-full bg-blue-600 rounded-lg"
//                     style={{ height: `${h}%` }}
//                   ></div>
//                 </div>
//               )
//             )}
//           </div>

//           <div className="mt-4 text-xs text-gray-500">
//             {chartData.length > 0
//               ? "Showing real analytics ✅"
//               : "No revenue data found yet ✅"}
//           </div>
//         </div>

//         {/* Recent Activity */}
//         <div className="bg-white rounded-2xl shadow-sm border p-6">
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-bold text-gray-800">Recent Activity</h3>

//             <button
//               onClick={fetchRevenues}
//               className="text-xs px-3 py-1 rounded-lg border hover:bg-gray-100 transition"
//             >
//               Refresh
//             </button>
//           </div>

//           <p className="text-sm text-gray-500 mt-1">
//             Today: {new Date().toDateString()}
//           </p>

//           <div className="mt-5 space-y-4">
//             {recentActivity.length === 0 ? (
//               <div className="text-gray-400 text-sm">
//                 No activity found for <b>{role}</b>
//               </div>
//             ) : (
//               recentActivity.map((item, idx) => (
//                 <div
//                   key={item._id || idx}
//                   className="flex items-center gap-4 p-4 rounded-2xl border bg-gray-50 hover:bg-gray-100 transition"
//                 >
//                   <div className="w-10 h-10 rounded-xl bg-white shadow-sm border flex items-center justify-center text-lg">
//                     ✅
//                   </div>

//                   <div className="flex-1">
//                     <p className="font-semibold text-gray-800 text-sm">
//                       Revenue Added: ₹{Number(item.totalRevenue || 0).toLocaleString("en-IN")}
//                     </p>
//                     <p className="text-xs text-gray-500 mt-0.5">
//                       Allocated: ₹{Number(item.allocatedAmount || 0).toLocaleString("en-IN")}
//                     </p>
//                     <p className="text-[11px] text-gray-400 mt-0.5">
//                       Date: {item.date}
//                     </p>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Row (Sales Overview + Analytics) */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
//         {/* Sales Overview */}
//         <div className="bg-white rounded-2xl shadow-sm border p-6">
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-bold text-gray-800">Sales Overview</h3>
//             <span className="text-xs text-gray-500">Today</span>
//           </div>

//           {/* Ring UI */}
//           <div className="mt-6 flex items-center justify-center">
//             <div className="relative w-40 h-40 rounded-full border-[10px] border-gray-200 flex items-center justify-center">
//               <div className="absolute inset-0 rounded-full border-[10px] border-indigo-600 border-t-transparent border-r-transparent rotate-[120deg]"></div>
//               <div className="text-center">
//                 <p className="text-3xl font-bold text-gray-800">
//                   {totalEntries > 0 ? "100%" : "0%"}
//                 </p>
//                 <p className="text-xs text-gray-500 mt-1">System Status</p>
//                 <p className="text-sm font-semibold text-green-600 mt-1">
//                   {totalEntries > 0 ? "ACTIVE ✅" : "NO DATA"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <p className="text-xs text-gray-500 mt-6 text-center">
//             Fund allocation system performance
//           </p>
//         </div>

//         {/* Sales Analytics */}
//         <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-6">
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-bold text-gray-800">Sales Analytics</h3>
//             <span className="text-xs text-gray-500">Weekly</span>
//           </div>

//           {/* Fake Area Chart (keep design same) */}
//           <div className="mt-6 h-44 rounded-2xl bg-blue-50 border flex items-end overflow-hidden">
//             <div className="w-full h-full relative">
//               <div className="absolute inset-0 flex items-end gap-2 p-4">
//                 {(chartData.length > 0 ? chartData.slice(-7) : [30, 45, 25, 60, 75, 50, 65]).map(
//                   (h, i) => (
//                     <div
//                       key={i}
//                       className="flex-1 bg-blue-300 rounded-xl"
//                       style={{ height: `${h}%` }}
//                     ></div>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="mt-4 text-xs text-gray-500">
//             {chartData.length > 0
//               ? "Showing real revenue stats ✅"
//               : "Example chart view (no revenue yet ✅)"}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// ========================================
// import React, { useEffect, useMemo, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../services/axiosInstance"; // ✅ ADD

// export default function Dashboard() {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [revenues, setRevenues] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/");
//   };

//   // ✅ Fetch all revenues
//   const fetchRevenues = async () => {
//     try {
//       setLoading(true);
//       const res = await axiosInstance.get("/revenue");

//       const responseData = res.data;

//       // ✅ support both formats
//       const data = Array.isArray(responseData)
//         ? responseData
//         : responseData?.data || [];

//       setRevenues(data);
//     } catch (err) {
//       console.log("❌ Dashboard revenue fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRevenues();
//   }, []);

//   // ✅ role wise filter (same as RevenueAllocation screen)
//   const role = localStorage.getItem("userRole") || user?.role;

//   // const roleWiseRevenues = useMemo(() => {
//   //   if (!role) return revenues;
//   //   return revenues.filter((r) => r.role === role);
//   // }, [revenues, role]);



// const roleWiseRevenues = useMemo(() => {
//   if (!role) return revenues;

//   // 👑 Super Admin → ALL DATA
//   if (role === "Super Admin") {
//     return revenues;
//   }

//   // बाकी roles → role-wise data
//   return revenues.filter((r) => r.role === role);
// }, [revenues, role]);




//   // ✅ Calculations
//   const totalEntries = roleWiseRevenues.length;

//   const totalRevenueSum = roleWiseRevenues.reduce(
//     (sum, item) => sum + Number(item.totalRevenue || 0),
//     0
//   );

//   const totalAllocatedSum = roleWiseRevenues.reduce(
//     (sum, item) => sum + Number(item.allocatedAmount || 0),
//     0
//   );

//   const avgAllocated = totalEntries > 0 ? totalAllocatedSum / totalEntries : 0;

//   // ✅ Recent Activity (latest 4)
//   const recentActivity = useMemo(() => {
//     return roleWiseRevenues
//       .slice()
//       .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//       .slice(0, 4);
//   }, [roleWiseRevenues]);

//   // ✅ Chart heights = last 10 allocations
//   const chartData = useMemo(() => {
//     const latest10 = roleWiseRevenues
//       .slice()
//       .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
//       .slice(-10);

//     // max allocation for % conversion
//     const maxVal = Math.max(
//       ...latest10.map((x) => Number(x.allocatedAmount || 0)),
//       1
//     );

//     return latest10.map((x) => {
//       const percent = (Number(x.allocatedAmount || 0) / maxVal) * 100;
//       return Math.max(5, Math.round(percent)); // ✅ minimum 5%
//     });
//   }, [roleWiseRevenues]);

//   return (
//     <div className="w-full">
//       {/* Top Header */}
//       <div className="bg-white rounded-2xl shadow-sm border p-6 flex flex-col md:flex-row justify-between gap-4 md:items-center">
//         <div>
//           <h2 className="text-2xl font-bold text-gray-800">
//             Welcome {user?.username} ✅
//           </h2>
//           <p className="text-gray-500 text-sm mt-1">
//             Role: <span className="font-semibold">{user?.role}</span>
//           </p>
//           {loading && (
//             <p className="text-xs text-blue-600 mt-1 font-semibold">
//               Loading real data...
//             </p>
//           )}
//         </div>

//         <button
//           onClick={handleLogout}
//           className="hidden md:inline-flex bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition font-semibold"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Stat Cards Row */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//         {/* Card 1 */}
//         {/* <div className="bg-white rounded-2xl shadow-sm border p-5">
//           <p className="text-sm text-gray-500">Total Revenue Entries</p>
//           <h3 className="text-2xl font-bold text-gray-800 mt-2">
//             {totalEntries}
//           </h3>

//           <div className="mt-4 flex items-center justify-between">
//             <span className="text-green-600 text-sm font-semibold">↑ Live</span>
//             <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center text-xl">
//               📈
//             </div>
//           </div>
//         </div> */}

//         {/* Card 2 */}
//         <div className="bg-white rounded-2xl shadow-sm border p-5">
//           <p className="text-sm text-gray-500">Total Budget Allocation</p>
//           <h3 className="text-2xl font-bold text-gray-800 mt-2">
//             ₹{totalAllocatedSum.toLocaleString("en-IN")}
//           </h3>

//           <div className="mt-4 flex items-center justify-between">
//             <span className="text-green-600 text-sm font-semibold">↑ Live</span>
//             <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-xl">
//               💰
//             </div>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-white rounded-2xl shadow-sm border p-5">
//           <p className="text-sm text-gray-500">Average Allocation</p>
//           <h3 className="text-2xl font-bold text-gray-800 mt-2">
//             ₹{avgAllocated.toFixed(2).toLocaleString("en-IN")}
//           </h3>

//           <div className="mt-4 flex items-center justify-between">
//             <span className="text-red-500 text-sm font-semibold">↓ Live</span>
//             <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-xl">
//               ✅
//             </div>
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div className="bg-white rounded-2xl shadow-sm border p-5">
//           <p className="text-sm text-gray-500">Operations</p>
//           <h3 className="text-2xl font-bold text-gray-800 mt-2">
//             ₹{totalRevenueSum.toLocaleString("en-IN")}
//           </h3>

//           <div className="mt-4 flex items-center justify-between">
//             <span className="text-indigo-600 text-sm font-semibold">Updated</span>
//             <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl">
//               📊
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Middle Row (Chart + Activity) */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
//         {/* Revenue Overview (Chart Box) */}
//         <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-6">
//           <div className="flex items-center justify-between gap-4 flex-wrap">
//             <h3 className="text-lg font-bold text-gray-800">
//               Revenue Overview
//             </h3>

//             <div className="flex items-center gap-4 text-sm">
//               <span className="flex items-center gap-2 text-gray-500">
//                 <span className="w-2 h-2 rounded-full bg-blue-500"></span>
//                 Activity
//               </span>
//               <span className="flex items-center gap-2 text-gray-500">
//                 <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
//                 Goal
//               </span>
//             </div>
//           </div>

//           {/* ✅ Real Chart (Bars) */}
//           <div className="mt-6 grid grid-cols-10 gap-3 items-end h-44">
//             {(chartData.length > 0
//               ? chartData
//               : [10, 20, 15, 25, 18, 22, 14, 28, 19, 24]
//             ).map((h, i) => (
//               <div
//                 key={i}
//                 className="w-full bg-blue-200 rounded-lg flex items-end"
//                 style={{ height: "100%" }}
//               >
//                 <div
//                   className="w-full bg-blue-600 rounded-lg"
//                   style={{ height: `${h}%` }}
//                 ></div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-4 text-xs text-gray-500">
//             {chartData.length > 0
//               ? "Showing real analytics ✅"
//               : "No revenue data found yet ✅"}
//           </div>
//         </div>

//         {/* Recent Activity */}
//         <div className="bg-white rounded-2xl shadow-sm border p-6">
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-bold text-gray-800">Recent Activity</h3>

//             <button
//               onClick={fetchRevenues}
//               className="text-xs px-3 py-1 rounded-lg border hover:bg-gray-100 transition"
//             >
//               Refresh
//             </button>
//           </div>

//           <p className="text-sm text-gray-500 mt-1">
//             Today: {new Date().toDateString()}
//           </p>

//           <div className="mt-5 space-y-4">
//             {recentActivity.length === 0 ? (
//               <div className="text-gray-400 text-sm">
//                 No activity found for <b>{role}</b>
//               </div>
//             ) : (
//               recentActivity.map((item, idx) => (
//                 <div
//                   key={item._id || idx}
//                   className="flex items-center gap-4 p-4 rounded-2xl border bg-gray-50 hover:bg-gray-100 transition"
//                 >
//                   <div className="w-10 h-10 rounded-xl bg-white shadow-sm border flex items-center justify-center text-lg">
//                     ✅
//                   </div>

//                   <div className="flex-1">
//                     <p className="font-semibold text-gray-800 text-sm">
//                       Revenue Added: ₹
//                       {Number(item.totalRevenue || 0).toLocaleString("en-IN")}
//                     </p>
//                     <p className="text-xs text-gray-500 mt-0.5">
//                       Allocated: ₹
//                       {Number(item.allocatedAmount || 0).toLocaleString("en-IN")}
//                     </p>
//                     <p className="text-[11px] text-gray-400 mt-0.5">
//                       Date: {item.date}
//                     </p>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Row (Revenue Overview + Analytics) */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
//         {/* Revenue Overview */}
//         <div className="bg-white rounded-2xl shadow-sm border p-6">
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-bold text-gray-800">Revenue Overview</h3>
//             <span className="text-xs text-gray-500">Today</span>
//           </div>

//           {/* Ring UI */}
//           <div className="mt-6 flex items-center justify-center">
//             <div className="relative w-40 h-40 rounded-full border-[10px] border-gray-200 flex items-center justify-center">
//               <div className="absolute inset-0 rounded-full border-[10px] border-indigo-600 border-t-transparent border-r-transparent rotate-[120deg]"></div>
//               <div className="text-center">
//                 <p className="text-3xl font-bold text-gray-800">
//                   {totalEntries > 0 ? "100%" : "0%"}
//                 </p>
//                 <p className="text-xs text-gray-500 mt-1">System Status</p>
//                 <p className="text-sm font-semibold text-green-600 mt-1">
//                   {totalEntries > 0 ? "ACTIVE ✅" : "NO DATA"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <p className="text-xs text-gray-500 mt-6 text-center">
//             Fund allocation system performance
//           </p>
//         </div>

//         {/* Revenue Analytics */}
//         <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-6">
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-bold text-gray-800">Revenue Analytics</h3>
//             <span className="text-xs text-gray-500">Weekly</span>
//           </div>

//           {/* Fake Area Chart (keep design same) */}
//           <div className="mt-6 h-44 rounded-2xl bg-blue-50 border flex items-end overflow-hidden">
//             <div className="w-full h-full relative">
//               <div className="absolute inset-0 flex items-end gap-2 p-4">
//                 {(chartData.length > 0
//                   ? chartData.slice(-7)
//                   : [30, 45, 25, 60, 75, 50, 65]
//                 ).map((h, i) => (
//                   <div
//                     key={i}
//                     className="flex-1 bg-blue-300 rounded-xl"
//                     style={{ height: `${h}%` }}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="mt-4 text-xs text-gray-500">
//             {chartData.length > 0
//               ? "Showing real revenue stats ✅"
//               : "Example chart view (no revenue yet ✅)"}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// =================================================

import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";

/* ================= FY UTILITIES ================= */
const getCurrentFinancialYear = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  return month >= 4
    ? `${year}-${String(year + 1).slice(2)}`
    : `${year - 1}-${String(year).slice(2)}`;
};

const generateFinancialYears = (count = 10) => {
  const currentFY = getCurrentFinancialYear();
  const [startYear] = currentFY.split("-");

  const years = [];
  for (let i = 0; i < count; i++) {
    const y = Number(startYear) - i;
    years.push(`${y}-${String(y + 1).slice(2)}`);
  }
  return years;
};
/* ================================================= */

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [revenues, setRevenues] = useState([]);
  const [loading, setLoading] = useState(false);

  // FY state
  const [selectedFY, setSelectedFY] = useState(getCurrentFinancialYear());
  const financialYears = useMemo(() => generateFinancialYears(10), []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  /* ================= FETCH DATA ================= */
  const fetchRevenues = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/revenue");
      const responseData = res.data;
      const data = Array.isArray(responseData)
        ? responseData
        : responseData?.data || [];
      setRevenues(data);
    } catch (err) {
      console.log("❌ Dashboard revenue fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRevenues();
  }, []);

  /* ================= ROLE FILTER ================= */
  const role = localStorage.getItem("userRole") || user?.role;

  const roleWiseRevenues = useMemo(() => {
    if (!role) return revenues;
    if (role === "Super Admin") return revenues;
    return revenues.filter((r) => r.role === role);
  }, [revenues, role]);

  /* ================= FY FILTER ================= */
  const fyWiseRevenues = useMemo(() => {
    return roleWiseRevenues.filter(
      (r) => r.financialYear === selectedFY
    );
  }, [roleWiseRevenues, selectedFY]);

  /* ================= CALCULATIONS ================= */
  const totalEntries = fyWiseRevenues.length;

  const totalRevenueSum = fyWiseRevenues.reduce(
    (sum, item) => sum + Number(item.totalRevenue || 0),
    0
  );

  const totalAllocatedSum = fyWiseRevenues.reduce(
    (sum, item) => sum + Number(item.allocatedAmount || 0),
    0
  );

  const avgAllocated =
    totalEntries > 0 ? totalAllocatedSum / totalEntries : 0;

  /* ================= RECENT ACTIVITY ================= */
  const recentActivity = useMemo(() => {
    return fyWiseRevenues
      .slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 4);
  }, [fyWiseRevenues]);

  /* ================= CHART DATA ================= */
  const chartData = useMemo(() => {
    const latest10 = fyWiseRevenues
      .slice()
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      .slice(-10);

    const maxVal = Math.max(
      ...latest10.map((x) => Number(x.allocatedAmount || 0)),
      1
    );

    return latest10.map((x) =>
      Math.max(
        5,
        Math.round((Number(x.allocatedAmount || 0) / maxVal) * 100)
      )
    );
  }, [fyWiseRevenues]);

  /* ================= UI ================= */
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
          {loading && (
            <p className="text-xs text-blue-600 mt-1 font-semibold">
              Loading real data...
            </p>
          )}
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
        {/* Card 1: Financial Year Dropdown */}
        <div className="bg-white rounded-2xl shadow-sm border p-5 flex flex-col justify-between">
          <p className="text-sm text-gray-500">Financial Year</p>

          <select
            value={selectedFY}
            onChange={(e) => setSelectedFY(e.target.value)}
            className="mt-2 px-4 py-2 border rounded-xl text-sm font-semibold"
          >
            {financialYears.map((fy) => (
              <option key={fy} value={fy}>
                {fy}
              </option>
            ))}
          </select>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-blue-600 text-sm font-semibold">
              Active FY
            </span>
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-xl">
              📅
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-sm border p-5">
          <p className="text-sm text-gray-500">Total Budget Allocation</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-2">
            ₹{totalAllocatedSum.toLocaleString("en-IN")}
          </h3>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-green-600 text-sm font-semibold">↑ Live</span>
            <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-xl">
              💰
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-sm border p-5">
          <p className="text-sm text-gray-500">Average Allocation</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-2">
            ₹{avgAllocated.toFixed(2).toLocaleString("en-IN")}
          </h3>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-red-500 text-sm font-semibold">↓ Live</span>
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-xl">
              ✅
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-sm border p-5">
          <p className="text-sm text-gray-500">Operations</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-2">
            ₹{totalRevenueSum.toLocaleString("en-IN")}
          </h3>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-indigo-600 text-sm font-semibold">Updated</span>
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

          {/* ✅ Real Chart (Bars) */}
          <div className="mt-6 grid grid-cols-10 gap-3 items-end h-44">
            {(chartData.length > 0 ? chartData : [10, 20, 15, 25, 18, 22, 14, 28, 19, 24]).map(
              (h, i) => (
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
              )
            )}
          </div>

          <div className="mt-4 text-xs text-gray-500">
            {chartData.length > 0
              ? "Showing real analytics ✅"
              : "No revenue data found yet ✅"}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">Recent Activity</h3>

            <button
              onClick={fetchRevenues}
              className="text-xs px-3 py-1 rounded-lg border hover:bg-gray-100 transition"
            >
              Refresh
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            Today: {new Date().toDateString()}
          </p>

          <div className="mt-5 space-y-4">
            {recentActivity.length === 0 ? (
              <div className="text-gray-400 text-sm">
                No activity found for <b>{role}</b>
              </div>
            ) : (
              recentActivity.map((item, idx) => (
                <div
                  key={item._id || idx}
                  className="flex items-center gap-4 p-4 rounded-2xl border bg-gray-50 hover:bg-gray-100 transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border flex items-center justify-center text-lg">
                    ✅
                  </div>

                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm">
                      Revenue Added: ₹{Number(item.totalRevenue || 0).toLocaleString("en-IN")}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Allocated: ₹{Number(item.allocatedAmount || 0).toLocaleString("en-IN")}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Date: {item.date}
                    </p>
                  </div>
                </div>
              ))
            )}
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
                <p className="text-3xl font-bold text-gray-800">
                  {totalEntries > 0 ? "100%" : "0%"}
                </p>
                <p className="text-xs text-gray-500 mt-1">System Status</p>
                <p className="text-sm font-semibold text-green-600 mt-1">
                  {totalEntries > 0 ? "ACTIVE ✅" : "NO DATA"}
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

          {/* Fake Area Chart (keep design same) */}
          <div className="mt-6 h-44 rounded-2xl bg-blue-50 border flex items-end overflow-hidden">
            <div className="w-full h-full relative">
              <div className="absolute inset-0 flex items-end gap-2 p-4">
                {(chartData.length > 0 ? chartData.slice(-7) : [30, 45, 25, 60, 75, 50, 65]).map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-blue-300 rounded-xl"
                      style={{ height: `${h}%` }}
                    ></div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            {chartData.length > 0
              ? "Showing real revenue stats ✅"
              : "Example chart view (no revenue yet ✅)"}
          </div>
        </div>
      </div>

      {/* बाकीचा UI (charts, recent activity, analytics) — unchanged */}
      {/* तुझ्या existing code प्रमाणेच चालू राहील */}
    </div>
  );
}
