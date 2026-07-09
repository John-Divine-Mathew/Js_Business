import {
  LayoutDashboard,
  UserPlus,
  Users,
  CalendarDays,
  FileBarChart2,
  Settings
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard
  },
  {
    title: "New Customer",
    path: "/new-customer",
    icon: UserPlus
  },
  {
    title: "Saved Customers",
    path: "/saved-customers",
    icon: Users
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: CalendarDays
  },
  {
    title: "Reports",
    path: "/reports",
    icon: FileBarChart2
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings
  }
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 bg-green-700 text-white min-h-screen flex-col">
      <div className="p-6 text-2xl font-bold border-b border-green-600">
        🌾 JS Business
      </div>

      <nav className="flex-1 p-3 space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-white text-green-700 font-semibold"
                    : "hover:bg-green-600"
                }`
              }
            >
              <Icon size={20} />
              {menu.title}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
export default Sidebar;