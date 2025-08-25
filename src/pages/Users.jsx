import { useState } from "react";
import UsersReportChart from "../components/charts/UsersReportChart";
import { useUserReportStore } from "../store/userReportStore";

export default function Users() {
  const { view, setView } = useUserReportStore();
  const [open, setOpen] = useState(false);

  const options = ["weekly", "monthly", "yearly"];

  const toggleDropdown = () => setOpen(!open);
  const handleSelect = (option) => {
    setView(option);
    setOpen(false);
  };

  return (
    <div className="p-6 space-y-6 shadow-md">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Users Report</h1>

        {/* Dropdown Button */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            {view.charAt(0).toUpperCase() + view.slice(1)} ▼
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-md border border-gray-200 z-50">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 ${
                    view === option ? "font-semibold text-indigo-600" : ""
                  }`}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <UsersReportChart />
    </div>
  );
}
