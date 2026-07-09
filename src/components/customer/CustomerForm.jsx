import { useState } from "react";

const products = [
  {
    name: "Idli Flour 1 Kg",
    price: 50,
  },
  {
    name: "Idli Flour 2 Kg",
    price: 100,
  },
  {
    name: "Dosa Flour 1 Kg",
    price: 55,
  },
];

export default function CustomerForm() {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    village: "",
    product: "",
    packages: "",
    price: "",
    total: "",
    deliveryDate: today,
  });

  const handleProduct = (e) => {
    const product = products.find(
      (p) => p.name === e.target.value
    );

    setForm({
      ...form,
      product: product.name,
      price: product.price,
      total: product.price * (form.packages || 0),
    });
  };

  const handlePackages = (e) => {
    const qty = Number(e.target.value);

    setForm({
      ...form,
      packages: qty,
      total: qty * form.price,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow p-5 space-y-4">

      <input
        placeholder="Customer Name"
        className="w-full border rounded-xl p-4"
      />

      <input
        placeholder="Phone Number"
        className="w-full border rounded-xl p-4"
      />

      <input
        placeholder="Village"
        className="w-full border rounded-xl p-4"
      />

      <select
        onChange={handleProduct}
        className="w-full border rounded-xl p-4"
      >
        <option>Select Product</option>

        {products.map((p) => (
          <option key={p.name}>
            {p.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Packages"
        onChange={handlePackages}
        className="w-full border rounded-xl p-4"
      />

      <input
        value={form.price}
        readOnly
        className="w-full border rounded-xl p-4 bg-gray-100"
      />

      <input
        value={form.total}
        readOnly
        className="w-full border rounded-xl p-4 bg-green-100 font-bold"
      />

      <input
        type="date"
        defaultValue={today}
        className="w-full border rounded-xl p-4"
      />

      <button className="w-full rounded-xl bg-green-600 text-white p-4 text-lg font-semibold">
        Save Customer
      </button>

    </div>
  );
}