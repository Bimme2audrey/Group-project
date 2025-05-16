import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import GuestRSVP from "./pages/GuestRSVP";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar /> {/* This stays fixed and styled independently */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<GuestRSVP />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
