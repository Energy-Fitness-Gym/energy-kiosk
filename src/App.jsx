import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SummerCamp from "./pages/SummerCamp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summercamp" element={<SummerCamp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
