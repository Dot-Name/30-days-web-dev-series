function Dashboard() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[90%] max-w-xl text-center border-l-8 border-blue-600">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h2>
        <p className="text-gray-600">
          This page should only be visible after login.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;