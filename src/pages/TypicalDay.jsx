import { useState } from "react";
import { Link } from "react-router-dom";
import campSchedule from "../data/campSchedule";
import "./TypicalDay.css";

function TypicalDay() {
  const [openIndex, setOpenIndex] = useState(null);

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
          <h1>Typical Camp Day</h1>
        </div>
      </header>

      <section className="schedulePanel" aria-label="Typical camp day schedule">
        <div className="scheduleTimeline">
          {campSchedule.map((item, index) => {
            const isOpen = openIndex === index;
            const detailsId = `schedule-details-${index}`;

            return (
              <article className={`scheduleCard ${isOpen ? "isOpen" : ""}`} key={`${item.time}-${item.title}`}>
                <button
                  className="scheduleToggle"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={detailsId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="scheduleTime">{item.time}</span>
                  <span className="scheduleTitle">{item.title}</span>
                  <span className="scheduleChevron" aria-hidden="true">
                    ›
                  </span>
                </button>

                <div className="scheduleDetails" id={detailsId}>
                  <p>{item.description}</p>
                </div>
            </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default TypicalDay;
