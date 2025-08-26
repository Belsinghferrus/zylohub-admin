import React, { useState } from "react";
import StatCard from "../components/StatCard";
import StatsChart from "../components/charts/StatsChart";
import { Activity, ClipboardList, Loader, CheckCircle } from "lucide-react";

export default function Jobs() {
  const [highlighted, setHighlighted] = useState(null);

  const stats = [
    { title: "Active", value: "120", change: "+12%", icon: Activity },
    { title: "Request", value: "80", change: "-5%", icon: ClipboardList },
    { title: "Progress", value: "60", change: "+3%", icon: Loader },
    { title: "Completed", value: "200", change: "+20%", icon: CheckCircle },
  ];

  return (
    <div className="p-6">
      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            {...stat}
            active={highlighted === stat.title}
            onClick={() =>
              setHighlighted(highlighted === stat.title ? null : stat.title)
            }
          />
        ))}
      </div>

      {/* Chart */}
      <StatsChart highlighted={highlighted} />
    </div>
  );
}
