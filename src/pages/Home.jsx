import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Energy</h1>

      <Link to="/summercamp">
        <button>Summer Camp</button>
      </Link>
    </div>
  );
}

export default Home;
