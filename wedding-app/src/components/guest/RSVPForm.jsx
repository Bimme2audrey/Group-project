import { useState } from "react";

export default function RSVPForm() {
  const [code, setCode] = useState("");
  const [meal, setMeal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code || !meal) {
      alert("Please fill in all fields.");
      return;
    }

    // TODO: Replace this with actual API call
    console.log("RSVP Submitted:", { code, meal });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
      <h3 className="mb-3">RSVP to the Wedding</h3>

      <div className="mb-3">
        <label htmlFor="code" className="form-label">Invitation Code</label>
        <input
          type="text"
          className="form-control"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your unique code"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="meal" className="form-label">Meal Preference</label>
        <select
          id="meal"
          className="form-select"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        >
          <option value="">Select one...</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>
      </div>

      <button type="submit" className="btn btn-dark w-100">
        Submit RSVP
      </button>
    </form>
  );
}
