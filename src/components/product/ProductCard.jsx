import { FaPen, FaTrash } from "react-icons/fa6";

export default function ProductCard({ product }) {
  return (
    <div className="rounded-2xl bg-white shadow p-5">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-lg">
            {product.name}
          </h2>

          <p className="text-green-700 text-xl font-bold mt-2">
            ₹ {product.price}
          </p>

          <span className="text-sm text-gray-500">
            {product.status}
          </span>
        </div>

        <div className="flex gap-3">
          <button className="text-blue-600">
            <FaPen />
          </button>

          <button className="text-red-600">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}