import { useState } from "react";
import UsersReportHeader from "../components/UsersReportHeader";
import UsersFilter from "../components/UsersFilter";
import UsersList from "../components/UsersList";
import UsersAnalyticsChart from "../components/charts/UsersAnalyticsChart";
import UsersReportChart from "../components/charts/UsersReportChart";

export default function Users() {
  const [filter, setFilter] = useState("all");

  const users = [
    { id: 1, name: "John Doe", role: "hoster", gender: "male", age: 32, location: "Chennai", rating: 4.5, image: "https://i.pravatar.cc/100?img=1" },
    { id: 2, name: "Jane Smith", role: "seeker", gender: "female", age: 27, location: "Mumbai", rating: 4.2, image: "https://i.pravatar.cc/100?img=2" },
    { id: 3, name: "Mike Johnson", role: "hoster", gender: "male", age: 40, location: "Delhi", rating: 4.8, image: "https://i.pravatar.cc/100?img=3" },
  ];

  const filteredUsers = filter === "all" ? users : users.filter((u) => u.role === filter);

  const total = users.length;
  const hosters = users.filter((u) => u.role === "hoster").length;
  const seekers = users.filter((u) => u.role === "seeker").length;

  const analyticsData = {
    all: Math.round((total / total) * 100),
    hoster: Math.round((hosters / total) * 100),
    seeker: Math.round((seekers / total) * 100),
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <UsersReportHeader />

      {/* Report Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
        <UsersReportChart />
      </div>

      {/* List & Analytics Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Users List Section */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 space-y-4 lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-800">Users List</h2>
          <UsersFilter filter={filter} setFilter={setFilter} />
          <UsersList users={filteredUsers} />
        </div>

        {/* Analytics Chart Section */}
        <UsersAnalyticsChart data={analyticsData} />
      </div>
    </div>
  );
}
