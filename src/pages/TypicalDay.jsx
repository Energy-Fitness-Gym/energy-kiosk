import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import campSchedule from "../data/campSchedule";
import "./TypicalDay.css";

function TypicalDay() {
  const [openIndex, setOpenIndex] = useState(null);
  const itemRefs = useRef([]);
  const navigate = useNavigate();

  const handleToggle = (index) => {
    const nextIndex = openIndex === index ? null : index;
    setOpenIndex(nextIndex);

    if (nextIndex !== null) {
      window.setTimeout(() => {
        itemRefs.current[nextIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 80);
    }
  };

  return (
    <main className="typicalDayPage">
      <header className="typicalDayHeader">
        <button className="typicalDayButton typicalDayBackButton" type="button" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h1>Typical Camp Day</h1>

        <Link to="/" className="typicalDayButton typicalDayHomeButton">
          Home
        </Link>
      </header>

      <section className="schedulePanel" aria-label="Typical camp day schedule">
        <div className="scheduleTimeline">
          {campSchedule.map((item, index) => {
            const isOpen = openIndex === index;
            const detailsId = `schedule-details-${index}`;

            return (
              <article
                className={`scheduleCard ${isOpen ? "isOpen" : ""}`}
                key={`${item.time}-${item.title}`}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
              >
                <button
                  className="scheduleToggle"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={detailsId}
                  onClick={() => handleToggle(index)}
                >
                  <span className="scheduleTime">{item.time}</span>
                  <span className="scheduleTitle">{item.title}</span>
                  <span className="scheduleChevron" aria-hidden="true">
                    {isOpen ? "−" : "+"}
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
