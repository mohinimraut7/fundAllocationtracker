import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
import { useNavigate, Link } from "react-router-dom";
import bgImage from "../assets/bg.webp";
import axiosInstance from "../services/axiosInstance"; // ✅ baseUrl use

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
   

    if (!form.username.trim()) {
      alert("Username टाका ✅");
      return;
    }

    if (!form.password) {
      alert("Password टाका ✅");
      return;
    }

    try {
      // ✅ baseURL + endpoint
      const res = await axiosInstance.post("/login", {
        username: form.username,
        password: form.password,
      });

      const data = res.data;

      if (!data.success) {
        alert(data.message || "Invalid credentials");
        return;
      }

      const userPayload = {
        // id: data.user.id,
        // username: data.user.username,
        // role: data.user.role,
         id: data.user.id,
        name: data.user.name,
        username: data.user.username,
        role: data.user.role,
       region: data.user.region,
      collectorOffice: data.user.collectorOffice,
      district: data.user.district,
       municipality: data.user.municipality,
      };

      // ✅ token save (जर backend देत असेल तर)
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      dispatch(loginSuccess(userPayload));
      localStorage.setItem("authUser", JSON.stringify(userPayload));
      localStorage.setItem("userRole", data.user.role);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      // ✅ axios error message show
      const msg =
        error?.response?.data?.message || "Server error. Backend चालू आहे का?";
      alert(msg);
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full min-h-screen flex flex-col md:flex-row">
        {/* LEFT SIDE - Same marketing text */}
        <div className="w-full md:w-1/2 relative flex flex-col justify-center px-6 md:px-20 text-white">
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg text-center md:text-left">
              <span className="block text-white">Fund</span>
              <span className="block text-blue-300">Tracking</span>
            </h1>

            <div className="mt-4 mb-8 w-24 h-1 bg-blue-400 rounded-full mx-auto md:mx-0"></div>

            <div className="hidden md:block">
              <p className="mt-6 text-xl font-semibold text-white drop-shadow max-w-lg">
                You can securely access the Fund Allocation Tracker using your
                official credentials.
              </p>

              <p className="mt-6 text-lg text-slate-200 drop-shadow max-w-lg">
                Secure and real-time fund monitoring system
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Login Card */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 pt-6 md:pt-0">
          <div className="w-full max-w-md rounded-2xl bg-white/25 backdrop-blur-2xl border border-white/30 shadow-2xl p-8 md:p-10">
            <form onSubmit={handleLogin} className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-600 text-center mb-6 tracking-widest">
                LOGIN
              </h2>

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
                  className="w-full px-4 py-3 rounded-lg bg-white/90 outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-4 py-3 rounded-lg bg-white/90 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
              >
                SIGN IN
              </button>

              {/* Redirect to Registration */}
              <div className="text-center text-sm text-white/90">
                Not registered yet?{" "}
                <Link
                  to="/register"
                  className="text-blue-300 hover:underline font-semibold"
                >
                  Register here
                </Link>
              </div>

              <div className="text-center text-white/80 text-xs">
                © {new Date().getFullYear()} Fund Tracker System
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
