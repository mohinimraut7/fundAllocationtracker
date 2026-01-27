// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";
// import collectorData from "../data/collectorOffices.json";
// import bgImage from "../assets/bg.webp";

// export default function Registration() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     role: "collector",
//     username: "",
//     password: "",


//     region: "",
//     collectorOffice: "",

    
//     corporationDistrict: "",
//     municipality: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

 
//   const regions = [
//     ...new Set(collectorData.collectorOffices.map((o) => o.region)),
//   ];

//   // ✅ Filter offices by selected region (collector role साठी)
//   const filteredOffices = collectorData.collectorOffices.filter(
//     (o) => o.region === form.region,
//   );

//   // ✅ All districts (corporation role साठी)
//   const districts = collectorData.collectorOffices.map((o) => o.district);

//   // ✅ Corporation role: selected district object
//   const selectedDistrictObj = collectorData.collectorOffices.find(
//     (o) => o.district === form.corporationDistrict,
//   );

//   // ✅ Corporation role: municipalities list
//   const municipalityList = selectedDistrictObj?.municipalities || [];

//   // ✅ LOGIN FUNCTION
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!form.password) {
//       alert("Password टाका ✅");
//       return;
//     }

//     // ✅ Collector validation
//     if (form.role === "collector" && !form.region) {
//       alert("Region निवडा ✅");
//       return;
//     }
//     if (form.role === "collector" && !form.collectorOffice) {
//       alert("Collector Office निवडा ✅");
//       return;
//     }

//     // ✅ Corporation validation
//     if (form.role === "corporation" && !form.corporationDistrict) {
//       alert("District निवडा ✅");
//       return;
//     }
//     if (form.role === "corporation" && !form.municipality) {
//       alert("Corporation / NagarPalika निवडा ✅");
//       return;
//     }

//     const roleMap = {
//       collector: "Collector Office",
//       corporation: "Corporation / NagarPalika",
//       grampanchayat: "Grampanchayat",
//     };

//     try {
//       // ✅ Step 1: Login API
//       const res = await fetch("http://localhost:3001/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           role: roleMap[form.role],
//           password: form.password,
//         }),
//       });

//       const data = await res.json();

//       if (!data.success) {
//         alert(data.message || "Login failed");
//         return;
//       }

//       // ✅ Step 2: role wise payload तयार कर
//       let updatePayload = {};

//       if (form.role === "collector") {
//         updatePayload = {
//           region: form.region,
//           collectorOffice: form.collectorOffice,
//         };
//       }

//       if (form.role === "corporation") {
//         updatePayload = {
//           district: form.corporationDistrict,
//           municipality: form.municipality,
//         };
//       }

//       // ✅ Step 3: user update in db.json
//       await fetch(`http://localhost:3001/users/${data.user.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatePayload),
//       });

//       // ✅ Step 4: redux + localStorage store (Refresh fix ✅✅✅)
//       const userPayload = {
//         id: data.user.id,
//         name: data.user.name,
//         role: data.user.role,

//         region: form.region,
//         collectorOffice: form.collectorOffice,

//         corporationDistrict: form.corporationDistrict,
//         municipality: form.municipality,
//       };

//       // ✅ Redux store
//       dispatch(loginSuccess(userPayload));

//       // ✅ localStorage store (Refresh नंतरही user टिकून राहील)
//       localStorage.setItem("authUser", JSON.stringify(userPayload));
//       localStorage.setItem("userRole", data.user.role);

//       navigate("/dashboard");
//     } catch (error) {
//       console.log(error);
//       alert("Server error. JSON Server चालू आहे का?");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//       }}
//     >
//       {/* Global Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>
//       <div className="relative z-10 w-full min-h-screen overflow-y-auto flex flex-col md:flex-row">
//         <div className="relative z-10 w-full min-h-screen overflow-y-auto flex flex-col md:flex-row">
//           {/* LEFT SIDE - Marketing Text */}
//           <div
//             className="
//       w-full md:w-1/2
//       relative flex flex-col justify-center
//       px-6 md:px-20
//       text-white
//       order-1 md:order-1
//     "
//           >
//             {/* Gradient only on desktop */}
//             <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

//             <div className="relative z-10">
//               {/* Heading - Always visible */}
//               <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg text-center md:text-left">
//                 <span className="block text-white">Fund</span>
//                 <span className="block text-blue-300">Tracking</span>
//               </h1>

//               <div className="mt-4 mb-8 w-24 h-1 bg-blue-400 rounded-full mx-auto md:mx-0"></div>

//               {/* Desktop Description ONLY */}
//               <div className="hidden md:block">
//                 <p className="mt-6 text-xl font-semibold text-white drop-shadow max-w-lg">
//                   You can securely access the Fund Allocation Tracker using your
//                   official credentials.
//                 </p>

//                 <p className="mt-6 text-lg text-slate-200 drop-shadow max-w-lg">
//                   Real-time tracking of fund allocation and utilization
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE - Login + Mobile Description */}
//           <div
//             className="
//       w-full md:w-1/2
//       flex flex-col items-center
//       justify-start md:justify-center
//       px-6
//       pt-6 md:pt-0
//       order-2 md:order-2
//     "
//           >
//             {/* Login Card */}
//             <div className="w-full max-w-md rounded-2xl bg-white/25 backdrop-blur-2xl border border-white/30 shadow-2xl p-8 md:p-10">
//               <form onSubmit={handleLogin} className="space-y-6">
//                 <h2 className="text-3xl font-bold text-blue-600 text-center mb-6 tracking-widest">
//                   REGISTRATION
//                 </h2>

//                 {/* Role */}
//                 <div>
//                   <label className="block text-sm text-white mb-2">
//                     Select Role
//                   </label>
//                   <select
//                     name="role"
//                     value={form.role}
//                     onChange={(e) => {
//                       handleChange(e);

//                       if (e.target.value === "collector") {
//                         setForm((prev) => ({
//                           ...prev,
//                           corporationDistrict: "",
//                           municipality: "",
//                         }));
//                       } else if (e.target.value === "corporation") {
//                         setForm((prev) => ({
//                           ...prev,
//                           region: "",
//                           collectorOffice: "",
//                         }));
//                       } else {
//                         setForm((prev) => ({
//                           ...prev,
//                           region: "",
//                           collectorOffice: "",
//                           corporationDistrict: "",
//                           municipality: "",
//                         }));
//                       }
//                     }}
//                     className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-800 outline-none transition focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="collector">Collector Office</option>
//                     <option value="corporation">
//                       Corporation / NagarPalika
//                     </option>
//                     <option value="grampanchayat">Grampanchayat</option>
//                   </select>
//                 </div>

//                 {/* Collector: Region */}
//                 {form.role === "collector" && (
//                   <div>
//                     <label className="block text-sm text-white mb-2">
//                       Select Region
//                     </label>
//                     <select
//                       name="region"
//                       value={form.region}
//                       onChange={(e) => {
//                         handleChange(e);
//                         setForm((prev) => ({ ...prev, collectorOffice: "" }));
//                       }}
//                       className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-800 outline-none transition focus:ring-2 focus:ring-blue-500"
//                     >
//                       <option value="">-- Select Region --</option>
//                       {regions.map((region, index) => (
//                         <option key={index} value={region}>
//                           {region}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 )}

//                 {/* Collector: Office */}
//                 {form.role === "collector" && form.region && (
//                   <div>
//                     <label className="block text-sm text-white mb-2">
//                       Select Collector Office
//                     </label>
//                     <select
//                       name="collectorOffice"
//                       value={form.collectorOffice}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-800 outline-none transition focus:ring-2 focus:ring-blue-500"
//                     >
//                       <option value="">-- Select Office --</option>
//                       {filteredOffices.map((office, index) => (
//                         <option key={index} value={office.district}>
//                           {office.district}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 )}

//                 {/* Corporation: District */}
//                 {form.role === "corporation" && (
//                   <div>
//                     <label className="block text-sm text-white mb-2">
//                       Select District
//                     </label>
//                     <select
//                       name="corporationDistrict"
//                       value={form.corporationDistrict}
//                       onChange={(e) => {
//                         handleChange(e);
//                         setForm((prev) => ({ ...prev, municipality: "" }));
//                       }}
//                       className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-800 outline-none transition focus:ring-2 focus:ring-blue-500"
//                     >
//                       <option value="">-- Select District --</option>
//                       {districts.map((dist, index) => (
//                         <option key={index} value={dist}>
//                           {dist}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 )}

//                 {/* Corporation: Municipality */}
//                 {form.role === "corporation" && form.corporationDistrict && (
//                   <div>
//                     <label className="block text-sm text-white mb-2">
//                       Select Corporation / NagarPalika
//                     </label>
//                     <select
//                       name="municipality"
//                       value={form.municipality}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-800 outline-none transition focus:ring-2 focus:ring-blue-500"
//                     >
//                       <option value="">-- Select Corporation --</option>

//                       {municipalityList.length === 0 ? (
//                         <option value="" disabled>
//                           No corporation available
//                         </option>
//                       ) : (
//                         municipalityList.map((m, index) => (
//                           <option key={index} value={m.name}>
//                             {m.name}
//                           </option>
//                         ))
//                       )}
//                     </select>
//                   </div>
//                 )}

//                  {/* Name + Username SIDE BY SIDE */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {/* Name */}
//                 <div>
//                   <label className="block text-sm text-white mb-2">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     placeholder="Enter your full name"
//                     className="w-full px-4 py-3 rounded-lg bg-white/90 outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
                

//                 {/* Username */}
//                 <div>
//                   <label className="block text-sm text-white mb-2">
//                     Username
//                   </label>
//                   <input
//                     type="text"
//                     name="username"
//                     value={form.username}
//                     onChange={handleChange}
//                     placeholder="Enter your username"
//                     className="w-full px-4 py-3 rounded-lg bg-white/90 outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <label className="block text-sm text-white mb-2">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     value={form.password}
//                     onChange={handleChange}
//                     placeholder="********"
//                     className="w-full px-4 py-3 rounded-lg bg-white/90 outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 {/* Login Button */}
//                 <button
//                   type="submit"
//                   className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
//                 >
//                   SIGN IN
//                 </button>

//                 <div className="text-center text-white/80 text-xs">
//                   © {new Date().getFullYear()} Fund Tracker System
//                 </div>
//               </form>
//             </div>
            

//             {/* MOBILE DESCRIPTION - Bold & Black */}
//             <div className="block md:hidden mt-8 text-center px-6 pb-6">
//               <p className="text-base font-bold text-white">
//                 You can securely access the Fund Allocation Tracker using your
//                 official credentials.
//               </p>

//               <p className="mt-3 text-sm font-semibold text-white">
//                 Real-time tracking of fund allocation and utilization
//               </p>
//             </div>
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
import collectorData from "../data/collectorOffices.json";
import bgImage from "../assets/bg.webp";
import axiosInstance from "../services/axiosInstance"; // ✅ baseUrl

export default function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    role: "collector",
    name: "",
    username: "",
    password: "",

    region: "",
    collectorOffice: "",

    corporationDistrict: "",
    municipality: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const regions = [
    ...new Set(collectorData.collectorOffices.map((o) => o.region)),
  ];

  const filteredOffices = collectorData.collectorOffices.filter(
    (o) => o.region === form.region
  );

  const districts = collectorData.collectorOffices.map((o) => o.district);

  const selectedDistrictObj = collectorData.collectorOffices.find(
    (o) => o.district === form.corporationDistrict
  );

  const municipalityList = selectedDistrictObj?.municipalities || [];

  // ✅ REGISTER FUNCTION
  const handleLogin = async (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!form.name.trim()) {
      alert("Name टाका ✅");
      return;
    }

    if (!form.username.trim()) {
      alert("Username टाका ✅");
      return;
    }

    if (!form.password) {
      alert("Password टाका ✅");
      return;
    }

    // ✅ Collector validation
    if (form.role === "collector" && !form.region) {
      alert("Region निवडा ✅");
      return;
    }
    if (form.role === "collector" && !form.collectorOffice) {
      alert("Collector Office निवडा ✅");
      return;
    }

    // ✅ Corporation validation
    if (form.role === "corporation" && !form.corporationDistrict) {
      alert("District निवडा ✅");
      return;
    }
    if (form.role === "corporation" && !form.municipality) {
      alert("Corporation / NagarPalika निवडा ✅");
      return;
    }

    const roleMap = {
      collector: "Collector Office",
      corporation: "Corporation / NagarPalika",
      grampanchayat: "Grampanchayat",
      wcd:"Super Admin"
    };

    // ✅ register payload
    const payload = {
      name: form.name,
      username: form.username,
      password: form.password,
      role: roleMap[form.role],

      // collector fields
      region: form.role === "collector" ? form.region : "",
      collectorOffice: form.role === "collector" ? form.collectorOffice : "",

      // corporation fields
      district: form.role === "corporation" ? form.corporationDistrict : "",
      municipality: form.role === "corporation" ? form.municipality : "",
    };

    try {
      // ✅ Register API (baseURL वापरून)
      const res = await axiosInstance.post("/register", payload);
      const data = res.data;

      if (!data.success) {
        alert(data.message || "Registration failed ❌");
        return;
      }

      // ✅ Token save (जर backend register मध्ये token देत असेल तर)
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      const userPayload = {
        id: data.user?.id,
        name: data.user?.name,
        username: data.user?.username,
        role: data.user?.role,

        region: data.user?.region || payload.region,
        collectorOffice: data.user?.collectorOffice || payload.collectorOffice,

        district: data.user?.district || payload.district,
        municipality: data.user?.municipality || payload.municipality,
      };

      // ✅ Redux store
      dispatch(loginSuccess(userPayload));

      // ✅ localStorage store
      localStorage.setItem("authUser", JSON.stringify(userPayload));
      localStorage.setItem("userRole", userPayload.role);

      alert("Registration Success ✅");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      const msg =
        error?.response?.data?.message || "Server error. Backend चालू आहे का? ❌";
      alert(msg);
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Global Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 w-full min-h-screen overflow-y-auto flex flex-col md:flex-row">
        <div className="relative z-10 w-full min-h-screen overflow-y-auto flex flex-col md:flex-row">
          {/* LEFT SIDE - Marketing Text */}
          <div
            className="
      w-full md:w-1/2
      relative flex flex-col justify-center
      px-6 md:px-20
      text-white
      order-1 md:order-1
    "
          >
            {/* Gradient only on desktop */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

            <div className="relative z-10">
              {/* Heading - Always visible */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg text-center md:text-left">
                <span className="block text-white">Fund</span>
                <span className="block text-blue-300">Tracking</span>
              </h1>

              <div className="mt-4 mb-8 w-24 h-1 bg-blue-400 rounded-full mx-auto md:mx-0"></div>

              {/* Desktop Description ONLY */}
              <div className="hidden md:block">
                <p className="mt-6 text-xl font-semibold text-white drop-shadow max-w-lg">
                  You can securely access the Fund Allocation Tracker using your
                  official credentials.
                </p>

                <p className="mt-6 text-lg text-slate-200 drop-shadow max-w-lg">
                  Real-time tracking of fund allocation and utilization
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Login + Mobile Description */}
          <div
            className="
      w-full md:w-1/2
      flex flex-col items-center
      justify-start md:justify-center
      px-6
      pt-6 md:pt-0
      order-2 md:order-2
    "
          >
            {/* Login Card */}
            <div className="w-full max-w-md rounded-2xl bg-white/25 backdrop-blur-2xl border border-white/30 shadow-2xl p-8 md:p-10">
              <form onSubmit={handleLogin} className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-600 text-center mb-6 tracking-widest">
                  REGISTRATION
                </h2>

                {/* Role */}
                <div>
                  <label className="block text-sm text-white mb-2">
                    Select Role
                  </label>
                  {/* <select
                    name="role"
                    value={form.role}
                    onChange={(e) => {
                      handleChange(e);

                      if (e.target.value === "collector") {
                        setForm((prev) => ({
                          ...prev,
                          corporationDistrict: "",
                          municipality: "",
                        }));
                      } else if (e.target.value === "corporation") {
                        setForm((prev) => ({
                          ...prev,
                          region: "",
                          collectorOffice: "",
                        }));
                      } else {
                        setForm((prev) => ({
                          ...prev,
                          region: "",
                          collectorOffice: "",
                          corporationDistrict: "",
                          municipality: "",
                        }));
                      }
                    }}
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-800 outline-none transition focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="collector">Collector Office</option>
                    <option value="corporation">
                      Corporation / NagarPalika
                    </option>
                    <option value="grampanchayat">Grampanchayat</option>
                  </select> */}
                  <select
  name="role"
  value={form.role}
  onChange={(e) => {
    handleChange(e);

    if (e.target.value === "collector") {
      setForm((prev) => ({
        ...prev,
        corporationDistrict: "",
        municipality: "",
      }));
    } else if (e.target.value === "corporation") {
      setForm((prev) => ({
        ...prev,
        region: "",
        collectorOffice: "",
      }));
    } else {
      // grampanchayat + wcd
      setForm((prev) => ({
        ...prev,
        region: "",
        collectorOffice: "",
        corporationDistrict: "",
        municipality: "",
      }));
    }
  }}
  className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-800 outline-none transition focus:ring-2 focus:ring-blue-500"
>
  <option value="collector">Collector Office</option>
  <option value="corporation">Corporation / NagarPalika</option>
  <option value="grampanchayat">Grampanchayat</option>
  <option value="wcd">WCD (Super Admin)</option>
</select>

                </div>

                {/* Collector: Region */}
                {form.role === "collector" && (
                  <div>
                    <label className="block text-sm text-white mb-2">
                      Select Region
                    </label>
                    <select
                      name="region"
                      value={form.region}
                      onChange={(e) => {
                        handleChange(e);
                        setForm((prev) => ({ ...prev, collectorOffice: "" }));
                      }}
                      className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-800 outline-none transition focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Select Region --</option>
                      {regions.map((region, index) => (
                        <option key={index} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Collector: Office */}
                {form.role === "collector" && form.region && (
                  <div>
                    <label className="block text-sm text-white mb-2">
                      Select Collector Office
                    </label>
                    <select
                      name="collectorOffice"
                      value={form.collectorOffice}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-800 outline-none transition focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Select Office --</option>
                      {filteredOffices.map((office, index) => (
                        <option key={index} value={office.district}>
                          {office.district}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Corporation: District */}
                {form.role === "corporation" && (
                  <div>
                    <label className="block text-sm text-white mb-2">
                      Select District
                    </label>
                    <select
                      name="corporationDistrict"
                      value={form.corporationDistrict}
                      onChange={(e) => {
                        handleChange(e);
                        setForm((prev) => ({ ...prev, municipality: "" }));
                      }}
                      className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-800 outline-none transition focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Select District --</option>
                      {districts.map((dist, index) => (
                        <option key={index} value={dist}>
                          {dist}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Corporation: Municipality */}
                {form.role === "corporation" && form.corporationDistrict && (
                  <div>
                    <label className="block text-sm text-white mb-2">
                      Select Corporation / NagarPalika
                    </label>
                    <select
                      name="municipality"
                      value={form.municipality}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-800 outline-none transition focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Select Corporation --</option>

                      {municipalityList.length === 0 ? (
                        <option value="" disabled>
                          No corporation available
                        </option>
                      ) : (
                        municipalityList.map((m, index) => (
                          <option key={index} value={m.name}>
                            {m.name}
                          </option>
                        ))
                      )}
                    </select>
                  </div>
                )}

                {/* Name + Username SIDE BY SIDE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 outline-none focus:ring-2 focus:ring-blue-500"
                    />
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
                      className="w-full px-4 py-3 rounded-lg bg-white/90 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
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

                {/* Register Button */}
                <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                >
                SIGN UP
                </button>

                {/* Redirect to Login */}
                <div className="text-center text-sm text-white/90">
                  Already registered?{" "}
                  <span
                    onClick={() => navigate("/login")}
                    className="text-blue-300 hover:underline font-semibold cursor-pointer"
                  >
                    Login here
                  </span>
                </div>

                <div className="text-center text-white/80 text-xs">
                  © {new Date().getFullYear()} Fund Tracker System
                </div>
              </form>
            </div>

            {/* MOBILE DESCRIPTION */}
            <div className="block md:hidden mt-8 text-center px-6 pb-6">
              <p className="text-base font-bold text-white">
                You can securely access the Fund Allocation Tracker using your
                official credentials.
              </p>

              <p className="mt-3 text-sm font-semibold text-white">
                Real-time tracking of fund allocation and utilization
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
