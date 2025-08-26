import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dataSets = {
  weekly: [
    { name: "Mon", Active: 20, Request: 15, Progress: 25, Completed: 10 },
    { name: "Tue", Active: 30, Request: 18, Progress: 20, Completed: 12 },
    { name: "Wed", Active: 25, Request: 22, Progress: 30, Completed: 18 },
    { name: "Thu", Active: 28, Request: 20, Progress: 22, Completed: 16 },
    { name: "Fri", Active: 35, Request: 25, Progress: 28, Completed: 20 },
    { name: "Sat", Active: 32, Request: 27, Progress: 30, Completed: 22 },
    { name: "Sun", Active: 40, Request: 30, Progress: 35, Completed: 25 },
  ],
  monthly: Array.from({ length: 30 }, (_, i) => ({
    name: `Day ${i + 1}`,
    Active: Math.floor(Math.random() * 50),
    Request: Math.floor(Math.random() * 40),
    Progress: Math.floor(Math.random() * 60),
    Completed: Math.floor(Math.random() * 30),
  })),
  yearly: Array.from({ length: 12 }, (_, i) => ({
    name: `Month ${i + 1}`,
    Active: Math.floor(Math.random() * 400),
    Request: Math.floor(Math.random() * 300),
    Progress: Math.floor(Math.random() * 500),
    Completed: Math.floor(Math.random() * 250),
  })),
};

const colors = {
  Active: "#4F46E5", // Indigo
  Request: "#F59E0B", // Amber
  Progress: "#10B981", // Green
  Completed: "#EF4444", // Red
};

export default function StatsChart({ highlighted }) {
  const [range, setRange] = useState("weekly");

  return (
    <div className="bg-white shadow rounded-2xl p-6 mt-8">
      {/* Range Selector */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Jobs Overview</h2>
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
            <Tooltip />
            <Legend />
            {Object.keys(colors).map((key) => (
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
        {Object.entries(colors).map(([label, color]) => (
          <div key={label} className="flex items-center gap-1">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            ></span>
            <span className="text-sm text-gray-600">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
