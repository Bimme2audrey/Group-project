import GuestList from "../components/admin/GuestList";

const dummyGuests = [
  { name: "Sarah Johnson", rsvp: "Yes", meal: "Vegan", seat: "Table 3, Seat 2" },
  { name: "Mike Taylor", rsvp: "No", meal: "", seat: "" },
  { name: "Lola Ade", rsvp: "Yes", meal: "Non-Vegetarian", seat: "Table 5, Seat 4" },
];

export default function AdminDashboard() {
  return (
    <div className="container py-5">
      <GuestList guests={dummyGuests} />
    </div>
  );
}
