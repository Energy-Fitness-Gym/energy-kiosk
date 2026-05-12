import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Screensaver.css";

const campVideoSrc =
  "https://res.cloudinary.com/dtsbqsk8c/video/upload/v1778337252/1._Main-revised_noblackendcard_sjezu5.mp4";

const slides = [
  {
    type: "photo",
    title: "Summer Camp 2026",
    message: "A fun, active day your child will love.",
  },
  {
    type: "video",
    title: "Ages 3–12",
    message: "Preschool and school-age camp weeks all summer.",
  },
  {
    type: "photo",
    title: "Gymnastics, games, crafts, and outdoor fun",
    message: "Built for movement, friendship, and confidence.",
  },
  {
    type: "photo",
    title: "Tap anywhere to explore camp",
    message: "See schedules, FAQs, popular weeks, and more.",
  },
];

function Screensaver() {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(slideTimer);
  }, []);

  return (
    <main
      className="screensaver"
      role="button"
      tabIndex={0}
      aria-label="Touch the screen to return to the main kiosk"
      onClick={() => navigate("/")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          navigate("/");
        }
      }}
    >
      {slides.map((slide, index) => (
        <section
          className={`screensaverSlide screensaverSlide${index + 1} ${
            activeSlide === index ? "isActive" : ""
          }`}
          aria-hidden={activeSlide !== index}
          key={slide.title}
        >
          {slide.type === "video" && (
            <video src={campVideoSrc} autoPlay muted loop playsInline preload="auto" />
          )}

          <div className="screensaverOverlay">
            <h1>{slide.title}</h1>
            <p>{slide.message}</p>
          </div>
        </section>
      ))}

      <div className="screensaverProgress" aria-hidden="true">
        {slides.map((slide, index) => (
          <span
            className={activeSlide === index ? "isActive" : ""}
            key={`progress-${slide.title}`}
          />
        ))}
      </div>
    </main>
  );
}

export default Screensaver;
