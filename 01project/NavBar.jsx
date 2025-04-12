// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ setShowBedAvailability }) {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li><button onClick={() => setShowBedAvailability(false)}>Home</button></li>
        <li><button onClick={() => setShowBedAvailability(true)}>Bed Availability</button></li>
        {/* Add other nav items here */}
      </ul>
    </nav>
  );
}

export default NavBar;

