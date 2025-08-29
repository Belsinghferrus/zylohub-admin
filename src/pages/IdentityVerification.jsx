import React, { useState } from "react";
import StatusCard from "../components/StatusCard";
import VerificationChart from "../components/charts/VerificationChart";
import IdentityVerificationUserCard from "../components/IdentityVerificationUserCard";

export default function IdentityVerificationPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const identityUsers = [
    {
      name: "John Doe",
      role: "event staff",
      gender: "male",
      age: 24,
      location: "Chennai",
      rating: 4.5,
      image: "https://i.pravatar.cc/100?img=1",
      verificationStatus: "verified",
    },
    {
      name: "Jane Smith",
      role: "caterer",
      gender: "female",
      age: 28,
      location: "Mumbai",
      rating: 4.8,
      image: "https://i.pravatar.cc/100?img=2",
      verificationStatus: "pending",
    },
    {
      name: "Arjun Kumar",
      role: "usher",
      gender: "male",
      age: 22,
      location: "Bangalore",
      rating: 4.2,
      image: "https://i.pravatar.cc/100?img=3",
      verificationStatus: "verified",
    },
  ];

  // **Filter users dynamically**
  const filteredUsers =
    activeFilter === "All"
      ? identityUsers
      : identityUsers.filter(
          (user) =>
            user.verificationStatus.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800">
        Identity Verification Overview
      </h1>

      {/* Graph Full Width */}
      <div className="w-full bg-white rounded-2xl shadow-md p-4">
        <VerificationChart activeFilter={activeFilter} />
      </div>

      {/* Cards + Button Row */}
      <div className="grid grid-cols-3 gap-6">
        <StatusCard
          title="Pending"
          count={120}
          change={-2.1}
          isActive={activeFilter === "Pending"}
          onClick={() => setActiveFilter("Pending")}
        />
        <StatusCard
          title="Verified"
          count={340}
          change={+12.4}
          isActive={activeFilter === "Verified"}
          onClick={() => setActiveFilter("Verified")}
        />
        <button
          className="bg-white text-blue-600 rounded-xl py-3 font-semibold shadow-md hover:bg-blue-50 transition-all flex items-center justify-center"
          onClick={() => setActiveFilter("All")}
        >
          Show All Data
        </button>
      </div>

      {/* User List Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          {activeFilter === "All"
            ? "All Users"
            : `${activeFilter} Users`}
        </h2>
        <span className="text-sm text-gray-500">
          {filteredUsers.length} result{filteredUsers.length !== 1 && "s"}
        </span>
      </div>

      {/* Filtered Users List */}
      <div className="space-y-3">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <IdentityVerificationUserCard key={index} user={user} />
          ))
        ) : (
          <div className="text-center text-gray-500 py-4">
            No users found for <strong>{activeFilter}</strong> status.
          </div>
        )}
      </div>
    </div>
  );
}
