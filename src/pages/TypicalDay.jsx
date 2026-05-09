import { Link } from "react-router-dom";
import campSchedule from "../data/campSchedule";
import "./TypicalDay.css";

function TypicalDay() {
  return (
    <main className="typicalDayPage">
      <header className="typicalDayHeader">
        <div className="typicalDayNav">
          <Link to="/" className="typicalDayButton">
            ← Home
          </Link>
          <Link to="/summercamp" className="typicalDayButton">
            Back
          </Link>
        </div>

        <div>
          <p className="typicalDayEyebrow">Energy Summer Camp</p>
          <h1>Typical Camp Day</h1>
        </div>
      </header>

      <section className="schedulePanel" aria-label="Typical camp day schedule">
        <div className="scheduleTimeline">
          {campSchedule.map((item) => (
            <article className="scheduleCard" key={`${item.time}-${item.title}`}>
              <div className="scheduleTime">{item.time}</div>
              <div className="scheduleContent">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default TypicalDay;
