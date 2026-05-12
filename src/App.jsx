import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CampHighlights from "./pages/CampHighlights";
import FAQ from "./pages/FAQ";
import Screensaver from "./pages/Screensaver";
import SummerCamp from "./pages/SummerCamp";
import PopularWeeks from "./pages/PopularWeeks";
import TypicalDay from "./pages/TypicalDay";
import WhatToBring from "./pages/WhatToBring";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camphighlights" element={<CampHighlights />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/screensaver" element={<Screensaver />} />
        <Route path="/summercamp" element={<SummerCamp />} />
        <Route path="/popularweeks" element={<PopularWeeks />} />
        <Route path="/typicalday" element={<TypicalDay />} />
        <Route path="/whattobring" element={<WhatToBring />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
