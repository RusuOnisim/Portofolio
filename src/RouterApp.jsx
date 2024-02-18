import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navleft from "./components/Navleft";
import App from "./pages/App";
import About from "./pages/About";
import Projects from "./pages/Projects";

function RouterApp() {
  return (
    <div className="flex">
      <Router>
        <Navleft />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default RouterApp;
