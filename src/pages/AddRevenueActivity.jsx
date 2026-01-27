import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";

export default function AddRevenueActivity() {
  const { revenueId } = useParams();

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

  const todayDate = new Date().toLocaleDateString("en-GB");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

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
      formData.append("vendorBeneficiaryDetails", form.vendorBeneficiaryDetails);
      formData.append("billUcUpload", billUcUpload);

      await axiosInstance.post("/revenue/activity", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Activity saved successfully ✅");

      setForm({
        sanctionedOrderNo: "",
        sanctionedOrderDate: "",
        amountSanctioned: "",
        amountSpent: "",
        vendorBeneficiaryDetails: "",
        billUcUpload: null,
      });
    } catch (error) {
      console.log("Add activity error:", error);
      alert("Failed to save activity ❌");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="bg-white rounded-2xl shadow-sm border p-5">
        <h1 className="text-xl font-bold text-gray-800">
          Add Revenue Activity
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Record sanctioned & spent details for selected revenue
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border mt-6 overflow-hidden max-w-2xl mx-auto">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Activity Details
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Date: {todayDate}
          </p>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <label className="label">Sanctioned Order No</label>
            <input
              name="sanctionedOrderNo"
              value={form.sanctionedOrderNo}
              onChange={handleChange}
              className="input"
              placeholder="Enter order number"
            />
          </div>

          <div>
            <label className="label">Sanctioned Order Date</label>
            <input
              type="date"
              name="sanctionedOrderDate"
              value={form.sanctionedOrderDate}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">Amount Sanctioned (₹)</label>
              <input
                type="number"
                name="amountSanctioned"
                value={form.amountSanctioned}
                onChange={handleChange}
                className="input"
              />
            </div>

            <div>
              <label className="label">Amount Spent (₹)</label>
              <input
                type="number"
                name="amountSpent"
                value={form.amountSpent}
                onChange={handleChange}
                className="input"
              />
            </div>
          </div>

          <div>
            <label className="label">
              Vendor / Beneficiary Details
            </label>
            <textarea
              name="vendorBeneficiaryDetails"
              value={form.vendorBeneficiaryDetails}
              onChange={handleChange}
              className="input h-24"
              placeholder="Vendor / beneficiary information"
            />
          </div>

          <div>
            <label className="label">Bill / UC Upload</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              name="billUcUpload"
              onChange={handleChange}
              className="input bg-white"
            />
          </div>
        </div>

        <div className="px-6 py-4 border-t flex justify-end gap-3">
          <button
            className="px-5 py-2 rounded-xl border text-gray-600 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={loading}
            className={`px-6 py-2 rounded-xl text-white font-semibold ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Saving..." : "Save Activity"}
          </button>
        </div>
      </div>
    </div>
  );
}
