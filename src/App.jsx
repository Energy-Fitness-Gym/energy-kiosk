import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import SummerCamp from "./pages/SummerCamp";
import TypicalDay from "./pages/TypicalDay";
import WhatToBring from "./pages/WhatToBring";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/summercamp" element={<SummerCamp />} />
        <Route path="/typicalday" element={<TypicalDay />} />
        <Route path="/whattobring" element={<WhatToBring />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
