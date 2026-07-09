import { useCustomers } from "../../context/CustomerContext";

export default function DashboardTable() {
  const { customers } = useCustomers();

  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full text-sm">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left">S.No</th>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Packets</th>
            <th className="px-4 py-3 text-left">Total</th>
            <th className="px-4 py-3 text-left">Initial</th>
            <th className="px-4 py-3 text-left">Balance</th>
            <th className="px-4 py-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="px-4 py-8 text-center text-gray-500"
              >
                No customers available.
              </td>
            </tr>
          ) : (
            customers.map((customer, index) => (
              <tr
                key={customer.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{customer.name}</td>
                <td className="px-4 py-3">{customer.packets}</td>
                <td className="px-4 py-3">₹{customer.total}</td>
                <td className="px-4 py-3">₹{customer.initialAmount}</td>
                <td className="px-4 py-3">₹{customer.balance}</td>
                <td className="px-4 py-3">
                  {customer.balance === 0 ? (
                    <span className="rounded bg-green-100 px-2 py-1 text-green-700">
                      Paid
                    </span>
                  ) : (
                    <span className="rounded bg-yellow-100 px-2 py-1 text-yellow-700">
                      Pending
                    </span>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}