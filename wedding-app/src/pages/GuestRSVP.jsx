import RSVPForm from "../components/guest/RSVPForm";

export default function GuestRSVP() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="col-md-6">
        <RSVPForm />
      </div>
    </div>
  );
}
