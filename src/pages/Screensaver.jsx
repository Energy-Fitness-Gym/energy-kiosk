import { useNavigate } from "react-router-dom";
import "./Screensaver.css";

const campVideoSrc =
  "https://res.cloudinary.com/dtsbqsk8c/video/upload/v1778337252/1._Main-revised_noblackendcard_sjezu5.mp4";

const logoSrc =
  "https://res.cloudinary.com/dtsbqsk8c/image/upload/v1778287311/Logo_and_tag_line_-_oval_ssvbiw.png";

function Screensaver() {
  const navigate = useNavigate();

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
      <div className="screensaverVideoRail left" aria-hidden="true">
        <video src={campVideoSrc} autoPlay muted loop playsInline preload="auto" />
      </div>

      <div className="screensaverVideoRail right" aria-hidden="true">
        <video src={campVideoSrc} autoPlay muted loop playsInline preload="auto" />
      </div>

      <section className="screensaverContent">
        <div className="screensaverLogoShell">
          <img className="screensaverLogo" src={logoSrc} alt="Energy" />
        </div>
      </section>

      <p className="screensaverPrompt">Touch the Screen to Explore Summer Camp</p>
    </main>
  );
}

export default Screensaver;
