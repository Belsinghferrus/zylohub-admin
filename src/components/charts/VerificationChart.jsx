import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Generate monthly data dynamically for days 1–30
const generateMonthlyData = () =>
  Array.from({ length: 30 }, (_, i) => ({
    name: `Day ${i + 1}`,
    verified: Math.floor(Math.random() * 100) + 50,
    pending: Math.floor(Math.random() * 50) + 20,
  }));

const dataSets = {
  weekly: [
    { name: "Mon", verified: 40, pending: 20 },
    { name: "Tue", verified: 55, pending: 25 },
    { name: "Wed", verified: 60, pending: 30 },
    { name: "Thu", verified: 70, pending: 35 },
    { name: "Fri", verified: 65, pending: 30 },
    { name: "Sat", verified: 80, pending: 40 },
    { name: "Sun", verified: 50, pending: 25 },
  ],
  monthly: generateMonthlyData(),
  yearly: [
    { name: "Jan", verified: 400, pending: 200 },
    { name: "Feb", verified: 420, pending: 220 },
    { name: "Mar", verified: 450, pending: 250 },
    { name: "Apr", verified: 470, pending: 260 },
    { name: "May", verified: 500, pending: 280 },
    { name: "Jun", verified: 530, pending: 300 },
    { name: "Jul", verified: 550, pending: 320 },
    { name: "Aug", verified: 570, pending: 340 },
    { name: "Sep", verified: 600, pending: 360 },
    { name: "Oct", verified: 620, pending: 380 },
    { name: "Nov", verified: 640, pending: 400 },
    { name: "Dec", verified: 660, pending: 420 },
  ],
};

export default function VerificationChart({ activeFilter }) {
  const [range, setRange] = useState("weekly");
  const rawData = dataSets[range];

  // Filter data if a specific status is selected
  const filteredData =
    activeFilter === "All"
      ? rawData
      : rawData.map((item) => ({
          name: item.name,
          [activeFilter.toLowerCase()]: item[activeFilter.toLowerCase()],
        }));

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 h-full flex flex-col">
      {/* Header with Range Toggle */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Verification Report</h2>
        <div className="flex gap-2">
          {["weekly", "monthly", "yearly"].map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                range === r
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={filteredData} barGap={6}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#4b5563" />
          <YAxis stroke="#4b5563" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              color: "#374151",
            }}
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="verifiedGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={1} />
              <stop offset="95%" stopColor="#4338ca" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="pendingGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22d3ee" stopOpacity={1} />
              <stop offset="95%" stopColor="#0891b2" stopOpacity={1} />
            </linearGradient>
          </defs>

          {/* Bars */}
          {(activeFilter === "All" || activeFilter === "Verified") && (
            <Bar
              dataKey="verified"
              fill="url(#verifiedGradient)"
              radius={[6, 6, 0, 0]}
            />
          )}
          {(activeFilter === "All" || activeFilter === "Pending") && (
            <Bar
              dataKey="pending"
              fill="url(#pendingGradient)"
              radius={[6, 6, 0, 0]}
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
