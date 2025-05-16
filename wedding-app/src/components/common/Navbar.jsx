import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className={`navbar navbar-expand-lg ${isHome ? "bg-dark" : "bg-dark"} navbar-dark fixed-top px-3`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">
          💍 Mr&Mrs
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/rsvp" className="nav-link">RSVP</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
