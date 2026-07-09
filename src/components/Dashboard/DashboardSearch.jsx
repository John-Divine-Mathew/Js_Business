export default function DashboardSearch({
  value,
  onChange,
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder="Search Customer..."
      className="w-full rounded-xl border p-4"
    />
  );
}