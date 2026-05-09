import { Link, useNavigate } from "react-router-dom";
import "./SummerCamp.css";

function SummerCamp() {
  const navigate = useNavigate();

  return (
    <main className="campPage">
      <header className="campHeader">
        <button
          className="homeButton campBackButton"
          type="button"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h1>A fun, active day your child will love!</h1>

        <Link to="/" className="homeButton campHomeButton">
          Home
        </Link>
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

          <Link to="/faq" className="infoCard infoCardLink">
            <h2>FAQs</h2>
            <p>Ages, grouping requests, shy campers, and more...</p>
          </Link>

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
