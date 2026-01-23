// // import React, { useState } from "react";

// // export default function RevenueAllocation() {
// //   const [open, setOpen] = useState(false);
// //   const [totalRevenue, setTotalRevenue] = useState("");
// //   const [savedRevenue, setSavedRevenue] = useState(null);
// //   const [allocatedAmount, setAllocatedAmount] = useState(null);
// //   const [savedDate, setSavedDate] = useState(null);

// //   // ✅ Today Date (Modal मध्ये दिसणार)
// //   const todayDate = new Date().toLocaleDateString("en-GB"); // DD/MM/YYYY

// //   const handleSave = () => {
// //     if (!totalRevenue) {
// //       alert("Please enter total revenue");
// //       return;
// //     }

// //     const allocation = (Number(totalRevenue) * 5) / 100;

// //     setSavedRevenue(Number(totalRevenue));
// //     setAllocatedAmount(allocation);

// //     // ✅ Save Date only when submit
// //     setSavedDate(todayDate);

// //     setOpen(false);
// //     setTotalRevenue("");
// //   };

// //   return (
// //     <div className="p-8 bg-gray-50 h-full">
// //       {/* Header */}
// //       <div className="flex items-center justify-between mb-8">
// //         <div>
// //           <h1 className="text-2xl font-bold text-gray-800">
// //             Revenue Allocation
// //           </h1>
// //           <p className="text-sm text-gray-500">
// //             Manage and allocate total revenue efficiently
// //           </p>
// //         </div>

// //         <button
// //           onClick={() => setOpen(true)}
// //           className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-md hover:opacity-90 transition"
// //         >
// //           ➕ Add Revenue
// //         </button>
// //       </div>

// //       {/* Card */}
// //       <div className="bg-white rounded-2xl shadow p-8">
// //         {savedRevenue ? (
// //           <div className="grid md:grid-cols-3 gap-6 text-center">
// //             {/* ✅ Date Only after submit */}
// //             <div>
// //               <p className="text-sm text-gray-500 mb-1">Submitted Date</p>
// //               <p className="text-2xl font-bold text-gray-800">
// //                 {savedDate}
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
// //               <p className="text-2xl font-bold text-gray-800">
// //                 ₹ {savedRevenue.toLocaleString("en-IN")}
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500 mb-1">
// //                 Allocated Amount (5%)
// //               </p>
// //               <p className="text-2xl font-bold text-green-600">
// //                 ₹ {allocatedAmount.toLocaleString("en-IN")}
// //               </p>
// //             </div>
// //           </div>
// //         ) : (
// //           <p className="text-gray-400 text-center">No revenue added yet</p>
// //         )}
// //       </div>

// //       {/* Modal */}
// //       {open && (
// //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
// //           <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl animate-fadeIn">
// //             <h2 className="text-xl font-bold text-gray-800 mb-2">
// //               Add Revenue
// //             </h2>
// //             <p className="text-sm text-gray-500 mb-2">
// //               Enter total revenue amount
// //             </p>

// //             {/* ✅ Date Show in Modal */}
// //             <p className="text-sm text-gray-600 mb-5">
// //               Date: <span className="font-semibold">{todayDate}</span>
// //             </p>

// //             {/* Input */}
// //             <div className="mb-6">
// //               <label className="block text-sm font-medium text-gray-700 mb-1">
// //                 Total Revenue (₹)
// //               </label>
// //               <input
// //                 type="number"
// //                 value={totalRevenue}
// //                 onChange={(e) => setTotalRevenue(e.target.value)}
// //                 placeholder="Enter total revenue"
// //                 className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
// //               />

// //               {totalRevenue && (
// //                 <p className="mt-2 text-sm text-gray-600">
// //                   Allocated (5%):{" "}
// //                   <span className="font-semibold text-green-600">
// //                     ₹{" "}
// //                     {((Number(totalRevenue) * 5) / 100).toLocaleString("en-IN")}
// //                   </span>
// //                 </p>
// //               )}
// //             </div>

// //             {/* Actions */}
// //             <div className="flex justify-end gap-3">
// //               <button
// //                 onClick={() => setOpen(false)}
// //                 className="px-5 py-2 rounded-xl border text-gray-600 hover:bg-gray-100"
// //               >
// //                 Cancel
// //               </button>

// //               <button
// //                 onClick={handleSave}
// //                 className="px-6 py-2 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 shadow"
// //               >
// //                 Save
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // ==============================


// import React, { useEffect, useState } from "react";

// export default function RevenueAllocation() {
//   const [open, setOpen] = useState(false);
//   const [totalRevenue, setTotalRevenue] = useState("");

//   const [savedRevenue, setSavedRevenue] = useState(null);
//   const [allocatedAmount, setAllocatedAmount] = useState(null);
//   const [savedDate, setSavedDate] = useState(null);

//   const [loading, setLoading] = useState(false);
//   const [pageLoading, setPageLoading] = useState(false);

//   const todayDate = new Date().toLocaleDateString("en-GB"); // DD/MM/YYYY

//   // ✅ GET latest revenue on page load
//   const fetchLatestRevenue = async () => {
//     try {
//       setPageLoading(true);

//       const res = await fetch("http://localhost:3001/revenue");
//       const data = await res.json();

//       if (data && data.length > 0) {
//         const latest = data[data.length - 1]; // latest entry

//         setSavedRevenue(latest.totalRevenue);
//         setAllocatedAmount(latest.allocatedAmount);
//         setSavedDate(latest.date);
//       }
//     } catch (error) {
//       console.log("GET revenue error:", error);
//     } finally {
//       setPageLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLatestRevenue();
//   }, []);

//   // ✅ POST Revenue
//   const handleSave = async () => {
//     if (!totalRevenue) {
//       alert("Please enter total revenue");
//       return;
//     }

//     const allocation = (Number(totalRevenue) * 5) / 100;

//     const payload = {
//       totalRevenue: Number(totalRevenue),
//       allocatedAmount: Number(allocation),
//       date: todayDate,
//     };

//     try {
//       setLoading(true);

//       const res = await fetch("http://localhost:3001/addRevenue", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         alert(result?.message || "Something went wrong!");
//         return;
//       }

//       // ✅ UI update from API response
//       setSavedRevenue(result.data.totalRevenue);
//       setAllocatedAmount(result.data.allocatedAmount);
//       setSavedDate(result.data.date);

//       setOpen(false);
//       setTotalRevenue("");
//     } catch (error) {
//       console.log("POST revenue error:", error);
//       alert("Server error! Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-8 bg-gray-50 h-full">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800">
//             Revenue Allocation
//           </h1>
//           <p className="text-sm text-gray-500">
//             Manage and allocate total revenue efficiently
//           </p>
//         </div>

//         <button
//           onClick={() => setOpen(true)}
//           className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-md hover:opacity-90 transition"
//         >
//           ➕ Add Revenue
//         </button>
//       </div>

//       {/* Card */}
//       <div className="bg-white rounded-2xl shadow p-8">
//         {pageLoading ? (
//           <p className="text-center text-gray-500">Loading revenue...</p>
//         ) : savedRevenue ? (
//           <div className="grid md:grid-cols-3 gap-6 text-center">
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Submitted Date</p>
//               <p className="text-2xl font-bold text-gray-800">{savedDate}</p>
//             </div>

//             <div>
//               <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
//               <p className="text-2xl font-bold text-gray-800">
//                 ₹ {Number(savedRevenue).toLocaleString("en-IN")}
//               </p>
//             </div>

//             <div>
//               <p className="text-sm text-gray-500 mb-1">
//                 Allocated Amount (5%)
//               </p>
//               <p className="text-2xl font-bold text-green-600">
//                 ₹ {Number(allocatedAmount).toLocaleString("en-IN")}
//               </p>
//             </div>
//           </div>
//         ) : (
//           <p className="text-gray-400 text-center">No revenue added yet</p>
//         )}
//       </div>

//       {/* Modal */}
//       {open && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl animate-fadeIn">
//             <h2 className="text-xl font-bold text-gray-800 mb-2">
//               Add Revenue
//             </h2>
//             <p className="text-sm text-gray-500 mb-2">
//               Enter total revenue amount
//             </p>

//             {/* Date */}
//             <p className="text-sm text-gray-600 mb-5">
//               Date: <span className="font-semibold">{todayDate}</span>
//             </p>

//             {/* Input */}
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Total Revenue (₹)
//               </label>
//               <input
//                 type="number"
//                 value={totalRevenue}
//                 onChange={(e) => setTotalRevenue(e.target.value)}
//                 placeholder="Enter total revenue"
//                 className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
//               />

//               {totalRevenue && (
//                 <p className="mt-2 text-sm text-gray-600">
//                   Allocated (5%):{" "}
//                   <span className="font-semibold text-green-600">
//                     ₹{" "}
//                     {((Number(totalRevenue) * 5) / 100).toLocaleString("en-IN")}
//                   </span>
//                 </p>
//               )}
//             </div>

//             {/* Actions */}
//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setOpen(false)}
//                 className="px-5 py-2 rounded-xl border text-gray-600 hover:bg-gray-100"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleSave}
//                 disabled={loading}
//                 className={`px-6 py-2 rounded-xl text-white font-semibold shadow ${
//                   loading
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-green-600 hover:bg-green-700"
//                 }`}
//               >
//                 {loading ? "Saving..." : "Save"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// ==========================================



// import React, { useEffect, useState } from "react";

// export default function RevenueAllocation() {
//   const [open, setOpen] = useState(false);
//   const [totalRevenue, setTotalRevenue] = useState("");

//   const [savedRevenue, setSavedRevenue] = useState(null);
//   const [allocatedAmount, setAllocatedAmount] = useState(null);
//   const [savedDate, setSavedDate] = useState(null);

//   const [attachment, setAttachment] = useState(null); // ✅ NEW
//   const [savedAttachmentName, setSavedAttachmentName] = useState(null); // ✅ NEW

//   const [loading, setLoading] = useState(false);
//   const [pageLoading, setPageLoading] = useState(false);

//   const todayDate = new Date().toLocaleDateString("en-GB"); // DD/MM/YYYY

//   // ✅ GET latest revenue on page load
//   const fetchLatestRevenue = async () => {
//     try {
//       setPageLoading(true);

//       const res = await fetch("http://localhost:3001/revenue");
//       const data = await res.json();

//       if (data && data.length > 0) {
//         const latest = data[data.length - 1];

//         setSavedRevenue(latest.totalRevenue);
//         setAllocatedAmount(latest.allocatedAmount);
//         setSavedDate(latest.date);

//         // ✅ attachment show
//         setSavedAttachmentName(latest.attachmentName || null);
//       }
//     } catch (error) {
//       console.log("GET revenue error:", error);
//     } finally {
//       setPageLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLatestRevenue();
//   }, []);

//   // ✅ POST Revenue
//   const handleSave = async () => {
//     if (!totalRevenue) {
//       alert("Please enter total revenue");
//       return;
//     }

//     if (!attachment) {
//       alert("Please attach document ✅");
//       return;
//     }

//     const allocation = (Number(totalRevenue) * 5) / 100;

//     const payload = {
//       totalRevenue: Number(totalRevenue),
//       allocatedAmount: Number(allocation),
//       date: todayDate,

//       // ✅ only name store in JSON server
//       attachmentName: attachment?.name,
//     };

//     try {
//       setLoading(true);

//       const res = await fetch("http://localhost:3001/addRevenue", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         alert(result?.message || "Something went wrong!");
//         return;
//       }

//       // ✅ UI update from API response
//       setSavedRevenue(result.data.totalRevenue);
//       setAllocatedAmount(result.data.allocatedAmount);
//       setSavedDate(result.data.date);
//       setSavedAttachmentName(result.data.attachmentName || null);

//       // ✅ close + reset
//       setOpen(false);
//       setTotalRevenue("");
//       setAttachment(null);
//     } catch (error) {
//       console.log("POST revenue error:", error);
//       alert("Server error! Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-8 bg-gray-50 h-full">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800">
//             Revenue Allocation
//           </h1>
//           <p className="text-sm text-gray-500">
//             Manage and allocate total revenue efficiently
//           </p>
//         </div>

//         <button
//           onClick={() => setOpen(true)}
//           className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-md hover:opacity-90 transition"
//         >
//           ➕ Add Revenue
//         </button>
//       </div>

//       {/* Card */}
//       <div className="bg-white rounded-2xl shadow p-8">
//         {pageLoading ? (
//           <p className="text-center text-gray-500">Loading revenue...</p>
//         ) : savedRevenue ? (
//           <div className="grid md:grid-cols-4 gap-6 text-center">
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Submitted Date</p>
//               <p className="text-2xl font-bold text-gray-800">{savedDate}</p>
//             </div>

//             <div>
//               <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
//               <p className="text-2xl font-bold text-gray-800">
//                 ₹ {Number(savedRevenue).toLocaleString("en-IN")}
//               </p>
//             </div>

//             <div>
//               <p className="text-sm text-gray-500 mb-1">
//                 Allocated Amount (5%)
//               </p>
//               <p className="text-2xl font-bold text-green-600">
//                 ₹ {Number(allocatedAmount).toLocaleString("en-IN")}
//               </p>
//             </div>

//             <div>
//               <p className="text-sm text-gray-500 mb-1">Attachment</p>
//               <p className="text-sm font-semibold text-blue-600 break-words">
//                 {savedAttachmentName || "No Document"}
//               </p>
//             </div>
//           </div>
//         ) : (
//           <p className="text-gray-400 text-center">No revenue added yet</p>
//         )}
//       </div>

//       {/* Modal */}
//       {open && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl animate-fadeIn">
//             <h2 className="text-xl font-bold text-gray-800 mb-2">
//               Add Revenue
//             </h2>
//             <p className="text-sm text-gray-500 mb-2">
//               Enter total revenue amount
//             </p>

//             {/* Date */}
//             <p className="text-sm text-gray-600 mb-5">
//               Date: <span className="font-semibold">{todayDate}</span>
//             </p>

//             {/* Input */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Total Revenue (₹)
//               </label>
//               <input
//                 type="number"
//                 value={totalRevenue}
//                 onChange={(e) => setTotalRevenue(e.target.value)}
//                 placeholder="Enter total revenue"
//                 className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
//               />

//               {totalRevenue && (
//                 <p className="mt-2 text-sm text-gray-600">
//                   Allocated (5%):{" "}
//                   <span className="font-semibold text-green-600">
//                     ₹{" "}
//                     {((Number(totalRevenue) * 5) / 100).toLocaleString("en-IN")}
//                   </span>
//                 </p>
//               )}
//             </div>

//             {/* ✅ Attachment */}
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Attach Document (PDF / Image)
//               </label>

//               <input
//                 type="file"
//                 accept=".pdf,.jpg,.jpeg,.png"
//                 onChange={(e) => setAttachment(e.target.files?.[0] || null)}
//                 className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
//               />

//               {attachment && (
//                 <p className="mt-2 text-sm text-gray-600">
//                   Selected:{" "}
//                   <span className="font-semibold text-blue-600">
//                     {attachment.name}
//                   </span>
//                 </p>
//               )}
//             </div>

//             {/* Actions */}
//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => {
//                   setOpen(false);
//                   setTotalRevenue("");
//                   setAttachment(null);
//                 }}
//                 className="px-5 py-2 rounded-xl border text-gray-600 hover:bg-gray-100"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleSave}
//                 disabled={loading}
//                 className={`px-6 py-2 rounded-xl text-white font-semibold shadow ${
//                   loading
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-green-600 hover:bg-green-700"
//                 }`}
//               >
//                 {loading ? "Saving..." : "Save"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// =============================


import React, { useEffect, useState } from "react";

export default function RevenueAllocation() {
  const [open, setOpen] = useState(false);
  const [totalRevenue, setTotalRevenue] = useState("");

  const [savedRevenue, setSavedRevenue] = useState(null);
  const [allocatedAmount, setAllocatedAmount] = useState(null);
  const [savedDate, setSavedDate] = useState(null);

  const [attachment, setAttachment] = useState(null);
  const [savedAttachmentName, setSavedAttachmentName] = useState(null);

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);

  const todayDate = new Date().toLocaleDateString("en-GB"); // DD/MM/YYYY

  // ✅ GET latest revenue on page load
  const fetchLatestRevenue = async () => {
    try {
      setPageLoading(true);

      const res = await fetch("http://localhost:3001/revenue");
      const data = await res.json();

      if (data && data.length > 0) {
        const latest = data[data.length - 1];

        setSavedRevenue(latest.totalRevenue);
        setAllocatedAmount(latest.allocatedAmount);
        setSavedDate(latest.date);
        setSavedAttachmentName(latest.attachmentName || null);
      }
    } catch (error) {
      console.log("GET revenue error:", error);
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestRevenue();
  }, []);

  // ✅ POST Revenue
  const handleSave = async () => {
    if (!totalRevenue) {
      alert("Please enter total revenue");
      return;
    }

    if (!attachment) {
      alert("Please attach document ✅");
      return;
    }

    const allocation = (Number(totalRevenue) * 5) / 100;

    const payload = {
      totalRevenue: Number(totalRevenue),
      allocatedAmount: Number(allocation),
      date: todayDate,
      attachmentName: attachment?.name,
    };

    try {
      setLoading(true);

      const res = await fetch("http://localhost:3001/addRevenue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result?.message || "Something went wrong!");
        return;
      }

      setSavedRevenue(result.data.totalRevenue);
      setAllocatedAmount(result.data.allocatedAmount);
      setSavedDate(result.data.date);
      setSavedAttachmentName(result.data.attachmentName || null);

      setOpen(false);
      setTotalRevenue("");
      setAttachment(null);
    } catch (error) {
      console.log("POST revenue error:", error);
      alert("Server error! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      {/* ✅ Top Header (Screenshot style) */}
      <div className="bg-white rounded-2xl shadow-sm border p-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Revenue Allocation
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage and allocate total revenue efficiently
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            + Add Revenue
          </button>
        </div>

        {/* ✅ Filter row (like screenshot dropdown filters) */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <div className="px-4 py-2 rounded-full border bg-white text-sm text-gray-600">
            Date: <span className="font-semibold">{savedDate || "--"}</span>
          </div>

          <div className="px-4 py-2 rounded-full border bg-white text-sm text-gray-600">
            Allocation Rule: <span className="font-semibold">5%</span>
          </div>

          <div className="px-4 py-2 rounded-full border bg-white text-sm text-gray-600">
            Status:{" "}
            <span className="font-semibold">
              {savedRevenue ? "Saved ✅" : "Pending"}
            </span>
          </div>
        </div>
      </div>

      {/* ✅ Table Card */}
      <div className="bg-white rounded-2xl shadow-sm border mt-6 overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-base font-semibold text-gray-800">
            Latest Revenue Entry
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Showing last saved revenue record
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="text-left px-6 py-3">Submitted Date</th>
                <th className="text-left px-6 py-3">Total Revenue</th>
                <th className="text-left px-6 py-3">Allocated (5%)</th>
                <th className="text-left px-6 py-3">Document</th>
                <th className="text-right px-6 py-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {pageLoading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-6 text-center text-gray-500">
                    Loading revenue...
                  </td>
                </tr>
              ) : savedRevenue ? (
                <tr className="border-t hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {savedDate}
                  </td>

                  <td className="px-6 py-4 text-gray-700">
                    ₹ {Number(savedRevenue).toLocaleString("en-IN")}
                  </td>

                  <td className="px-6 py-4 font-semibold text-green-600">
                    ₹ {Number(allocatedAmount).toLocaleString("en-IN")}
                  </td>

                  <td className="px-6 py-4 text-blue-600 font-medium">
                    {savedAttachmentName || "No Document"}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <div className="inline-flex items-center gap-2">
                      <button
                        onClick={fetchLatestRevenue}
                        className="px-3 py-1.5 rounded-lg border text-gray-700 hover:bg-gray-100 transition"
                      >
                        Refresh
                      </button>

                      <button
                        onClick={() => setOpen(true)}
                        className="px-4 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                      >
                        Add New
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-gray-400">
                    No revenue added yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ Modal (same functionality but clean design) */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Add Revenue</h2>
                <p className="text-sm text-gray-500">
                  Enter total revenue + attach document
                </p>
              </div>

              <button
                onClick={() => {
                  setOpen(false);
                  setTotalRevenue("");
                  setAttachment(null);
                }}
                className="text-gray-500 hover:text-gray-800 text-xl"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              {/* Date */}
              <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border">
                <span className="text-sm text-gray-600">Date</span>
                <span className="text-sm font-semibold text-gray-800">
                  {todayDate}
                </span>
              </div>

              {/* Revenue Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Total Revenue (₹)
                </label>
                <input
                  type="number"
                  value={totalRevenue}
                  onChange={(e) => setTotalRevenue(e.target.value)}
                  placeholder="Enter total revenue"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />

                {totalRevenue && (
                  <div className="mt-2 px-4 py-3 rounded-xl border bg-blue-50">
                    <p className="text-sm text-gray-700">
                      Allocated (5%):{" "}
                      <span className="font-bold text-green-700">
                        ₹{" "}
                        {((Number(totalRevenue) * 5) / 100).toLocaleString(
                          "en-IN"
                        )}
                      </span>
                    </p>
                  </div>
                )}
              </div>

              {/* Attachment */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Attach Document
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => setAttachment(e.target.files?.[0] || null)}
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                />

                {attachment && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected:{" "}
                    <span className="font-semibold text-blue-600">
                      {attachment.name}
                    </span>
                  </p>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t flex justify-end gap-3">
              <button
                onClick={() => {
                  setOpen(false);
                  setTotalRevenue("");
                  setAttachment(null);
                }}
                className="px-5 py-2 rounded-xl border text-gray-600 hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                disabled={loading}
                className={`px-6 py-2 rounded-xl text-white font-semibold transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Saving..." : "Save Revenue"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
