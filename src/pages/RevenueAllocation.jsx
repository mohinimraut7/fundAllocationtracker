

import React, { useEffect, useState } from "react";
import axiosInstance from "../services/axiosInstance";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function RevenueAllocation() {
  const [open, setOpen] = useState(false);
  const [totalRevenue, setTotalRevenue] = useState("");

  const [savedRevenue, setSavedRevenue] = useState(null);
  const [allocatedAmount, setAllocatedAmount] = useState(null);
  const [savedDate, setSavedDate] = useState(null);

  const [attachment, setAttachment] = useState(null);
  const [savedAttachmentName, setSavedAttachmentName] = useState(null);
  const [savedAttachmentUrl, setSavedAttachmentUrl] = useState(null);

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);

  const [role, setRole] = useState("");
  const [latestRevenueId, setLatestRevenueId] = useState(null);
  const [financialYear, setFinancialYear] = useState("");
const [savedFinancialYear, setSavedFinancialYear] = useState(null);

  const navigate = useNavigate();


  useEffect(() => {
    const savedRole = localStorage.getItem("userRole");
    setRole(savedRole || "Collector Office");
  }, []);

  const allocationPercent =
    role === "Collector Office" ? 3 : role === "Grampanchayat" ? 10 : 5;

  const todayDate = new Date().toLocaleDateString("en-GB");

  const userrole = localStorage.getItem("userRole") || user?.role;



  const fetchLatestRevenue = async () => {
    try {
      setPageLoading(true);
      const res = await axiosInstance.get("/revenue");
      const data = Array.isArray(res.data) ? res.data : res.data?.data;

      if (data?.length) {
        // const roleWiseData = data.filter((r) => r.role === role);
          const roleWiseData = data
          .filter((r) => r.role === role)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          if (roleWiseData.length) {
          const latest = roleWiseData[0];
          setLatestRevenueId(latest._id);
          setSavedRevenue(latest.totalRevenue);
          setAllocatedAmount(latest.allocatedAmount);
          // setSavedDate(latest.date);
          setSavedFinancialYear(latest.financialYear);

          setSavedAttachmentName(latest.attachmentName);
          setSavedAttachmentUrl(latest.attachmentUrl);
          return;
        }
      }

      setSavedRevenue(null);
      setAllocatedAmount(null);
      // setSavedDate(null);
      setSavedFinancialYear(null);

      setSavedAttachmentName(null);
      setSavedAttachmentUrl(null);
      setLatestRevenueId(null);
    } catch (err) {
      console.log("GET revenue error:", err);
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    if (role) fetchLatestRevenue();
  }, [role]);

  const handleSave = async () => {
    if (!financialYear) {
  return alert("Please select Financial Year");
}

    if (!totalRevenue) return alert("Please enter total revenue");
    if (!attachment) return alert("Please attach document ✅");

    const allocation = (Number(totalRevenue) * allocationPercent) / 100;

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("totalRevenue", totalRevenue);
      formData.append("allocatedAmount", allocation);
      // formData.append("date", todayDate);
      formData.append("financialYear", financialYear);
      formData.append("role", role);
      formData.append("attachment", attachment);

      const res = await axiosInstance.post("/addRevenue", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (!res.data?.success) {
        alert(res.data?.message || "Something went wrong");
        return;
      }

      const d = res.data.data;
      setSavedRevenue(d.totalRevenue);
      setAllocatedAmount(d.allocatedAmount);
      setSavedFinancialYear(d.financialYear); // ✅ FIX
      setSavedDate(d.date);
      setSavedAttachmentName(d.attachmentName);
      setSavedAttachmentUrl(d.attachmentUrl);
      setLatestRevenueId(d._id);

      setOpen(false);
      setTotalRevenue("");
      setAttachment(null);
    } catch (err) {
      alert("Server error! Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const getFinancialYears = (count = 10) => {
  const years = [];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0 = Jan

  // April (3) नंतर असेल तर current FY चालू
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
      <div className="bg-white rounded-2xl shadow-sm border p-5">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Revenue Allocation
            </h1>
            <p className="text-xs text-gray-500">
              Logged Role: <b>{role}</b>
            </p>
          </div>

         {userrole !== "Super Admin" && (
          <button
            onClick={() => setOpen(true)}
            className="px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold"
          >
            + Add Revenue
          </button>
          )}
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border mt-6 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-xs uppercase">
            <tr>
              {/* <th className="px-6 py-3 text-left">Date</th> */}
              <th className="px-6 py-3 text-left">Financial Year</th>

              <th className="px-6 py-3 text-left">Total</th>
              <th className="px-6 py-3 text-left">
                Allocated ({allocationPercent}%)
              </th>
              <th className="px-6 py-3 text-left">Document</th>
               <th className="px-6 py-3 text-left">Action</th> {/* ✅ NEW */}
            </tr>
          </thead>

          <tbody>
            {pageLoading ? (
              <tr>
                <td colSpan="4" className="px-6 py-6 text-center">
                  Loading...
                </td>
              </tr>
            ) : savedRevenue ? (
              <tr className="border-t" 
  
              >
                {/* <td className="px-6 py-4">{savedDate}</td> */}

                <td className="px-6 py-4 font-semibold">
  {savedFinancialYear}
</td>

                <td className="px-6 py-4">
                  ₹ {Number(savedRevenue).toLocaleString("en-IN")}
                </td>
                <td className="px-6 py-4 font-semibold">
                  
                    ₹ {Number(allocatedAmount).toLocaleString("en-IN")}
                
                </td>
                <td className="px-6 py-4">
                  <a
                    href={`http://localhost:5000${savedAttachmentUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {savedAttachmentName}
                  </a>
                </td>
                 <td className="px-6 py-4">
    <button
      className="px-4 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition"
  //                 onClick={() =>
  //   navigate(`/revenue/${latestRevenueId}/activity`)
  // }


onClick={() =>
  navigate(`/revenue/${latestRevenueId}/activity`, {
    state: {
      financialYear: savedFinancialYear,
    },
  })
}


    >
      View / Add Activity
    </button>
  </td>
              </tr>
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-6 text-center">
                  No revenue found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden">
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

            <div className="p-6 space-y-5">
              {/* <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border">
                <span className="text-sm text-gray-600">Date</span>
                <span className="text-sm font-semibold text-gray-800">
                  {todayDate}
                </span>
              </div> */}

              <div>
  <label className="block text-sm font-semibold text-gray-700 mb-1">
    Financial Year
  </label>

  <select
    value={financialYear}
    onChange={(e) => setFinancialYear(e.target.value)}
    className="w-full px-4 py-3 border rounded-xl outline-none bg-white"
  >
    <option value="">Select Financial Year</option>

    {getFinancialYears(10).map((fy) => (
      <option key={fy} value={fy}>
        {fy}
      </option>
    ))}
  </select>
</div>


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
                      Allocated ({allocationPercent}%):{" "}
                      <span className="font-bold text-green-700">
                        ₹{" "}
                        {(
                          (Number(totalRevenue) * allocationPercent) /
                          100
                        ).toLocaleString("en-IN")}
                      </span>
                    </p>
                  </div>
                )}
              </div>

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
      {/* ======================================== */}
    </div>
  );
}


