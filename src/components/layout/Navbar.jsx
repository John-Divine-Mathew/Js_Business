export default function Navbar() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <div>
        <h1 className="font-bold text-2xl">
          JS Business
        </h1>

        <p className="text-sm text-gray-500">
          Daily Customer Supply Register
        </p>
      </div>

      <div className="text-right">
        <p className="font-semibold">
          {new Date().toLocaleDateString()}
        </p>
      </div>
    </header>
  );
}