import { FiSearch, FiBell } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { sidebarOptions } from "../config/sidebarConfig";

export default function Navbar() {
  const location = useLocation();

  // Normalize and match either exact or child path
  const normalizedPath = location.pathname.replace(/\/$/, "");
  const currentRoute =
    sidebarOptions.find(
      (item) =>
        normalizedPath === item.path ||
        normalizedPath.startsWith(item.path)
    ) || sidebarOptions[0];

  const Icon = currentRoute?.icon;

  return (
    <header className="h-16 px-6 flex items-center justify-between border-b border-gray-200 bg-white shadow-sm">
      {/* Page title + icon */}
      <div className="flex items-center gap-2 text-gray-700">
        {Icon ? <Icon size={20} className="text-blue-600" /> : null}
        <h2 className="text-xl font-semibold">
          {currentRoute?.name || "Dashboard"}
        </h2>
      </div>

      {/* Right side: Search + Notifications + Profile */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative w-64 max-w-[40vw]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <FiSearch className="absolute left-3 top-3.5 text-gray-600" />
        </div>

        {/* Notifications */}
        <button className="relative text-gray-600 hover:text-gray-800">
          <FiBell size={20} />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            9+
          </span>
        </button>

        {/* Profile Image */}
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="h-10 w-10 rounded-full border-2 border-green-500"
        />
      </div>
    </header>
  );
}
