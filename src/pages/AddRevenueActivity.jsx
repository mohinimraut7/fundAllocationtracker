import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";

export default function AddRevenueActivity() {
  const { revenueId } = useParams();
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    sanctionedOrderNo: "",
    sanctionedOrderDate: "",
    amountSanctioned: "",
    amountSpent: "",
    vendorBeneficiaryDetails: "",
    billUcUpload: null,
  });

  const [leftoverAmount, setLeftoverAmount] = useState(0);

  const todayDate = new Date().toLocaleDateString("en-GB");

  // ---------- Auto Calculate Leftover ----------
  useEffect(() => {
    const sanctioned = Number(form.amountSanctioned || 0);
    const spent = Number(form.amountSpent || 0);

    if (sanctioned && spent) {
      const left = sanctioned - spent;
      setLeftoverAmount(left >= 0 ? left : 0);
    } else {
      setLeftoverAmount(0);
    }
  }, [form.amountSanctioned, form.amountSpent]);

  // ---------- Handle Input Change ----------
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const isOverSpent = Number(form.amountSpent) > Number(form.amountSanctioned);

  // ---------- Save Handler ----------
  const handleSave = async () => {
    const {
      sanctionedOrderNo,
      sanctionedOrderDate,
      amountSanctioned,
      amountSpent,
      billUcUpload,
    } = form;

    if (
      !sanctionedOrderNo ||
      !sanctionedOrderDate ||
      !amountSanctioned ||
      !amountSpent
    ) {
      alert("Please fill all required fields ❌");
      return;
    }

    if (Number(amountSpent) > Number(amountSanctioned)) {
      alert("Amount Spent cannot exceed Amount Sanctioned ❌");
      return;
    }

    if (!billUcUpload) {
      alert("Please upload Bill / UC document ✅");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("revenueId", revenueId);
      formData.append("sanctionedOrderNo", sanctionedOrderNo);
      formData.append("sanctionedOrderDate", sanctionedOrderDate);
      formData.append("amountSanctioned", amountSanctioned);
      formData.append("amountSpent", amountSpent);
      formData.append(
        "vendorBeneficiaryDetails",
        form.vendorBeneficiaryDetails,
      );
      formData.append("billUcUpload", billUcUpload);
      formData.append("leftoverAmount", leftoverAmount);

      await axiosInstance.post("/revenue/addActivity", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Activity saved successfully ✅");
      navigate("/revenue-allocation");
    } catch (error) {
      alert("Failed to save activity ❌");
    } finally {
      setLoading(false);
    }
  };

  // ================= UI =================

  return (
    <div className="p-6 bg-gray-50 min-h-full relative">
      {/* ================= PAGE HEADER ================= */}
      <div className="bg-white rounded-2xl shadow-sm border p-5">
        <h1 className="text-xl font-bold text-gray-800">Revenue Activity</h1>
        <p className="text-sm text-gray-500 mt-1">
          Add sanctioned & expenditure details
        </p>
      </div>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 px-4 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center py-10">
            <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl max-h-[90vh] flex flex-col">
              {/* HEADER */}
              <div className="px-6 py-4 border-b flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Add Revenue Activity
                  </h2>
                  <p className="text-sm text-gray-500">
                    Record sanctioned & spent details
                  </p>
                </div>

                <button
                  onClick={() => navigate(-1)}
                  className="text-gray-500 hover:text-gray-800 text-xl"
                >
                  ✕
                </button>
              </div>

              {/* BODY (SCROLLABLE) */}
              <div className="p-6 space-y-5 overflow-y-auto flex-1">
                <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border">
                  <span className="text-sm text-gray-600">Date</span>
                  <span className="text-sm font-semibold text-gray-800">
                    {todayDate}
                  </span>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Sanctioned Order No
                  </label>
                  <input
                    name="sanctionedOrderNo"
                    value={form.sanctionedOrderNo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-xl outline-none"
                    placeholder="Enter order number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Sanctioned Order Date
                  </label>
                  <input
                    type="date"
                    name="sanctionedOrderDate"
                    value={form.sanctionedOrderDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-xl outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Amount Sanctioned */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Amount Sanctioned (₹)
                    </label>
                    <input
                      type="number"
                      name="amountSanctioned"
                      value={form.amountSanctioned}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-xl outline-none"
                      min="0"
                    />
                  </div>

                  {/* Amount Spent */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Amount Spent (₹)
                    </label>
                    <input
                      type="number"
                      name="amountSpent"
                      value={form.amountSpent}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-xl outline-none"
                      min="0"
                    />
                  </div>

                  {/* Leftover Amount */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Leftover Amount (₹)
                    </label>
                    <input
                      type="number"
                      value={leftoverAmount}
                      readOnly
                      className="w-full px-4 py-3 border rounded-xl outline-none bg-gray-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Vendor / Beneficiary Details
                  </label>
                  <textarea
                    name="vendorBeneficiaryDetails"
                    value={form.vendorBeneficiaryDetails}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-xl outline-none h-24"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Bill / UC Upload
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    name="billUcUpload"
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-xl bg-white"
                  />
                </div>
              </div>

              {/* FOOTER */}
              <div className="px-6 py-4 border-t flex justify-end gap-3">
                <button
                  onClick={() => navigate(-1)}
                  className="px-5 py-2 rounded-xl border text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSave}
                  disabled={loading || isOverSpent}
                  className={`px-6 py-2 rounded-xl text-white font-semibold ${
                    loading || isOverSpent
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {loading ? "Saving..." : "Save Activity"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* ======================================== */}
    </div>
  );
}
