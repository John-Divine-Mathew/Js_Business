import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import BottomNav from "../components/layout/BottomNavigation";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 pb-24 md:pb-6">
          <Outlet />
        </main>

        <BottomNav />
      </div>
    </div>
  );
}