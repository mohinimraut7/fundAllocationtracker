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

  
  const [role, setRole] = useState("");

  useEffect(() => {
    const savedRole = localStorage.getItem("userRole");
    if (savedRole) {
      setRole(savedRole);
    } else {
      
      setRole("Collector Office");
    }
  }, []);

 
  const allocationPercent = role === "Collector Office" ? 3 : 5;

  const todayDate = new Date().toLocaleDateString("en-GB"); 

  
  const fetchLatestRevenue = async () => {
    try {
      setPageLoading(true);

      const res = await fetch("http://localhost:3001/revenue");
      const data = await res.json();

      if (data && data.length > 0) {
        
        const roleWiseData = data.filter((r) => r.role === role);

        if (roleWiseData.length > 0) {
          const latest = roleWiseData[roleWiseData.length - 1];

          setSavedRevenue(latest.totalRevenue);
          setAllocatedAmount(latest.allocatedAmount);
          setSavedDate(latest.date);
          setSavedAttachmentName(latest.attachmentName || null);
        } else {
          
          setSavedRevenue(null);
          setAllocatedAmount(null);
          setSavedDate(null);
          setSavedAttachmentName(null);
        }
      } else {
        setSavedRevenue(null);
        setAllocatedAmount(null);
        setSavedDate(null);
        setSavedAttachmentName(null);
      }
    } catch (error) {
      console.log("GET revenue error:", error);
    } finally {
      setPageLoading(false);
    }
  };

  
  useEffect(() => {
    if (role) fetchLatestRevenue();
  }, [role]);

 
  const handleSave = async () => {
    if (!totalRevenue) {
      alert("Please enter total revenue");
      return;
    }

    if (!attachment) {
      alert("Please attach document ✅");
      return;
    }

    const allocation = (Number(totalRevenue) * allocationPercent) / 100;

    const payload = {
      totalRevenue: Number(totalRevenue),
      allocatedAmount: Number(allocation),
      date: todayDate,
      attachmentName: attachment?.name,
      role, 
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
    
      <div className="bg-white rounded-2xl shadow-sm border p-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Revenue Allocation
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage and allocate total revenue efficiently
            </p>

          
            <p className="text-xs text-gray-500 mt-1">
              Logged Role: <span className="font-semibold">{role || "--"}</span>
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            + Add Revenue
          </button>
        </div>

      
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <div className="px-4 py-2 rounded-full border bg-white text-sm text-gray-600">
            Date: <span className="font-semibold">{savedDate || "--"}</span>
          </div>

          <div className="px-4 py-2 rounded-full border bg-white text-sm text-gray-600">
            Allocation Rule:{" "}
            <span className="font-semibold">{allocationPercent}%</span>
          </div>

          <div className="px-4 py-2 rounded-full border bg-white text-sm text-gray-600">
            Status:{" "}
            <span className="font-semibold">
              {savedRevenue ? "Saved ✅" : "Pending"}
            </span>
          </div>
        </div>
      </div>

    
      <div className="bg-white rounded-2xl shadow-sm border mt-6 overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-base font-semibold text-gray-800">
            Latest Revenue Entry
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Showing last saved revenue record (Role wise)
          </p>
        </div>

       
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="text-left px-6 py-3">Submitted Date</th>
                <th className="text-left px-6 py-3">Total Revenue</th>
                <th className="text-left px-6 py-3">
                  Allocated ({allocationPercent}%)
                </th>
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
                    No revenue added yet for <b>{role}</b>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

   
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
           
              <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border">
                <span className="text-sm text-gray-600">Date</span>
                <span className="text-sm font-semibold text-gray-800">
                  {todayDate}
                </span>
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
                className="px-5 py-2 rounded-xl border text-gray-600 hover:bg-gray--100 transition"
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
