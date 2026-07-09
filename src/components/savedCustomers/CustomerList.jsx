import CustomerCard from "./CustomerCard";

export default function CustomerList({
  customers,
  onDelete,
}) {
  if (customers.length === 0) {
    return (
      <div className="rounded-xl bg-white p-8 text-center shadow">
        No customers found.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}