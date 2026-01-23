// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";

// export default function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     role: "collector",
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!form.username || !form.password) {
//       alert("Username आणि Password टाका ✅");
//       return;
//     }

//     dispatch(
//       loginSuccess({
//         name: form.username,
//         role: form.role,
//       }),
//     );

//     navigate("/dashboard");
//   };

//   return (
//     <div className="w-screen h-screen flex overflow-hidden">
//       {/* LEFT SIDE - Rich Branding Panel */}
//       <div
//         className="
//           hidden md:flex 
//           w-1/2 h-full 
//           relative
//           bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 
//           text-white
//         "
//       >
//         {/* Soft Blend Overlay (Blends into Right Side) */}
//         <div
//           className="
//             absolute top-0 right-0 h-full w-32
//             bg-gradient-to-r 
//             from-transparent 
//             via-white/10 
//             to-white/30
//             rounded-l-full
//             pointer-events-none
//           "
//         ></div>

//         <div className="w-full h-full flex flex-col items-center justify-center px-16 text-center">
//           {/* Logo */}
//           <img
//             src={logo}
//             alt="Government Logo"
//             className="w-40 mb-10 opacity-95"
//           />

//           {/* Title */}
//           <h1 className="text-4xl font-bold leading-tight tracking-wide">
//             Fund Allocation
//             <br />
//             Tracker
//           </h1>

//           {/* Description */}
//           <p className="mt-6 text-lg text-slate-200 max-w-md">
//             Official Government Platform for Monitoring, Managing, and Auditing
//             Public Fund Distribution.
//           </p>

//           {/* Feature Points */}
//           <div className="mt-12 space-y-6 max-w-md text-slate-200">
//             <div className="flex items-center justify-center gap-3">
//               <span className="w-2 h-2 rounded-full bg-teal-400"></span>
//               <p>Secure role-based access for authorized officials</p>
//             </div>

//             <div className="flex items-center justify-center gap-3">
//               <span className="w-2 h-2 rounded-full bg-teal-400"></span>
//               <p>Real-time tracking of fund allocation and utilization</p>
//             </div>

//             <div className="flex items-center justify-center gap-3">
//               <span className="w-2 h-2 rounded-full bg-teal-400"></span>
//               <p>Transparent reporting and audit-ready data</p>
//             </div>
//           </div>

//           {/* Footer Line */}
//           <div className="mt-16 text-sm text-slate-300">
//             Government of India • Digital Governance Initiative
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE - Premium Login Panel */}
//       <div
//         className="
//           w-full md:w-1/2 h-full 
//           flex items-center justify-center 
//           px-6 sm:px-10 
//           bg-gradient-to-br from-slate-50 via-white to-slate-100
//         "
//       >
//         <div
//           className="
//             w-full 
//             max-w-sm sm:max-w-md 
//             mx-auto 
//             md:ml-auto md:mr-20 lg:mr-28
//           "
//         >
//           {/* Top Logo & Welcome */}
//           <div className="mb-10 sm:mb-14 flex flex-col items-center text-center">
//             <img src={logo} alt="Logo" className="w-20 sm:w-24 mb-6 sm:mb-8" />

//             <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900">
//               Welcome
//             </h2>

//             <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-sm">
//               You can securely access the Fund Allocation Tracker using your
//               official credentials.
//             </p>
//           </div>

//           {/* Login Form */}
//           <form onSubmit={handleLogin} className="space-y-6">
//             {/* Role */}
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">
//                 Select Role
//               </label>
//               <select
//                 name="role"
//                 value={form.role}
//                 onChange={handleChange}
//                 className="
//                   w-full 
//                   bg-white/80 
//                   border border-slate-200 
//                   rounded-lg 
//                   px-4 py-3 
//                   text-slate-800 
//                   transition
//                   hover:border-indigo-400 
//                   focus:bg-white 
//                   focus:ring-2 focus:ring-indigo-600 
//                   focus:border-indigo-600 
//                   outline-none
//                 "
//               >
//                 <option value="collector">Collector Office</option>
//                 <option value="corporation">Corporation / NagarPalika</option>
//                 <option value="grampanchayat">Grampanchayat</option>
//               </select>
//             </div>

//             {/* Username */}
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 name="username"
//                 value={form.username}
//                 onChange={handleChange}
//                 placeholder="Enter your username"
//                 className="
//                   w-full 
//                   bg-white/80 
//                   border border-slate-200 
//                   rounded-lg 
//                   px-4 py-3 
//                   text-slate-800 
//                   transition
//                   hover:border-indigo-400 
//                   focus:bg-white 
//                   focus:ring-2 focus:ring-indigo-600 
//                   focus:border-indigo-600 
//                   outline-none
//                 "
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 className="
//                   w-full 
//                   bg-white/80 
//                   border border-slate-200 
//                   rounded-lg 
//                   px-4 py-3 
//                   text-slate-800 
//                   transition
//                   hover:border-indigo-400 
//                   focus:bg-white 
//                   focus:ring-2 focus:ring-indigo-600 
//                   focus:border-indigo-600 
//                   outline-none
//                 "
//               />
//             </div>

//             {/* Login Button */}
//             <button
//               type="submit"
//               className="
//                 w-full 
//                 mt-6 
//                 py-3 
//                 rounded-lg 
//                 bg-indigo-700 
//                 hover:bg-indigo-800 
//                 text-white 
//                 font-semibold 
//                 text-base 
//                 transition 
//                 hover:shadow-lg 
//                 focus:ring-2 focus:ring-indigo-600 
//                 focus:outline-none
//               "
//             >
//               Login
//             </button>
//           </form>

//           {/* Footer */}
//           <div className="mt-16 text-sm text-slate-500 text-center">
//             © {new Date().getFullYear()} Fund Tracker System
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg.webp";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    role: "collector",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert("Enter Username and Password");
      return;
    }

    dispatch(
      loginSuccess({
        name: form.username,
        role: form.role,
      })
    );

    navigate("/dashboard");
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Global Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full h-full flex">

        {/* LEFT SIDE - Highlighted Marketing Text */}
        <div className="hidden md:flex w-1/2 h-full relative flex-col justify-center px-20 text-white">

          {/* Soft gradient behind text only */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

          <div className="relative z-10">

            {/* Title */}
            <h1 className="text-6xl font-bold leading-tight drop-shadow-lg">
              <span className="block text-white">Fund</span>
              <span className="block text-blue-300">Tracking</span>
            </h1>

            {/* Accent Line */}
            <div className="mt-4 mb-8 w-24 h-1 bg-blue-400 rounded-full"></div>

            {/* Main Description */}
            <p className="mt-6 text-xl font-semibold text-white drop-shadow max-w-lg">
              You can securely access the Fund Allocation Tracker using your
              official credentials.
            </p>

            {/* Secondary Point */}
            <p className="mt-6 text-lg text-slate-200 drop-shadow max-w-lg">
              Real-time tracking of fund allocation and utilization
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Glass Login Card */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center px-6">

          <div
            className="
              w-full max-w-md 
              rounded-2xl 
              bg-white/25 
              backdrop-blur-2xl 
              border border-white/30 
              shadow-2xl 
              p-10
            "
          >
            <form onSubmit={handleLogin} className="space-y-6">

              {/* Form Heading */}
              <h2 className="text-3xl font-bold text-blue-600 text-center mb-8 tracking-widest ">
                LOGIN
              </h2>

              {/* Role */}
              <div>
                <label className="block text-sm text-white mb-2">
                  Select Role
                </label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="
                    w-full 
                    px-4 py-3 
                    rounded-lg 
                    bg-white/90 
                    text-slate-800
                    outline-none 
                    transition
                    focus:ring-2 focus:ring-blue-500
                  "
                >
                  <option value="collector">Collector Office</option>
                  <option value="corporation">Corporation / NagarPalika</option>
                  <option value="grampanchayat">Grampanchayat</option>
                </select>
              </div>

              {/* Username */}
              <div>
                <label className="block text-sm text-white mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="
                    w-full 
                    px-4 py-3 
                    rounded-lg 
                    bg-white/90 
                    outline-none 
                    focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm text-white mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="
                    w-full 
                    px-4 py-3 
                    rounded-lg 
                    bg-white/90 
                    outline-none 
                    focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>

              {/* Forgot */}
              {/* <div className="text-right text-sm text-white hover:underline cursor-pointer">
                Forgot password?
              </div> */}

              {/* Login Button */}
              <button
                type="submit"
                className="
                  w-full 
                  py-3
                  rounded-lg 
                  bg-blue-600 
                  hover:bg-blue-700 
                  text-white 
                  font-semibold 
                  transition
                "
              >
                SIGN IN
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 text-white/70">
                <div className="flex-1 h-px bg-white/30"></div>
                <span>or</span>
                <div className="flex-1 h-px bg-white/30"></div>
              </div>

              {/* Google */}
              {/* <button
                type="button"
                className="
                  w-full 
                  py-3 
                  rounded-lg 
                  bg-white 
                  flex items-center justify-center gap-3 
                  font-medium 
                  hover:bg-slate-100 
                  transition
                "
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5"
                />
                Sign in with Google
              </button> */}

              {/* Create Account */}
              <div className="text-center text-white text-sm mt-4">
                Are you new?{" "}
                <span className="underline cursor-pointer">
                  Create an Account
                </span>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}




