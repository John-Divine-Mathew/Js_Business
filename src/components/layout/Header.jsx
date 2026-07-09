export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            JS Business
          </h2>

          <p className="text-sm text-gray-500">
            Daily Customer Supply Management
          </p>
        </div>

        <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
          J
        </div>
      </div>
    </header>
  );
}