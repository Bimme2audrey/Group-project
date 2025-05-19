import QRPass from "../components/guest/QRPass";
import { useLocation } from "react-router-dom";

export default function RSVPConfirmation() {
  const location = useLocation();
  const guestName = location.state?.guestName || "Guest";

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 text-center">
          <h2 className="mb-4">🎉 Thank you for RSVPing!</h2>
          <p className="lead">We can't wait to celebrate with you, {guestName}.</p>
          <QRPass guestName={guestName} />
        </div>
      </div>
    </div>
  );
}
