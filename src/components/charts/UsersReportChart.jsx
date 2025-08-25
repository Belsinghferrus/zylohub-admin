import { useUserReportStore } from "../../store/userReportStore";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function UsersReportChart() {
  const { view } = useUserReportStore();

  // Example mock data (replace with API data when ready)
  const data = {
    weekly: [
      { name: "Mon", users: 20 },
      { name: "Tue", users: 35 },
      { name: "Wed", users: 30 },
      { name: "Thu", users: 50 },
      { name: "Fri", users: 40 },
      { name: "Sat", users: 60 },
      { name: "Sun", users: 55 },
    ],
    monthly: [
      { name: "Week 1", users: 150 },
      { name: "Week 2", users: 200 },
      { name: "Week 3", users: 180 },
      { name: "Week 4", users: 220 },
    ],
    yearly: [
      { name: "Jan", users: 800 },
      { name: "Feb", users: 950 },
      { name: "Mar", users: 1000 },
      { name: "Apr", users: 1200 },
      { name: "May", users: 1500 },
      { name: "Jun", users: 1700 },
      { name: "Jul", users: 1600 },
      { name: "Aug", users: 1800 },
      { name: "Sep", users: 1900 },
      { name: "Oct", users: 2000 },
      { name: "Nov", users: 2100 },
      { name: "Dec", users: 2300 },
    ],
  };

  const chartData = data[view];

  return (
    <div className="bg-white rounded-xl  p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Users Report ({view})
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#374151" />
          <YAxis stroke="#374151" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              color: "#111827",
            }}
          />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#2563eb" /* Bright blue line */
            strokeWidth={2.5}
            dot={{ r: 4, fill: "#2563eb" }}
            activeDot={{ r: 6, fill: "#1d4ed8" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
