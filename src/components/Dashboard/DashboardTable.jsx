import { useCustomers } from "../../context/CustomerContext";

export default function DashboardTable() {
  const { customers } = useCustomers();

  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="p-3">S.No</th>
            <th className="p-3">Name</th>
            <th className="p-3">Packets</th>
            <th className="p-3">Total</th>
            <th className="p-3">Paid</th>
            <th className="p-3">Balance</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="p-10 text-center text-gray-500"
              >
                No Customers Found
              </td>
            </tr>
          ) : (
            customers.map((customer, index) => (
              <tr
                key={customer.id}
                className="border-b"
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{customer.name}</td>
                <td className="p-3">{customer.packets}</td>
                <td className="p-3">₹{customer.total}</td>
                <td className="p-3">
                  ₹{customer.initialAmount}
                </td>
                <td className="p-3">
                  ₹{customer.balance}
                </td>
                <td className="p-3">
                  {customer.balance === 0 ? (
                    <span className="rounded bg-green-100 px-2 py-1 text-green-700">
                      Paid
                    </span>
                  ) : (
                    <span className="rounded bg-red-100 px-2 py-1 text-red-700">
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