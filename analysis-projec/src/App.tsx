import MainPage from "./pages/MainPage";
import AboutPage from "./pages/Aboutpage";
import InfoPage from "./pages/InfoPage";
import Result from "./pages/Result";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModeToggle } from "./components/mode-toogle";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle></ModeToggle>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>

          <Route path="/about" element={<AboutPage />} />
          <Route path="/infopage" element={<InfoPage />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
