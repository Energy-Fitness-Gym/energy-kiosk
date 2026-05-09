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
          <h1>A fun, active day your child will love!</h1>
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
          <Link to="/typicalday" className="infoCard infoCardLink">
            <h2>Typical Day</h2>
            <p>See what your child can expect during a typical day at camp.</p>
          </Link>

          <div className="infoCard">
            <h2>FAQs</h2>
            <p>Answers to common parent questions about camp.</p>
          </div>

          <Link to="/whattobring" className="infoCard infoCardLink">
            <h2>What to Bring</h2>
            <p>Click to see what campers should bring daily.</p>
          </Link>

          <div className="infoCard">
            <h2>TBD</h2>
            <p>TBD</p>
          </div>

          <div className="infoCard full">
            <h2>How to Register</h2>
            <h4>Pick up and complete a Summer Camp packet to register</h4>
            <p style={{ fontWeight: 400, paddingTop: "6px" }}>
              <em>**Some weeks fill faster than others.</em>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SummerCamp;
