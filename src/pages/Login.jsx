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




