import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <img
          className="logo"
          src="https://res.cloudinary.com/dtsbqsk8c/image/upload/v1778287311/Logo_and_tag_line_-_oval_ssvbiw.png"
          alt="Energy Logo"
        />

        <p className="subtitle">Tap to learn more</p>
      </section>

      <section className="buttonLayout">
        <button className="kioskButton" type="button" aria-disabled="true" tabIndex="-1">
          <span>Gymnastics</span>
          <small>Coming Soon</small>
        </button>

        <Link to="/summercamp" className="kioskButton primary">
          Summer Camp
        </Link>

        <button className="kioskButton" type="button" aria-disabled="true" tabIndex="-1">
          <span>Events</span>
          <small>Coming Soon</small>
        </button>
      </section>
    </main>
  );
}

export default Home;
