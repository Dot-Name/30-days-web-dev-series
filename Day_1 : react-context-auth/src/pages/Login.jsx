// import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
function Login({goDashboard}){

    // const [user, setUser] = useState(null);
    const { login } = useAuth();

    const handleLogin = () => {
        login();
        goDashboard();
    }
    return(
        <div className="flex justify-center items-center h-[80vh]">
            <div className="bg-white p-8 shadow-lg rounded w-80">
                <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
                <button onClick={handleLogin} className="bg-blue-600 text-white  py-2 rounded w-full">Login as John Doe</button>
            </div>
        </div>
    )
}

export default Login;