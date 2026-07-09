function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">
        <div className="text-center">
        

          <h1 className="text-3xl font-bold text-blue-700">
            JS Business
          </h1>

          <p className="text-gray-500 mt-3">
            Daily Customer Supply Management System
          </p>

          <div className="mt-8 rounded-xl bg-green-100 p-4">
            <p className="font-semibold text-green-700">
              Tailwind CSS Successfully Installed ✅
            </p>
          </div>

          <button
            className="mt-8 w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Start Managing Customers
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;