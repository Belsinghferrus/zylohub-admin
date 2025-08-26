import { RadialBarChart, RadialBar, PolarAngleAxis, Legend } from "recharts";

export default function UsersAnalyticsChart({ data }) {
  const chartData = [
    { name: "All Users", value: data.all, fill: "#22c55e" }, // green
    { name: "Hosters", value: data.hoster, fill: "#ef4444" }, // red
    { name: "Seekers", value: data.seeker, fill: "#8b5cf6" }, // purple
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Analytics</h3>

      <RadialBarChart
        width={230}
        height={250}
        innerRadius="20%"
        outerRadius="90%"
        data={chartData}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar background dataKey="value" cornerRadius={10} />
        <Legend
          iconSize={10}
          layout="horizontal"
          verticalAlign="bottom"
          align="right"
        />
      </RadialBarChart>

      <p className="text-xs text-gray-500 text-center mt-2">
        User distribution across all categories
      </p>
    </div>
  );
}
