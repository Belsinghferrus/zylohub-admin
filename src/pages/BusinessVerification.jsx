import React, { useState } from "react";
import StatusCard from "../components/StatusCard";
import VerificationChart from "../components/charts/VerificationChart";
import BusinessVerificationUserCard from "../components/BusinessVerificationUserCard";

export default function BusinessVerification() {
  const [activeFilter, setActiveFilter] = useState("All");

  const businessUsers = [
    {
      name: "EventCorp Pvt Ltd",
      businessType: "Event Organizer",
      location: "Delhi",
      rating: 4.7,
      image: "https://i.pravatar.cc/100?img=5",
      verificationStatus: "verified",
    },
    {
      name: "FreshCaterers",
      businessType: "Catering Services",
      location: "Mumbai",
      rating: 4.2,
      image: "https://i.pravatar.cc/100?img=6",
      verificationStatus: "pending",
    },
    {
      name: "StageWorks",
      businessType: "Stage & Decor",
      location: "Bangalore",
      rating: 4.5,
      image: "https://i.pravatar.cc/100?img=7",
      verificationStatus: "verified",
    },
  ];

  const filteredUsers =
    activeFilter === "All"
      ? businessUsers
      : businessUsers.filter(
          (user) =>
            user.verificationStatus.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800">
        Business Verification Overview
      </h1>

      {/* Chart Section */}
      <div className="w-full bg-white rounded-2xl shadow-md p-4">
        <VerificationChart activeFilter={activeFilter} />
      </div>

      {/* Filter Buttons */}
      <div className="grid grid-cols-3 gap-6">
        <StatusCard
          title="Pending"
          count={filteredUsers.filter((u) => u.verificationStatus === "pending").length}
          change={-1.8}
          isActive={activeFilter === "Pending"}
          onClick={() => setActiveFilter("Pending")}
        />
        <StatusCard
          title="Verified"
          count={filteredUsers.filter((u) => u.verificationStatus === "verified").length}
          change={+8.4}
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

      {/* Section Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          {activeFilter === "All"
            ? "All Businesses"
            : `${activeFilter} Businesses`}
        </h2>
        <span className="text-sm text-gray-500">
          {filteredUsers.length} result{filteredUsers.length !== 1 && "s"}
        </span>
      </div>

      {/* User Cards */}
      <div className="space-y-3">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <BusinessVerificationUserCard key={index} user={user} />
          ))
        ) : (
          <div className="text-center text-gray-500 py-4">
            No businesses found for <strong>{activeFilter}</strong> status.
          </div>
        )}
      </div>
    </div>
  );
}
