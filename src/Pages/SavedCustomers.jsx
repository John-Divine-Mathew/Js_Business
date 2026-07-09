import { useMemo, useState } from "react";
import { useCustomers } from "../context/CustomerContext";
import CustomerSearch from "../components/savedCustomers/CustomerSearch";
import CustomerList from "../components/savedCustomers/CustomerList";

export default function SavedCustomers() {
  const { customers, deleteCustomer } = useCustomers();
  const [search, setSearch] = useState("");

  const filteredCustomers = useMemo(() => {
    const query = search.toLowerCase();

    return customers.filter((customer) =>
      customer.name.toLowerCase().includes(query) ||
      customer.phone.includes(query) ||
      customer.location.toLowerCase().includes(query)
    );
  }, [customers, search]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Saved Customers
      </h1>

      <CustomerSearch
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <CustomerList
        customers={filteredCustomers}
        onDelete={deleteCustomer}
      />
    </div>
  );
}