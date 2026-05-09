import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SummerCamp from "./pages/SummerCamp";
import TypicalDay from "./pages/TypicalDay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summercamp" element={<SummerCamp />} />
        <Route path="/typicalday" element={<TypicalDay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
