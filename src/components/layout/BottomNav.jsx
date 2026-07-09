import { NavLink } from "react-router-dom";
import {
  FaHouse,
  FaUsers,
  FaBoxOpen,
  FaChartColumn,
} from "react-icons/fa6";

const menus = [
  {
    path: "/",
    icon: <FaHouse />,
    name: "Home",
  },
  {
    path: "/customers",
    icon: <FaUsers />,
    name: "Customers",
  },
  {
    path: "/products",
    icon: <FaBoxOpen />,
    name: "Products",
  },
  {
    path: "/reports",
    icon: <FaChartColumn />,
    name: "Reports",
  },
];

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t flex justify-around py-3">
      {menus.map((menu) => (
        <NavLink
          key={menu.path}
          to={menu.path}
          className={({ isActive }) =>
            `flex flex-col items-center text-sm ${
              isActive ? "text-green-600" : "text-gray-500"
            }`
          }
        >
          <div className="text-xl">{menu.icon}</div>
          <span>{menu.name}</span>
        </NavLink>
      ))}
    </div>
  );
}