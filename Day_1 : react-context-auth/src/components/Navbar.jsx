// import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

function Navbar() {
    const { user, logout } = useAuth();
    return(
        <nav className="flex justify-between items-center px-8 py-4 bg-blue-600 text-white">
            <h1 className="text-xl font-bold">CodeNest LMS</h1>

            {user ? (
                <div className="flex items-center gap-4">
                    <span>Welcome, {user.name}!</span>
                    <button className="bg-white text-blue-600 px-4 py-2 rounded" onClick={logout}>
                        Logout
                    </button>
                </div>
            ): (
                <button className="bg-white text-blue-600 px-4 py-2 rounded">Login</button>
            )}
        </nav>
    )
}

export default Navbar;