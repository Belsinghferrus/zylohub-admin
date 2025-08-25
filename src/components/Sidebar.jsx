import { NavLink, useLocation } from "react-router-dom";
import { sidebarOptions } from "../config/sidebarConfig";

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white h-screen border-r border-gray-200 p-4">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Admin Panel</h1>

      <nav className="flex flex-col gap-2">
        {sidebarOptions.map((item) => {
          const Icon = item.icon;
          const isRoot = item.path === "/dashboard";

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={isRoot}
              className={({ isActive }) =>
                [
                  "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-blue-100",
                ].join(" ")
              }
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
