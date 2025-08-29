import { useState, useRef, useEffect } from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebarOptions } from "../config/sidebarConfig";
import useAuthStore from "../store/useAuthStore";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Normalize current path (remove query, hash, and trailing slash)
  const normalizedPath = location.pathname
    .split("?")[0]
    .split("#")[0]
    .replace(/\/$/, "");

  // Sort routes by path length for better specificity
  const sortedRoutes = [...sidebarOptions].sort(
    (a, b) => b.path.length - a.path.length
  );

  // Find the best-matching route
  const currentRoute =
    sortedRoutes.find((item) => normalizedPath.startsWith(item.path)) ||
    sidebarOptions[0];

  const Icon = currentRoute?.icon;

  // Debugging logs
  // console.log("Current Path:", normalizedPath);
  // console.log("Matched Route:", currentRoute);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="h-16 px-6 flex items-center justify-between border-b border-gray-200 bg-white shadow-sm">
      {/* Page title + icon */}
      <div className="flex items-center gap-2 text-gray-700">
        {Icon ? <Icon size={20} className="text-blue-600" /> : null}
        <h2 className="text-xl font-semibold">
          {currentRoute?.name || "Dashboard"}
        </h2>
      </div>

      {/* Right side: Search + Settings + Profile */}
      <div className="flex items-center gap-4 relative">
        {/* Search Bar */}
        <div className="relative w-64 max-w-[40vw]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <FiSearch className="absolute left-3 top-3.5 text-gray-600" />
        </div>

        {/* Settings Icon */}
        <button className="text-gray-600 hover:text-gray-800">
          <FiSettings size={20} />
        </button>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="h-10 w-10 rounded-full border-2 border-green-500 cursor-pointer"
            onClick={() => setDropdownOpen((prev) => !prev)}
          />

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setDropdownOpen(false);
                  navigate("/dashboard/profile");
                }}
              >
                Profile
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
