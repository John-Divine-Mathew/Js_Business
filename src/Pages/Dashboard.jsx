import StatCard from "../components/common/StatCard";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <StatCard title="Today's Customers" value="0" />
        <StatCard title="Today's Packages" value="0" />
        <StatCard title="Today's Sales" value="₹0" />
        <StatCard title="Yesterday Sales" value="₹0" />
        <StatCard title="Monthly Sales" value="₹0" />
        <StatCard title="Total Customers" value="0" />
      </div>
    </div>
  );
}