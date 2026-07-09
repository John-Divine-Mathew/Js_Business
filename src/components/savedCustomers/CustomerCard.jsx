import { Phone, MessageCircle, Pencil, Trash2 } from "lucide-react";

export default function CustomerCard({ customer, onDelete }) {
  const whatsappLink = `https://wa.me/91${customer.phone}`;

  return (
    <div className="rounded-2xl bg-white p-5 shadow-md space-y-3">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">{customer.name}</h2>
          <p className="text-gray-500">{customer.location}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm ${
            Number(customer.balance) === 0
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {Number(customer.balance) === 0 ? "Paid" : "Pending"}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <p><strong>Phone:</strong> {customer.phone}</p>
        <p><strong>Packets:</strong> {customer.packets}</p>
        <p><strong>Total:</strong> ₹{customer.total}</p>
        <p><strong>Balance:</strong> ₹{customer.balance}</p>
      </div>

      <div className="flex gap-2 pt-2">
        <a
          href={`tel:${customer.phone}`}
          className="flex-1 rounded-lg bg-blue-500 py-2 text-center text-white"
        >
          <Phone className="mx-auto" size={18} />
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-lg bg-green-500 py-2 text-center text-white"
        >
          <MessageCircle className="mx-auto" size={18} />
        </a>

        <button
          className="flex-1 rounded-lg bg-yellow-500 py-2 text-white"
        >
          <Pencil className="mx-auto" size={18} />
        </button>

        <button
          onClick={() => onDelete(customer.id)}
          className="flex-1 rounded-lg bg-red-500 py-2 text-white"
        >
          <Trash2 className="mx-auto" size={18} />
        </button>
      </div>
    </div>
  );
}   