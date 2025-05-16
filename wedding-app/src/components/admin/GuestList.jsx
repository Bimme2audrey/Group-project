import React from "react";

export default function GuestList({ guests = [] }) {
  return (
    <div className="card p-4 shadow-sm">
      <h3 className="mb-3">Guest List</h3>
      
      {guests.length === 0 ? (
        <p className="text-muted">No guests to display.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>RSVP</th>
                <th>Meal</th>
                <th>Seat/Table</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest, index) => (
                <tr key={index}>
                  <td>{guest.name}</td>
                  <td>
                    <span className={`badge ${guest.rsvp === 'Yes' ? 'bg-success' : 'bg-secondary'}`}>
                      {guest.rsvp}
                    </span>
                  </td>
                  <td>{guest.meal || "N/A"}</td>
                  <td>{guest.seat || "Unassigned"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
