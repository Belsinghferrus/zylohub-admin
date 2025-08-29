import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const dataSets = {
  weekly: [
    { name: "Mon", Request: 10, Arrived: 5, Confirmed: 3, Completed: 2 },
    { name: "Tue", Request: 12, Arrived: 7, Confirmed: 5, Completed: 4 },
    { name: "Wed", Request: 15, Arrived: 10, Confirmed: 6, Completed: 5 },
    { name: "Thu", Request: 14, Arrived: 9, Confirmed: 7, Completed: 5 },
    { name: "Fri", Request: 18, Arrived: 12, Confirmed: 9, Completed: 8 },
    { name: "Sat", Request: 20, Arrived: 15, Confirmed: 11, Completed: 10 },
    { name: "Sun", Request: 22, Arrived: 17, Confirmed: 13, Completed: 11 },
  ],
  monthly: Array.from({ length: 30 }, (_, i) => ({
    name: `Day ${i + 1}`,
    Request: Math.floor(Math.random() * 30),
    Arrived: Math.floor(Math.random() * 20),
    Confirmed: Math.floor(Math.random() * 15),
    Completed: Math.floor(Math.random() * 10),
  })),
  yearly: Array.from({ length: 12 }, (_, i) => ({
    name: `Month ${i + 1}`,
    Request: Math.floor(Math.random() * 300),
    Arrived: Math.floor(Math.random() * 200),
    Confirmed: Math.floor(Math.random() * 150),
    Completed: Math.floor(Math.random() * 100),
  })),
};

const orderedKeys = ["Request", "Arrived", "Confirmed", "Completed"];
const colors = {
  Request: "#4F46E5",   // Indigo
  Arrived: "#10B981",   // Green
  Confirmed: "#F59E0B", // Amber
  Completed: "#EF4444", // Red
};

export default function RequestsChart({ highlighted }) {
  const [range, setRange] = useState("weekly");

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload) return null;

    const sorted = orderedKeys
      .map((key) => payload.find((p) => p.dataKey === key))
      .filter(Boolean);

    return (
      <div className="bg-white shadow-md rounded-md p-3 text-sm ">
        <p className="font-semibold mb-1">{label}</p>
        {sorted.map((entry) => (
          <div
            key={entry.dataKey}
            className="flex justify-between"
            style={{ color: entry.color }}
          >
            <span>{entry.dataKey}:</span>
            <span className="font-medium">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white shadow rounded-2xl p-6 mt-8">
      {/* Range Selector */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">
          Job Requests Overview
        </h2>
        <div className="space-x-2">
          {["weekly", "monthly", "yearly"].map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                range === r
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dataSets[range]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            {orderedKeys.map((key) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={colors[key]}
                strokeWidth={highlighted === key ? 4 : 2}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-4 mt-4">
        {orderedKeys.map((key) => (
          <div key={key} className="flex items-center gap-1">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: colors[key] }}
            ></span>
            <span className="text-sm text-gray-600">{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
