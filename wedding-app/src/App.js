import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import GuestRSVP from "./pages/GuestRSVP";
import AdminDashboard from "./pages/AdminDashboard";
import RSVPConfirmation from "./pages/RSVPConfirmation";

function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<GuestRSVP />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/rsvp-confirmed" element={<RSVPConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
