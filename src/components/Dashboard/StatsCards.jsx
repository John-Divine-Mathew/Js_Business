export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white shadow rounded-xl p-4">
        <h3 className="text-gray-500">Customers</h3>
        <p className="text-2xl font-bold">0</p>
      </div>

      <div className="bg-white shadow rounded-xl p-4">
        <h3 className="text-gray-500">Sales</h3>
        <p className="text-2xl font-bold">₹0</p>
      </div>

      <div className="bg-white shadow rounded-xl p-4">
        <h3 className="text-gray-500">Pending</h3>
        <p className="text-2xl font-bold">₹0</p>
      </div>

      <div className="bg-white shadow rounded-xl p-4">
        <h3 className="text-gray-500">Packets</h3>
        <p className="text-2xl font-bold">0</p>
      </div>
    </div>
  );
}