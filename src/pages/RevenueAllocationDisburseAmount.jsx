// import React, { useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import axiosInstance from "../services/axiosInstance";

// export default function RevenueAllocationDisburseAmount() {
//   const { revenueId } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const financialYear = location.state?.financialYear;

//   const [sanctionedOrderNo, setSanctionedOrderNo] = useState("");
//   const [activity, setActivity] = useState(null);
//   const [disburseAmount, setDisburseAmount] = useState("");
//   const [billUcUpload, setBillUcUpload] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // 🔍 Fetch existing activity
//   const handleSearch = async () => {
//     if (!sanctionedOrderNo) return alert("Sanctioned Order No टाका");

//     try {
//       const res = await axiosInstance.get(
//         `/revenue/${sanctionedOrderNo}`
//       );

//       setActivity(res.data.data);
//     } catch (err) {
//       alert("हा Sanctioned Order No सापडला नाही ❌");
//       setActivity(null);
//     }
//   };

//   // 💰 Disburse pending amount (UPDATE)
//   const handleDisburse = async () => {
//     if (!disburseAmount) return alert("Disburse amount टाका");

//     if (Number(disburseAmount) > activity.pendingAmount)
//       return alert("Pending पेक्षा जास्त amount चालणार नाही ❌");

//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append("amountSpent", disburseAmount);
//       if (billUcUpload) formData.append("billUcUpload", billUcUpload);

//       const res = await axiosInstance.put(
//         `/revenue/${revenueId}/activity/${sanctionedOrderNo}`,
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       alert("Amount disbursed successfully ✅");
//       navigate(-1);
//     } catch (err) {
//       alert("Server error ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-full">
//       <div className="bg-white rounded-2xl shadow border p-6 max-w-xl mx-auto">
//         <h1 className="text-xl font-bold text-gray-800 mb-1">
//           Disburse Amount
//         </h1>

//         <p className="text-xs text-gray-500 mb-4">
//           Financial Year: <b>{financialYear}</b>
//         </p>

//         {/* 🔎 Search Order No */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Sanctioned Order No
//           </label>

//           <div className="flex gap-2">
//             <input
//               value={sanctionedOrderNo}
//               onChange={(e) => setSanctionedOrderNo(e.target.value)}
//               className="flex-1 px-4 py-2 border rounded-lg"
//               placeholder="aa/11/123"
//             />

//             <button
//               onClick={handleSearch}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//             >
//               Search
//             </button>
//           </div>
//         </div>

//         {/* 📄 Activity Details */}
//         {activity && (
//           <>
//             <div className="bg-gray-50 border rounded-xl p-4 mb-4 space-y-1">
//               <p className="text-sm">
//                 <b>Sanctioned:</b> ₹{" "}
//                 {activity.amountSanctioned.toLocaleString("en-IN")}
//               </p>
//               <p className="text-sm">
//                 <b>Spent:</b> ₹{" "}
//                 {activity.amountSpent.toLocaleString("en-IN")}
//               </p>
//               <p className="text-sm font-semibold text-green-700">
//                 Pending: ₹{" "}
//                 {activity.pendingAmount.toLocaleString("en-IN")}
//               </p>
//             </div>

//             {/* 💸 Disbursement */}
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-semibold mb-1">
//                   Disburse Amount
//                 </label>
//                 <input
//                   type="number"
//                   value={disburseAmount}
//                   onChange={(e) => setDisburseAmount(e.target.value)}
//                   className="w-full px-4 py-2 border rounded-lg"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold mb-1">
//                   Upload Bill / UC
//                 </label>
//                 <input
//                   type="file"
//                   accept=".pdf,.jpg,.png"
//                   onChange={(e) =>
//                     setBillUcUpload(e.target.files?.[0] || null)
//                   }
//                 />
//               </div>

//               <button
//                 disabled={loading}
//                 onClick={handleDisburse}
//                 className={`w-full py-2 rounded-lg text-white font-semibold ${
//                   loading
//                     ? "bg-gray-400"
//                     : "bg-green-600 hover:bg-green-700"
//                 }`}
//               >
//                 {loading ? "Processing..." : "Disburse Amount"}
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }


// ===========================

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axiosInstance from "../services/axiosInstance";

// export default function RevenueAllocationDisburseAmount() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const financialYear = location.state?.financialYear;

//   const [sanctionedOrderNo, setSanctionedOrderNo] = useState("");
//   const [activity, setActivity] = useState(null);
//   const [revenueId, setRevenueId] = useState(null);

//   const [disburseAmount, setDisburseAmount] = useState("");
//   const [billUcUpload, setBillUcUpload] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // ================= SEARCH SANCTIONED ORDER =================
//   const handleSearch = async () => {
//     if (!sanctionedOrderNo) {
//       alert("Sanctioned Order No टाका");
//       return;
//     }

//     try {
//       const res = await axiosInstance.get(
//         `/revenue/${encodeURIComponent(sanctionedOrderNo)}`
//       );

//       // backend returns ARRAY
//       const firstMatch = res.data.data[0];

//       setActivity(firstMatch.activity);
//       setRevenueId(firstMatch.revenueId);
//     } catch (err) {
//       alert("हा Sanctioned Order No सापडला नाही ❌");
//       setActivity(null);
//       setRevenueId(null);
//     }
//   };

//   // ================= DISBURSE AMOUNT =================
//   const handleDisburse = async () => {
//     if (!disburseAmount) {
//       alert("Disburse amount टाका");
//       return;
//     }

//     if (Number(disburseAmount) > activity.pendingAmount) {
//       alert("Pending पेक्षा जास्त amount चालणार नाही ❌");
//       return;
//     }

//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append("amountSpent", disburseAmount);
//       if (billUcUpload) {
//         formData.append("billUcUpload", billUcUpload);
//       }


//       await axiosInstance.put(
//         `/revenue/activity/${encodeURIComponent(
//           sanctionedOrderNo
//         )}`,
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       alert("Amount disbursed successfully ✅");
//       navigate(-1);
//     } catch (err) {
//       alert("Server error ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-full">
//       <div className="bg-white rounded-2xl shadow border p-6 max-w-xl mx-auto">
//         <h1 className="text-xl font-bold text-gray-800 mb-1">
//           Disburse Amount
//         </h1>

//         <p className="text-xs text-gray-500 mb-4">
//           Financial Year: <b>{financialYear}</b>
//         </p>

//         {/* ================= SEARCH ================= */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Sanctioned Order No
//           </label>

//           <div className="flex gap-2">
//             <input
//               value={sanctionedOrderNo}
//               onChange={(e) => setSanctionedOrderNo(e.target.value)}
//               className="flex-1 px-4 py-2 border rounded-lg"
//               placeholder="aa/11/123"
//             />

//             <button
//               onClick={handleSearch}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//             >
//               Search
//             </button>
//           </div>
//         </div>

//         {/* ================= ACTIVITY DETAILS ================= */}
//         {activity && (
//           <>
//             <div className="bg-gray-50 border rounded-xl p-4 mb-4 space-y-1">
//               <p className="text-sm">
//                 <b>Sanctioned:</b>{" "}
//                 ₹ {activity.amountSanctioned.toLocaleString("en-IN")}
//               </p>

//               {/* <p className="text-sm">
//                 <b>Spent:</b>{" "}
//                 ₹ {activity.amountSpent.toLocaleString("en-IN")}
//               </p>

//               <p className="text-sm font-semibold text-green-700">
//                 Pending: ₹ {activity.pendingAmount.toLocaleString("en-IN")}
//               </p> */}
//               <p className="text-sm">
//                 <b>Subject:</b>{" "}
//                 ₹ {activity.vendorBeneficiaryDetails}
//               </p>
//             </div>

//             {/* ================= DISBURSE ================= */}
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-semibold mb-1">
//                   Disburse Amount
//                 </label>
//                 <input
//                   type="number"
//                   value={disburseAmount}
//                   onChange={(e) => setDisburseAmount(e.target.value)}
//                   className="w-full px-4 py-2 border rounded-lg"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold mb-1">
//                   Upload Bill / UC
//                 </label>
//                 <input
//                   type="file"
//                   accept=".pdf,.jpg,.png"
//                   onChange={(e) =>
//                     setBillUcUpload(e.target.files?.[0] || null)
//                   }
//                 />
//               </div>

//               <button
//                 disabled={loading}
//                 onClick={handleDisburse}
//                 className={`w-full py-2 rounded-lg text-white font-semibold ${
//                   loading
//                     ? "bg-gray-400"
//                     : "bg-green-600 hover:bg-green-700"
//                 }`}
//               >
//                 {loading ? "Processing..." : "Disburse Amount"}
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }


// ======================


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";

export default function RevenueAllocationDisburseAmount() {
  const location = useLocation();
  const financialYear = location.state?.financialYear;

  const [sanctionedOrderNo, setSanctionedOrderNo] = useState("");
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const [paymentType, setPaymentType] = useState("partial"); // partial | full
  const [disburseAmount, setDisburseAmount] = useState("");
  const [billUcUpload, setBillUcUpload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filterFY, setFilterFY] = useState("");

const [activityName, setActivityName] = useState("");
const [disburseDate, setDisburseDate] = useState(
  new Date().toISOString().split("T")[0]
);

  // ================= FETCH ALL ACTIVITIES =================
  useEffect(() => {
    fetchAllActivities();
  }, []);

  const fetchAllActivities = async () => {
    try {
      const res = await axiosInstance.get("/revenue");
      const revenues = res.data.data || [];

      const all = revenues.flatMap((rev) =>
        (rev.activities || []).map((act) => ({
          ...act,
          financialYear: rev.financialYear,
        }))
      );

      setActivities(all);
      setFilteredActivities(all);
    } catch (err) {
      console.log(err);
    }
  };

  // ================= SEARCH (TABLE FILTER) =================
//   const handleSearch = () => {
//     if (!sanctionedOrderNo) {
//       setFilteredActivities(activities);
//       return;
//     }

//     const filtered = activities.filter((a) =>
//       a.sanctionedOrderNo
//         .toLowerCase()
//         .includes(sanctionedOrderNo.toLowerCase())
//     );

//     setFilteredActivities(filtered);
//   };


const handleSearch = () => {
  let filtered = activities;

  // Sanctioned Order filter
  if (sanctionedOrderNo) {
    filtered = filtered.filter((a) =>
      a.sanctionedOrderNo
        .toLowerCase()
        .includes(sanctionedOrderNo.toLowerCase())
    );
  }

  // Financial Year filter
  if (filterFY) {
    filtered = filtered.filter((a) => a.financialYear === filterFY);
  }

  setFilteredActivities(filtered);
};


  // ================= DISBURSE =================
  const handleDisburse = async () => {
    const amount =
      paymentType === "full"
        ? selectedActivity.pendingAmount
        : Number(disburseAmount);

    if (!amount || amount <= 0) {
      alert("Valid amount टाका");
      return;
    }

    if (amount > selectedActivity.pendingAmount) {
      alert("Pending पेक्षा जास्त amount चालणार नाही ❌");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("amountSpent", amount);
      formData.append("activityName", activityName);
formData.append("disburseDate", disburseDate);
      if (billUcUpload) formData.append("billUcUpload", billUcUpload);

      await axiosInstance.put(
        `/revenue/activity/${encodeURIComponent(
          selectedActivity.sanctionedOrderNo
        )}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      // ✅ update table without reload
      const updateFn = (list) =>
        list.map((a) =>
          a._id === selectedActivity._id
            ? {
                ...a,
                amountSpent: a.amountSpent + amount,
                pendingAmount: a.pendingAmount - amount,
              }
            : a
        );

      setActivities(updateFn);
      setFilteredActivities(updateFn);

      setOpenModal(false);
      setDisburseAmount("");
      setBillUcUpload(null);
      setPaymentType("partial");
    } catch (err) {
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  const getFinancialYears = (count = 10) => {
  const years = [];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // Jan = 0

  // April पासून new FY
  const startYear = month >= 3 ? year : year - 1;

  for (let i = 0; i < count; i++) {
    const fyStart = startYear - i;
    const fyEnd = (fyStart + 1).toString().slice(-2);
    years.push(`${fyStart}-${fyEnd}`);
  }

  return years;
};


  return (
    <div className="p-6 bg-gray-50 min-h-full">
      {/* HEADER */}
   

      {/* SEARCH */}
      {/* <div className="bg-white rounded-2xl shadow border p-4 mb-4">
        <div className="flex gap-3">
          <input
            value={sanctionedOrderNo}
            onChange={(e) => setSanctionedOrderNo(e.target.value)}
            placeholder="Sanctioned Order No"
            className="flex-1 px-4 py-2 border rounded-lg"
          />
          <button
            onClick={handleSearch}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg"
          >
            Search
          </button>
        </div>
      </div> */}

      <div className="bg-white rounded-2xl shadow border p-4 mb-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

    {/* 🔍 Sanctioned Order No */}
    <div className="flex gap-3">
      <input
        value={sanctionedOrderNo}
        onChange={(e) => setSanctionedOrderNo(e.target.value)}
        placeholder="Sanctioned Order No"
        className="flex-1 px-4 py-2 border rounded-lg"
      />
      <button
        onClick={handleSearch}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg"
      >
        Search
      </button>
    </div>

    {/* 📅 Financial Year Dropdown */}
    <select
      value={filterFY}
      onChange={(e) => setFilterFY(e.target.value)}
      className="w-full px-4 py-2 border rounded-lg bg-white"
    >
      <option value="">All Financial Years</option>
      {getFinancialYears(10).map((fy) => (
        <option key={fy} value={fy}>
          {fy}
        </option>
      ))}
    </select>

  </div>
</div>


      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow border">
        <div className="w-full overflow-x-auto">
          <table className="min-w-[1000px] w-full text-sm">
            <thead className="bg-gray-50 text-xs uppercase">
              <tr>
                <th className="py-3 textAlign">FY</th>
                <th className="py-3">Sanction No</th>
                <th className="py-3">Sanctioned</th>
                <th className="py-3">Disburse Amt.</th>
                <th className="py-3">Pending</th>
                <th className="py-3">Details</th>
                <th className="py-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredActivities.length ? (
                filteredActivities.map((a) => (
                  <tr key={a._id} className="border-t">
                    <td className="px-4 py-3">{a.financialYear}</td>
                    <td className="px-4 py-3">{a.sanctionedOrderNo}</td>
                    <td className="px-4 py-3">
                      ₹ {a.amountSanctioned.toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 py-3 text-red-600">
                      ₹ {a.amountSpent.toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 py-3 font-semibold text-green-700">
                      ₹ {a.pendingAmount.toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 py-3">
                      {a.vendorBeneficiaryDetails}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        disabled={a.pendingAmount === 0}
                        onClick={() => {
                          setSelectedActivity(a);
                           setActivityName(a.vendorBeneficiaryDetails || "");
                          setDisburseDate(new Date().toISOString().split("T")[0]);
                          setOpenModal(true);
                        }}
                        className="px-3 py-1.5 text-xs rounded-lg bg-green-600 text-white disabled:bg-gray-400"
                      >
                        Disburse
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-6">
                    No record found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {openModal && selectedActivity && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <h2 className="text-lg font-bold mb-3">
              Disburse Amount
            </h2>

            <div className="bg-gray-50 border rounded-xl p-3 mb-3">
              <p className="text-sm">
                <b>Details:</b>{" "}
                {selectedActivity.vendorBeneficiaryDetails}
              </p>
              <p className="text-sm mt-1">
                <b>Pending:</b>{" "}
                ₹{" "}
                {selectedActivity.pendingAmount.toLocaleString(
                  "en-IN"
                )}
              </p>
            </div>
            {/* 🔹 Subject */}
<div className="mb-3">
  <label className="block text-sm font-semibold text-gray-700 mb-1">
    Subject
  </label>
  <input
    type="text"
    value={activityName}
    onChange={(e) => setActivityName(e.target.value)}
    placeholder="Enter subject"
    className="w-full px-4 py-2 border rounded-lg outline-none"
  />
</div>

{/* 🔹 Disburse Date */}
<div className="mb-3">
  <label className="block text-sm font-semibold text-gray-700 mb-1">
    Disburse Date
  </label>
  <input
    type="date"
    value={disburseDate}
    onChange={(e) => setDisburseDate(e.target.value)}
    className="w-full px-4 py-2 border rounded-lg outline-none"
  />
</div>


            {/* Payment Type */}
            <div className="mb-3">
              <label className="block text-sm font-semibold mb-1">
                Payment Type
              </label>
              <div className="flex gap-4 text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={paymentType === "partial"}
                    onChange={() => {
                      setPaymentType("partial");
                      setDisburseAmount("");
                    }}
                  />
                  Partial
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={paymentType === "full"}
                    onChange={() => {
                      setPaymentType("full");
                      setDisburseAmount(
                        selectedActivity.pendingAmount
                      );
                    }}
                  />
                  Full
                </label>
              </div>
            </div>

            {/* Amount */}
            <input
              type="number"
              value={disburseAmount}
              disabled={paymentType === "full"}
              onChange={(e) => setDisburseAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg mb-3"
            />

            {/* Upload */}
            <input
              type="file"
              onChange={(e) =>
                setBillUcUpload(e.target.files?.[0] || null)
              }
              className="mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancel
              </button>

              <button
                onClick={handleDisburse}
                disabled={loading}
                className={`px-4 py-2 rounded-lg text-white ${
                  loading
                    ? "bg-gray-400"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {loading ? "Processing..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
