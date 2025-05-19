import { useState } from "react";

export default function RSVPForm({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    meal: "",
  });

  // 🔀 Simple random table assignment (to be improved with backend)
  const assignRandomSeat = () => {
    const tables = ["1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B"];
    return tables[Math.floor(Math.random() * tables.length)];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGuest = {
      id: crypto.randomUUID(),
      ...formData,
      table: assignRandomSeat(),
    };

    // TODO: Send this to backend API
    console.log("Submitted RSVP:", newGuest);

    if (onSubmitSuccess) {
      onSubmitSuccess(newGuest.name); // or pass full guest if needed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
        />
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
        />
      </div>

      <div className="mb-3">
        <label>Meal Preference</label>
        <select
          className="form-control"
          value={formData.meal}
          onChange={(e) =>
            setFormData({ ...formData, meal: e.target.value })
          }
          required
        >
          <option value="" disabled>
            Select a meal
          </option>
          <option value="Chicken">Chicken</option>
          <option value="Beef">Beef</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
        </select>
      </div>

      <button type="submit" className="btn btn-dark w-100">
        Submit RSVP
      </button>
    </form>
  );
}
