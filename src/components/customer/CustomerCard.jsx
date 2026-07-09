export default function CustomerCard({ customer }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5">

      <h2 className="font-bold text-xl">
        {customer.customerName}
      </h2>

      <p>{customer.phone}</p>

      <p>{customer.village}</p>

      <p>{customer.product}</p>

      <p>Packages : {customer.packages}</p>

      <p className="font-bold text-green-700 mt-2">
        ₹ {customer.total}
      </p>

    </div>
  );
}