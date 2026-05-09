import { Link } from "react-router-dom";
import "./SummerCamp.css";

function SummerCamp() {
  return (
    <main className="campPage">
      <header className="campHeader">
        <Link to="/" className="homeButton">
          ← Home
        </Link>

        <div>
          <h1>A fun, active day your child will love.</h1>
        </div>
      </header>

      <section className="campLayout">
        <div className="mediaPanel">
          <video
            className="campVideo"
            src="https://res.cloudinary.com/dtsbqsk8c/video/upload/v1778337252/1._Main-revised_noblackendcard_sjezu5.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />

          <p className="mediaCaption">
            See what a day at Energy Summer Camp looks like.
          </p>
        </div>

        <div className="infoGrid">
          <div className="infoCard">
            <h2>Typical Day</h2>
            <p>See how the camp day is structured from drop-off to pick-up.</p>
          </div>

          <div className="infoCard">
            <h2>FAQs</h2>
            <p>Answers to common parent questions about camp.</p>
          </div>

          <div className="infoCard">
            <h2>What to Bring</h2>
            <p>Lunch, snack, water bottle, comfortable clothes, and more.</p>
          </div>

          <div className="infoCard">
            <h2>Ages & Hours</h2>
            <p>Camp is for ages 3–9 and runs from 9 AM–3 PM.</p>
          </div>

          <div className="infoCard full">
            <h2>Register</h2>
            <p>Scan the QR code or ask the front desk for help signing up.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SummerCamp;
