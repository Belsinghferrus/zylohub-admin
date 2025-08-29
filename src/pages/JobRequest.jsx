import React, { useState } from "react";
import StatCard from "../components/StatCard";
import RequestsChart from "../components/charts/RequestsChart";
import { Send, MapPin, CheckCircle, Loader } from "lucide-react";

export default function JobRequests() {
  const [highlighted, setHighlighted] = useState(null);

  const cards = [
    { title: "Request", value: "120", change: "+12%", icon: Send },
    { title: "Arrived", value: "80", change: "-2%", icon: MapPin },
    { title: "Confirmed", value: "60", change: "+5", icon: Loader },
    { title: "Completed", value: "50", change: "+2%", icon: CheckCircle },
  ];

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {cards.map((card) => (
          <StatCard
            key={card.title}
            title={card.title}
            value={card.value}
            change={card.change}
            icon={card.icon}
            isActive={highlighted === card.title}
            onClick={() => setHighlighted(card.title)}
          />
        ))}
      </div>

      {/* Chart */}
      <RequestsChart highlighted={highlighted} />
    </div>
  );
}
