import { useNavigate } from "react-router-dom";
import RSVPForm from "../components/guest/RSVPForm";

export default function GuestRSVP() {
  const navigate = useNavigate();

  const handleRSVPSubmit = (guestName) => {
    navigate("/rsvp-confirmed", { state: { guestName } });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="col-md-6">
        <RSVPForm onSubmitSuccess={handleRSVPSubmit} />
      </div>
    </div>
  );
}
