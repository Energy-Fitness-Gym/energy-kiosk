import { Link } from "react-router-dom";
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
  return (
    <main className="whatToBringPage">
      <header className="whatToBringHeader">
        <div className="whatToBringNav">
          <Link to="/" className="whatToBringButton">
            ← Home
          </Link>
          <Link to="/summercamp" className="whatToBringButton">
            Back
          </Link>
        </div>

        <h1>What to Bring</h1>
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
