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
      </section>

      <section className="buttonLayout">
        <div className="kioskButton comingSoon">
          <span>Gymnastics</span>
          <small>Coming Soon - Testing</small>
        </div>

        <Link to="/summercamp" className="kioskButton primary">
          Summer Camp
        </Link>

        <div className="kioskButton comingSoon">
          <span>Events</span>
          <small>Coming Soon</small>
        </div>
      </section>

      <p className="subtitle">Tap to learn more</p>
    </main>
  );
}

export default Home;
