import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ExplorerSlug from "./components/ExplorerSlug";
import BuilderPage from "./components/Builder";
import ExplorerPage from "./pages/ExplorerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/explorer" element={<ExplorerSlug/>} />
        <Route path="/builder" element={<BuilderPage/>} />
        <Route path="/explorer" element={<ExplorerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
