import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing.jsx";
import Success from "./pages/success/Success.jsx";

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
