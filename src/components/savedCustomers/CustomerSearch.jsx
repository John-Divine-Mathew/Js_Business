export default function CustomerSearch({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search by Name, Phone or Village..."
      className="w-full rounded-xl border border-gray-300 p-4 focus:border-green-500 focus:outline-none"
    />
  );
}