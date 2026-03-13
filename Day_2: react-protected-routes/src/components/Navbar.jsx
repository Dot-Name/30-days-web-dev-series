import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Codezoku</h1>

      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/login" className="hover:text-yellow-300">Login</Link>

        {/* Wrong approach: only hiding link */}
        {isLoggedIn && (
          <Link to="/dashboard" className="hover:text-yellow-300">
            Dashboard
          </Link>
        )}

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;