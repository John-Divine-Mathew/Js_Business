import { useState } from "react";

import StatsCards from "../components/dashboard/StatsCards";
import DashboardSearch from "../components/dashboard/DashboardSearch";
import DashboardTable from "../components/dashboard/DashboardTable";

export default function Dashboard() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-6">
      <StatsCards />

      <DashboardSearch
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <DashboardTable />
    </div>
  );
}