import CustomerForm from "../components/customer/CustomerForm";

export default function NewCustomer() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        New Customer
      </h1>

      <CustomerForm />
    </div>
  );
}