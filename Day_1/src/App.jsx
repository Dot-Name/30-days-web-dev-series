import {useState} from 'react'
import Navbar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';


const App = ()=> {
  const [page, setPage] = useState("login");
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {page === "login" && <Login goDashboard={() => setPage("dashboard")} />}
      {page === "dashboard" && <Dashboard />}
    </div>
  )
}

export default App
