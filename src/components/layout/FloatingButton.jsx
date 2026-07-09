import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FloatingButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/new-customer")}
      className="fixed bottom-24 right-6 bg-green-600 text-white w-16 h-16 rounded-full shadow-xl hover:scale-105 transition flex items-center justify-center md:hidden"
    >
      <Plus size={28} />
    </button>
  );
}