export default function ProductForm() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 space-y-5">

      <input
        className="w-full border rounded-xl p-4"
        placeholder="Product Name"
      />

      <input
        type="number"
        className="w-full border rounded-xl p-4"
        placeholder="Price"
      />

      <select
        className="w-full border rounded-xl p-4"
      >
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <button
        className="w-full rounded-xl bg-green-600 text-white p-4"
      >
        Save Product
      </button>

    </div>
  );
}