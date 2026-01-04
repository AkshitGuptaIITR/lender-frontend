import { useState } from "react";
import type { LenderFormData } from "../types";
import { cn } from "@/lib/utils";

export function LenderForm() {
  const [formData, setFormData] = useState<LenderFormData>({
    business_name: "",
    geographic_location: "",
    industry_type: "",
    revenue: 0,
    equipment_type: "",
    business_duration: 0,
    paynet_score: 0,
    personal_guarantor_name: "",
    fico_score: 0,
    trade_lines: 0,
    credit_history_flags: "",
    loan_amount: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Here you would typically send data to backend
    alert("Application Submitted! Check console for data.");
  };

  const inputClasses =
    "mt-1 block w-full rounded-md border-gray-300 bg-white/50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3 backdrop-blur-sm transition-all duration-200 hover:bg-white/80";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 tracking-tight">
            Loan Application
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please fill in the details below to process your request.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/50 p-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Business Details Section */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-medium leading-6 text-gray-900 border-b border-gray-200 pb-2 mb-4">
                Business Information
              </h3>
            </div>

            <div>
              <label htmlFor="business_name" className={labelClasses}>
                Business Name
              </label>
              <input
                type="text"
                name="business_name"
                id="business_name"
                value={formData.business_name}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="industry_type" className={labelClasses}>
                Industry Type
              </label>
              <input
                type="text"
                name="industry_type"
                id="industry_type"
                value={formData.industry_type}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="geographic_location" className={labelClasses}>
                Location
              </label>
              <input
                type="text"
                name="geographic_location"
                id="geographic_location"
                value={formData.geographic_location}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="business_duration" className={labelClasses}>
                Duration (Years)
              </label>
              <input
                type="number"
                name="business_duration"
                id="business_duration"
                value={formData.business_duration}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="revenue" className={labelClasses}>
                Annual Revenue
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="revenue"
                  id="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  className={cn(inputClasses, "pl-7")}
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-medium leading-6 text-gray-900 border-b border-gray-200 pb-2 mb-4 mt-4">
                Loan Details
              </h3>
            </div>

            <div>
              <label htmlFor="equipment_type" className={labelClasses}>
                Equipment Type
              </label>
              <input
                type="text"
                name="equipment_type"
                id="equipment_type"
                value={formData.equipment_type}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="loan_amount" className={labelClasses}>
                Loan Amount
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="loan_amount"
                  id="loan_amount"
                  value={formData.loan_amount}
                  onChange={handleChange}
                  className={cn(inputClasses, "pl-7")}
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-medium leading-6 text-gray-900 border-b border-gray-200 pb-2 mb-4 mt-4">
                Credit Information
              </h3>
            </div>

            <div>
              <label htmlFor="personal_guarantor_name" className={labelClasses}>
                Guarantor Name
              </label>
              <input
                type="text"
                name="personal_guarantor_name"
                id="personal_guarantor_name"
                value={formData.personal_guarantor_name}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="fico_score" className={labelClasses}>
                FICO Score
              </label>
              <input
                type="number"
                name="fico_score"
                id="fico_score"
                value={formData.fico_score}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="paynet_score" className={labelClasses}>
                PayNet Score
              </label>
              <input
                type="number"
                name="paynet_score"
                id="paynet_score"
                value={formData.paynet_score}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="trade_lines" className={labelClasses}>
                Trade Lines
              </label>
              <input
                type="number"
                name="trade_lines"
                id="trade_lines"
                value={formData.trade_lines}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="credit_history_flags" className={labelClasses}>
                Credit Flags
              </label>
              <input
                type="text"
                name="credit_history_flags"
                id="credit_history_flags"
                value={formData.credit_history_flags}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div className="md:col-span-2 pt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
