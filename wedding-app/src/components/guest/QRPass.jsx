import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import { useRef } from "react";

export default function QRPass({ guestName }) {
  const qrRef = useRef();
  const qrValue = `Wedding RSVP • Guest: ${guestName}`;

  const handleDownload = async () => {
    const canvas = await html2canvas(qrRef.current);
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = `RSVP_QR_${guestName}.png`;
    link.click();
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div
            className="shadow p-4 bg-white rounded text-center mx-auto"
            style={{ border: "2px solid #ffc0cb", maxWidth: "100%" }}
            ref={qrRef}
          >
            <h4 className="text-dark mb-3">🎟️ Your Wedding QR Pass</h4>
            <QRCodeCanvas
              value={qrValue}
              size={180}
              fgColor="#000"
              style={{ width: "100%", height: "auto", maxWidth: "200px" }}
            />
            <p className="text-muted mt-3">Show this at the entrance</p>
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-outline-dark" onClick={handleDownload}>
              📥 Download QR Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
