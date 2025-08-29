import React from "react";
import { Star } from "lucide-react";

export default function IdentityVerificationUserCard({ user }) {
  const statusColors = {
    verified: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="flex items-center bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition">
      {/* Profile Image */}
      <img
        src={user.image}
        alt={user.name}
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* User Info */}
      <div className="flex flex-1 items-center ml-4">
        {/* Name & Role */}
        <div className="flex flex-col min-w-[120px]">
          <span className="font-semibold text-gray-800">{user.name}</span>
          <span className="text-sm text-gray-500 capitalize">{user.role}</span>
        </div>

        {/* Gender & Age */}
        <div className="ml-6 flex flex-col items-start min-w-[80px]">
          <span className="text-sm text-gray-600 capitalize">{user.gender}</span>
          <span className="text-sm text-gray-500">{user.age} yrs</span>
        </div>

        {/* Location + Verification Status */}
        <div className="ml-6 flex items-center gap-3 min-w-[180px]">
          <span className="text-sm text-gray-600">{user.location}</span>
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full capitalize mx-auto  ${
              statusColors[user.verificationStatus] || "bg-gray-100 text-gray-600"
            }`}
          >
            {user.verificationStatus}
          </span>
        </div>

        {/* Rating */}
        <div className="ml-6 flex items-center text-yellow-500 font-medium min-w-[80px]">
          <span className="mr-1">{user.rating}/5</span>
          <Star size={16} fill="currentColor" />
        </div>
      </div>
    </div>
  );
}
