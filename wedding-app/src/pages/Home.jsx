import { Link } from "react-router-dom";
import { useEffect } from "react";
import FloatingHearts from "../components/common/FloatingHearts";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: false, duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section position-relative text-white d-flex justify-content-center align-items-center">
        <FloatingHearts />
        <div className="container text-center position-relative" style={{ zIndex: 10, paddingTop: "100px" }}>
          <h1 className="display-4 fw-bold" data-aos="fade-down">
            You're Invited 
          </h1>
          <p className="lead mt-3" data-aos="fade-up" data-aos-delay="300">
            Mr & Mrs • August 16th, 2025 <br />
            Villa Rosa Gardens, Yaoundé, Cameroon
          </p>
          <div className="mt-4 d-flex justify-content-center gap-3" data-aos="zoom-in" data-aos-delay="600">
            <Link to="/rsvp" className="btn btn-light btn-lg">RSVP Now</Link>
          </div>
        </div>
      </section>

      {/* Wavy Divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" fill="#212529" />
        </svg>
      </div>

      {/* Our Story */}
      <section className="py-5 bg-dark text-white text-center" data-aos="fade-up">
        <div className="container">
          <h2 className="mb-4">Our Story</h2>
          <p className="lead">
            From the first glance to forever — our love story began with laughter
            and grew with grace. Join us as we take the next step into forever together 💖
          </p>
        </div>
      </section>

      {/* Wavy Divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,100 C480,0 960,100 1440,0 L1440,100 L0,100 Z" fill="#FFF7EC" />
        </svg>
      </div>

    {/* Captured Moments */}
<section className="py-5 bg-light text-dark text-center" data-aos="fade-right">
  <div className="container">
    <h2 className="mb-4">Captured Moments</h2>
    <div className="row">
      {[
        "https://images.unsplash.com/photo-1460978812857-470ed1c77af0",
        "https://images.unsplash.com/photo-1525258706463-a8c77635beb1",
        "https://images.unsplash.com/photo-1542598688-76ad90c5b01e"
      ].map((url, i) => (
        <div key={i} className="col-md-4 mb-3">
          <img
            src={`${url}?w=600&auto=format&fit=crop&q=60`}
            className="img-fluid rounded shadow"
            alt={`Memory ${i + 1}`}
          />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Wavy Divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" fill="#212529" />
        </svg>
      </div>

      {/* Countdown */}
      <section className="py-5 bg-dark text-white text-center" data-aos="fade-left">
        <div className="container">
          <h2 className="mb-4">Countdown to "I Do"</h2>
          <p className="lead fs-4">123 days, 4 hours, and 26 minutes to go! ⏳</p>
        </div>
      </section>

      {/* Wavy Divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,100 C480,0 960,100 1440,0 L1440,100 L0,100 Z" fill="#FFF7EC" />
        </svg>
      </div>

      {/* Guest Wishes */}
      <section className="py-5 bg-light text-dark text-center" data-aos="zoom-in-up">
        <div className="container">
          <h2 className="mb-4">Leave a Wish 💌</h2>
          <input type="text" className="form-control w-75 mx-auto mb-3" placeholder="Your Name" />
          <textarea className="form-control w-75 mx-auto mb-3" rows="3" placeholder="Your message or blessing..." />
          <button className="btn btn-dark">Send Message</button>
        </div>
      </section>
    </div>
  );
}
