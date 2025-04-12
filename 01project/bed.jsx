import React from 'react';
import { Bed } from "lucide-react";

// Main Component
export default function Component() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Bed Availability</h2>
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-4">
        <BedStatus icon="black" count={120} label="Total Beds" />
        <BedStatus icon="green" count={80} label="Available Beds" />
        <BedStatus icon="red" count={40} label="Occupied Beds" />
      </div>
    </div>
  );
}

// BedStatus Component
function BedStatus({ icon, count, label }) {
  return (
    <div className="flex flex-col items-center">
      <Bed className={`w-12 h-12 mb-2 ${getIconColor(icon)}`} />
      <span className="text-4xl font-bold mb-1">{count}</span>
      <span className="text-gray-600 text-center">{label}</span>
    </div>
  );
}

// Utility function for icon color
function getIconColor(icon) {
  switch (icon) {
    case "black":
      return "text-gray-900";
    case "green":
      return "text-green-500";
    case "red":
      return "text-red-500";
    default:
      return "text-gray-900";
  }
}
