import React from "react";
import { Card, CardContent } from "../components/ui/Card";

export default function StatCard({
  title,
  value,
  change = "0%", // default fallback
  icon: Icon,
  active,
  onClick,
}) {
  return (
    <Card
      onClick={onClick}
      className={`cursor-pointer rounded-2xl p-5 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg ${
        active ? "ring-2 ring-blue-500" : ""
      }`}
    >
      <CardContent className="flex justify-between items-center p-0">
        <div>
          <h2 className="text-gray-500 font-medium">{title}</h2>
          <p className="text-xl font-bold text-gray-800">{value}</p>
          <p
            className={`text-sm ${
              change.toString().startsWith("-")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {change}
          </p>
        </div>
        <div className="text-gray-400">
          <Icon size={28} />
        </div>
      </CardContent>
    </Card>
  );
}
