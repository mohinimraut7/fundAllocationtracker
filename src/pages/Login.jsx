import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

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
      alert("Username आणि Password टाका ✅");
      return;
    }

    // ✅ Demo Login
    dispatch(
      loginSuccess({
        name: form.username,
        role: form.role,
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Fund Allocation Tracker ✅
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Login to continue
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          {/* Role */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Select Role
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="collector">Collector Office</option>
              <option value="corporation">Corporation / NagarPalika</option>
              <option value="grampanchayat">Grampanchayat</option>
            </select>
          </div>

          {/* Username */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-6">
          © {new Date().getFullYear()} Fund Tracker System
        </p>
      </div>
    </div>
  );
}
