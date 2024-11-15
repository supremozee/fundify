import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ExplorerSlug from "./components/ExplorerSlug";
import BuilderPage from "./components/Builder";
import ExplorerPage from "./pages/ExplorerPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/project/:id" element={<ExplorerSlug/>} />
        <Route path="/builder" element={<BuilderPage/>} />
        <Route path="/explorer" element={<ExplorerPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
