function Home() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[90%] max-w-xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Home Page</h2>
        <p className="text-gray-600">
          This is a public page. Anyone can visit this page.
        </p>
      </div>
    </div>
  );
}

export default Home;