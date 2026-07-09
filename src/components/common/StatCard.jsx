export default function StatCard({
  title,
  value,
}) {
  return (
    <div className="rounded-2xl bg-white shadow-md p-5">
      <h3 className="text-gray-500">
        {title}
      </h3>

      <p className="text-3xl font-bold text-green-700 mt-3">
        {value}
      </p>
    </div>
  );
}