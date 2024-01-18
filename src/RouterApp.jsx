import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navleft from "./components/Navleft";
import App from "./pages/App";
import About from "./pages/About";
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
function RouterApp() {
  return (
    <div className="flex">
    <Router>
         <Navleft />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
    </div>
  
  );
}
export default RouterApp;
