import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <p className="eyebrow">Welcome to</p>
        <h1>Energy</h1>
        <p className="subtitle">Tap below to learn more.</p>
      </section>

      <section className="buttonLayout">
        <Link to="/summercamp" className="kioskButton primary large">
          Summer Camp
        </Link>

        <div className="bottomButtons">
          <button className="kioskButton" disabled>
            <span>Events</span>
            <small>Coming Soon</small>
          </button>

          <button className="kioskButton" disabled>
            <span>Gymnastics</span>
            <small>Coming Soon1</small>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
