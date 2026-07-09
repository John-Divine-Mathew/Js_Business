import CustomerForm from "../components/customer/CustomerForm";
import CustomerList from "../components/customer/CustomerList";
import SearchBar from "../components/customer/SearchBar";

export default function Customers() {
  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Customers
        </h1>

        <p className="text-gray-500">
          Daily Customer Register
        </p>

      </div>

      <SearchBar />

      <CustomerForm />

      <CustomerList />

    </div>
  );
}