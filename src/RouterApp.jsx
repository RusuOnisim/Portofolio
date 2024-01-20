import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navleft from "./components/Navleft";
import App from "./pages/App";
import About from "./pages/About";
import Projects from "./pages/Projects"
import { useTheme } from "./components/ThemeContext";
function RouterApp() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className="flex">
    <Router>
    <label className="absolute top-4 right-4 flex items-center cursor-pointer z-10">
  <input type="checkbox" value="" className="sr-only peer" onChange={toggleTheme} checked={isDarkMode} />
  <div className={`
    w-11 h-6 
    ${isDarkMode ? 'bg-colordarklogo dark:bg-colordarksecond' : 'bg-colorbrightsecond'}
    rounded-full peer 
    ${isDarkMode ? 'peer-checked:after:translate-x-full' : 'rtl:peer-checked:after:-translate-x-full'} 
    peer-checked:after:border-white 
    after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
    after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
    after:transition-all dark:border-gray-600 
    peer-checked:bg-colordarklogo
  `}></div>
  
</label>



         <Navleft />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </Router>
    </div>
  
  );
}
export default RouterApp;
