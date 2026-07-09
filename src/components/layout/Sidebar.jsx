import { NavLink } from "react-router-dom";
import {
  FaHouse,
  FaUsers,
  FaCalendarDays,
  FaChartColumn,
  FaGear,
  FaUser,
} from "react-icons/fa6";

const menus = [
  { name: "Dashboard", icon: <FaHouse />, path: "/" },
  { name: "Customers", icon: <FaUsers />, path: "/customers" },
  { name: "Calendar", icon: <FaCalendarDays />, path: "/calendar" },
  { name: "Reports", icon: <FaChartColumn />, path: "/reports" },
  { name: "Settings", icon: <FaGear />, path: "/settings" },
  { name: "Profile", icon: <FaUser />, path: "/profile" },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 flex-col">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-green-700">
          🌾 JS Business
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Daily Supply Register
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-green-100"
              }`
            }
          >
            {menu.icon}
            <span>{menu.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}