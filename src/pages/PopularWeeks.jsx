import { Link, useNavigate } from "react-router-dom";
import campWeeks from "../data/campWeeks";
import "./PopularWeeks.css";

const months = ["June", "July", "August"];

function PopularWeeks() {
  const navigate = useNavigate();

  return (
    <main className="popularWeeksPage">
      <header className="popularWeeksHeader">
        <button
          className="popularWeeksButton popularWeeksBackButton"
          type="button"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <div className="popularWeeksTitle">
          <h1>Popular Weeks</h1>
          <p>Camp weeks that have historically filled the quickest.</p>
        </div>

        <Link to="/" className="popularWeeksButton popularWeeksHomeButton">
          Home
        </Link>
      </header>

      <section
        className="popularWeeksBoard"
        aria-label="Popular camp weeks by month"
      >
        <div className="popularWeeksList">
          {months.map((month) => {
            const weeks = campWeeks.filter((week) => week.month === month);

            return (
              <section
                className="monthSection"
                key={month}
                aria-labelledby={`${month}-weeks`}
              >
                <div className="monthHeading">
                  <h2 id={`${month}-weeks`}>{month}</h2>
                </div>

                <div className="weekStack">
                  {weeks.map((week) => (
                    <article
                      className={`weekCard ${week.isPopular ? "weekCardPopular" : ""}`}
                      key={`${week.month}-${week.label}`}
                    >
                      <div className="weekCardMain">
                        <div>
                          <h3>{week.label}</h3>
                          <p className="weekDates">{week.dates}</p>
                        </div>

                        {week.isPopular && (
                          <span className="popularBadge">
                            Historically Popular
                          </span>
                        )}
                      </div>

                      {week.note && <p className="weekNote">{week.note}</p>}
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default PopularWeeks;
