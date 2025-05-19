import { useState, useRef } from "react";
import "./Dashboard.css";


const initialGuests = [
  { name: "Bimme A.", email: "bimme@example.com", status: "Pending", meal: "Chicken", table: "5A" },
  { name: "Anne K.", email: "anne@example.com", status: "Pending", meal: "Vegan", table: "" },
  { name: "Ange L.", email: "ange@example.com", status: "Confirmed", meal: "Fish", table: "3B" },
  { name: "Carol T.", email: "carole@example.com", status: "Confirmed", meal: "Beef", table: "" },
  { name: "Dieudonne M.", email: "dee@example.com", status: "Confirmed", meal: "Vegan", table: "4B" },
];

export default function AdminDashboard() {
  const [guests, setGuests] = useState(initialGuests);
  const [search, setSearch] = useState("");
  const [editingGuest, setEditingGuest] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const modalRef = useRef();

  const total = guests.length;
  const confirmed = guests.filter((g) => g.status === "Confirmed").length;
  const pending = total - confirmed;

  const filteredGuests = guests.filter((g) =>
    g.name.toLowerCase().includes(search.toLowerCase()) || g.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (index) => {
    if (window.confirm("Delete this guest?")) {
      const updated = [...guests];
      updated.splice(index, 1);
      setGuests(updated);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditingGuest({ ...guests[index] });
    const modal = new window.bootstrap.Modal(modalRef.current);
    modal.show();
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingGuest((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = () => {
    const updated = [...guests];
    updated[editIndex] = editingGuest;
    setGuests(updated);
    const modal = window.bootstrap.Modal.getInstance(modalRef.current);
    modal.hide();
  };

  return (
    <div className="container py-5">
      <h2 className="mb-5 text-center">💍 Wedding Admin Dashboard</h2>

      {/* Stats */}
      <div className="row g-4 mb-5">
        {/* Responsive columns */}
        <div className="col-12 col-md-4">
          <StatCard title="Total Guests" count={total} color="success" />
        </div>
        <div className="col-12 col-md-4">
          <StatCard title="RSVPs Received" count={confirmed} color="primary" />
        </div>
        <div className="col-12 col-md-4">
          <StatCard title="Pending" count={pending} color="warning" />
        </div>
      </div>

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="card shadow">
        <div className="card-header bg-light"><h5>📋 Guest List</h5></div>
        <div className="table-responsive">
          <table className="table table-striped mb-0">
            <thead className="table-light">
              <tr>
                <th>Name</th><th>Email</th><th>Status</th><th>Meal</th><th>Table</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredGuests.map((guest, index) => (
                <tr key={index}>
                  <td>{guest.name}</td>
                  <td>{guest.email}</td>
                  <td><span className={`badge ${guest.status === "Confirmed" ? "bg-success" : "bg-warning text-dark"}`}>{guest.status}</span></td>
                  <td><span className={`badge ${guest.meal === "Vegan" ? "bg-success" : "bg-info text-dark"}`}>{guest.meal}</span></td>
                  <td>{guest.table || "—"}</td>
                  <td>
                    {/* Smaller buttons for mobile */}
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(index)}>✏️</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(index)}>🗑️</button>
                  </td>
                </tr>
              ))}
              {filteredGuests.length === 0 && (
                <tr><td colSpan="6" className="text-center text-muted py-4">No guests found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      <div className="modal fade" ref={modalRef} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Guest</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {editingGuest && (
                <>
                  <input type="text" name="name" className="form-control mb-2" placeholder="Name" value={editingGuest.name} onChange={handleEditChange} />
                  <input type="email" name="email" className="form-control mb-2" placeholder="Email" value={editingGuest.email} onChange={handleEditChange} />
                  <select name="status" className="form-select mb-2" value={editingGuest.status} onChange={handleEditChange}>
                    <option>Confirmed</option>
                    <option>Pending</option>
                  </select>
                  <select name="meal" className="form-select mb-2" value={editingGuest.meal} onChange={handleEditChange}>
                    <option>Chicken</option>
                    <option>Vegan</option>
                    <option>Fish</option>
                    <option>Beef</option>
                  </select>
                  <input type="text" name="table" className="form-control mb-2" placeholder="Table" value={editingGuest.table} onChange={handleEditChange} />
                </>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button className="btn btn-primary" onClick={handleSaveEdit}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// StatCard component stays the same
function StatCard({ title, count, color }) {
  return (
    <div className={`card border-${color} shadow text-center`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className={`display-6 text-${color} fw-bold`}>{count}</p>
      </div>
    </div>
  );
}
