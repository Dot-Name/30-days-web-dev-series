import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center py-20">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[90%] max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Login Page</h2>
        <p className="text-gray-600 mb-6">
          Click the button below to simulate login.
        </p>

        <button
          onClick={handleLogin}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;