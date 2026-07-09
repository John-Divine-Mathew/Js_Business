import DashboardTable from "../components/dashboard/DashboardTable";
import { useCustomers } from "../context/CustomerContext";

export default function Dashboard() {
  const { customers } = useCustomers();

  const totalCustomers = customers.length;

  const totalSales = customers.reduce(
    (sum, customer) => sum + Number(customer.total || 0),
    0
  );

  const pendingAmount = customers.reduce(
    (sum, customer) => sum + Number(customer.balance || 0),
    0
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow">
          <h2 className="text-gray-500">Customers</h2>
          <p className="mt-2 text-3xl font-bold">{totalCustomers}</p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow">
          <h2 className="text-gray-500">Total Sales</h2>
          <p className="mt-2 text-3xl font-bold text-green-600">
            ₹{totalSales}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow">
          <h2 className="text-gray-500">Pending</h2>
          <p className="mt-2 text-3xl font-bold text-red-600">
            ₹{pendingAmount}
          </p>
        </div>
      </div>

      <DashboardTable />
    </div>
  );
}