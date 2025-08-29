import React from "react";
import clsx from "clsx";

export default function StatusCard({ title, count, change, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "flex flex-col justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 shadow-md",
        "hover:scale-[1.03] hover:shadow-lg",
        isActive
          ? "bg-blue-600 text-white"
          : "bg-white text-gray-800 hover:bg-blue-50"
      )}
    >
      {/* Title */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {/* Count and Change in One Row */}
      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold">{count}</p>
        <span
          className={clsx(
            "text-xl font-semibold",
            change > 0 ? "text-green-500" : "text-red-500",
            isActive && "text-white"
          )}
        >
          {change > 0 ? `+${change}%` : `${change}%`}
        </span>
      </div>
    </div>
  );
}
