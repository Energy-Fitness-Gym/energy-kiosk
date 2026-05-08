import { Link } from "react-router-dom";

function SummerCamp() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1f2937",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "4rem" }}>Energy Summer Camp</h1>

      <p style={{ fontSize: "2rem" }}>Ages 3–9</p>

      <p style={{ fontSize: "1.5rem" }}>
        Games, obstacle courses, crafts, movement, and nonstop fun.
      </p>

      <Link to="/">
        <button
          style={{
            marginTop: "40px",
            padding: "15px 30px",
            fontSize: "1.5rem",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Back Home
        </button>
      </Link>
    </div>
  );
}

export default SummerCamp;
