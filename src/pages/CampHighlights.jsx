import { Link, useNavigate } from "react-router-dom";
import campHighlights from "../data/campHighlights";
import "./CampHighlights.css";

function CampHighlights() {
  const navigate = useNavigate();

  return (
    <main className="campHighlightsPage">
      <header className="campHighlightsHeader">
        <button
          className="campHighlightsButton campHighlightsBackButton"
          type="button"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <div className="campHighlightsTitle">
          <h1>Camp Highlights</h1>
        </div>

        <Link to="/" className="campHighlightsButton campHighlightsHomeButton">
          Home
        </Link>
      </header>

      <section className="campHighlightsGallery" aria-label="Camp highlights media gallery">
        {campHighlights.map((item, index) => (
          <article className="highlightCard" key={`${item.title}-${index}`}>
            <div className={`highlightMedia highlightMedia${index + 1}`}>
              {item.type === "video" && item.src ? (
                <video src={item.src} autoPlay muted loop playsInline preload="auto" />
              ) : item.src ? (
                <img src={item.src} alt="" />
              ) : (
                <div className="highlightPlaceholder" aria-hidden="true" />
              )}
            </div>

            <div className="highlightCaption">
              <span>{item.type === "video" ? "Video" : "Photo"}</span>
              <h2>{item.title}</h2>
              <p>{item.caption}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default CampHighlights;
