import { createContext, useContext, useEffect, useState } from "react";

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [customers, setCustomers] = useState(() => {
    const saved = localStorage.getItem("js_business_customers");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "js_business_customers",
      JSON.stringify(customers)
    );
  }, [customers]);

  const addCustomer = (customer) => {
    const newCustomer = {
      id: Date.now(),
      ...customer,
      createdAt: new Date().toISOString(),
    };

    setCustomers((prev) => [newCustomer, ...prev]);
  };

  const updateCustomer = (id, updatedData) => {
    setCustomers((prev) =>
      prev.map((customer) =>
        customer.id === id
          ? { ...customer, ...updatedData }
          : customer
      )
    );
  };

  const deleteCustomer = (id) => {
    setCustomers((prev) =>
      prev.filter((customer) => customer.id !== id)
    );
  };

  return (
    <CustomerContext.Provider
      value={{
        customers,
        addCustomer,
        updateCustomer,
        deleteCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomers() {
  return useContext(CustomerContext);
}