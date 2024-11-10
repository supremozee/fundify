import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route
          path="/connect"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: 12,
              }}
            >
              <ConnectButton
                accountStatus={{
                  smallScreen: "avatar",
                  largeScreen: "full",
                }}
              />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
