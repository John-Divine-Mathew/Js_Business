import {
  LayoutDashboard,
  Users,
  FileBarChart2,
  Settings
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
  {
    path: "/",
    label: "Home",
    icon: LayoutDashboard
  },
  {
    path: "/saved-customers",
    label: "Customers",
    icon: Users
  },
  {
    path: "/reports",
    label: "Reports",
    icon: FileBarChart2
  },
  {
    path: "/settings",
    label: "Settings",
    icon: Settings
  }
];

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden flex justify-around py-3">
      {menus.map((menu) => {
        const Icon = menu.icon;

        return (
          <NavLink
            key={menu.path}
            to={menu.path}
            className="flex flex-col items-center text-sm"
          >
            <Icon size={20} />
            {menu.label}
          </NavLink>
        );
      })}
    </div>
  );
}