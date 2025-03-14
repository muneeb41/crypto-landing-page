import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing/Landing.jsx";
import Success from "./pages/success/Success.jsx";

function App() {
  return (
    <Router basename="/crypto-landing-page">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
