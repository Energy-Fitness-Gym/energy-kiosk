import { Link, useNavigate } from "react-router-dom";
import "./WhatToBring.css";

const allCampersItems = [
  "Water bottle",
  "Morning snack (peanut/nut-free)",
  "Change of clothes in a Ziploc bag in case of an accident",
  "Bathing suit and towel for outdoor water play",
  "Sunglasses and/or hat for outdoor play",
  "Sunscreen",
];

const fullDayItems = [
  "Lunch packed in a thermal lunchbox",
  "Afternoon snack (peanut/nut-free)",
  "Sunscreen labeled with your child's name for afternoon reapplication",
  "Extra beach towel",
];

function WhatToBring() {
  const navigate = useNavigate();

  return (
    <main className="whatToBringPage">
      <header className="whatToBringHeader">
        <button className="whatToBringButton whatToBringBackButton" type="button" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h1>What to Bring</h1>

        <Link to="/" className="whatToBringButton whatToBringHomeButton">
          Home
        </Link>
      </header>

      <section className="bringGrid" aria-label="Summer camp packing lists">
        <article className="bringCard">
          <h2>All Campers</h2>
          <ul>
            {allCampersItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="bringCard">
          <h2>Full-Day and Lunch Campers Only</h2>
          <ul>
            {fullDayItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}

export default WhatToBring;
