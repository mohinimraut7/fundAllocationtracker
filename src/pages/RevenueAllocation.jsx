// import React, { useState } from "react";

// export default function RevenueAllocation() {
//   const [open, setOpen] = useState(false);
//   const [totalRevenue, setTotalRevenue] = useState("");

//   const handleSave = () => {
//     if (!totalRevenue) {
//       alert("Please enter total revenue");
//       return;
//     }

//     console.log("Total Revenue:", totalRevenue);
//     setOpen(false);
//     setTotalRevenue("");
//   };

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
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
//       <div className="bg-white rounded-2xl shadow p-8 text-center text-gray-400">
//         No revenue added yet
//       </div>

//       {/* Modal */}
//       {open && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl animate-fadeIn">
//             <h2 className="text-xl font-bold text-gray-800 mb-2">
//               Add Revenue
//             </h2>
//             <p className="text-sm text-gray-500 mb-5">
//               Enter total revenue amount
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
//                 className="px-6 py-2 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 shadow"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }






import React, { useState } from "react";

export default function RevenueAllocation() {
  const [open, setOpen] = useState(false);
  const [totalRevenue, setTotalRevenue] = useState("");
  const [savedRevenue, setSavedRevenue] = useState(null);
  const [allocatedAmount, setAllocatedAmount] = useState(null);

  const handleSave = () => {
    if (!totalRevenue) {
      alert("Please enter total revenue");
      return;
    }

    const allocation = (Number(totalRevenue) * 5) / 100;

    setSavedRevenue(Number(totalRevenue));
    setAllocatedAmount(allocation);

    setOpen(false);
    setTotalRevenue("");
  };

  return (
    // <div className="p-8 bg-gray-50 min-h-screen">
    <div className="p-8 bg-gray-50 h-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Revenue Allocation
          </h1>
          <p className="text-sm text-gray-500">
            Manage and allocate total revenue efficiently
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-md hover:opacity-90 transition"
        >
          ➕ Add Revenue
        </button>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow p-8">
        {savedRevenue ? (
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-800">
                ₹ {savedRevenue.toLocaleString("en-IN")}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">
                Allocated Amount (5%)
              </p>
              <p className="text-2xl font-bold text-green-600">
                ₹ {allocatedAmount.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-gray-400 text-center">
            No revenue added yet
          </p>
        )}
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl animate-fadeIn">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Add Revenue
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              Enter total revenue amount
            </p>

            {/* Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Revenue (₹)
              </label>
              <input
                type="number"
                value={totalRevenue}
                onChange={(e) => setTotalRevenue(e.target.value)}
                placeholder="Enter total revenue"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />

              {totalRevenue && (
                <p className="mt-2 text-sm text-gray-600">
                  Allocated (5%):{" "}
                  <span className="font-semibold text-green-600">
                    ₹ {((Number(totalRevenue) * 5) / 100).toLocaleString("en-IN")}
                  </span>
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2 rounded-xl border text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="px-6 py-2 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 shadow"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
