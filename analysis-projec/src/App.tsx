import MainPage from "./pages/MainPage";
import AboutPage from "./pages/Aboutpage";
import InfoPage from "./pages/InfoPage";
import Result from "./pages/Result";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>

        <Route path="/about" element={<AboutPage />} />
        <Route path="/infopage" element={<InfoPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
