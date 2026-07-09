import CustomerForm from "../components/customer/CustomerForm";

export default function NewCustomer() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          New Customer
        </h1>

        <p className="text-gray-500">
          Add today's customer details
        </p>
      </div>

      <CustomerForm />
    </div>
  );
}
export default NewCustomer;