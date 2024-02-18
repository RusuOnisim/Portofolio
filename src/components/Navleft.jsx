import darkModeSvg from "../assets/images/logooni.svg";
import lightModeSvg from "../assets/images/logoonil.svg";
import { NavLink } from "react-router-dom";
import { useTheme } from "../components/ThemeContext";
import ToggleButton from "./ToggleButton";

export default function Navleft() {
  const { isDarkMode } = useTheme();

  const svgSource = isDarkMode ? darkModeSvg : lightModeSvg;

  return (
    <nav
      className={`w-2/12 lg:w-1/12 flex flex-col justify-center ${
        isDarkMode ? "bg-colordarksecond" : "bg-navcolor"
      }  z-40`}
    >
      <img src={svgSource} className="mt-2 h-10 lg:h-14" alt="" />
      <section
        className={`text-${
          isDarkMode ? "colordarklogo" : "colorbrightlogo"
        } h-full flex flex-col items-center justify-evenly text-xl z-40 relative`}
      >
        <NavLink
           className={`${isDarkMode ? "text-navcolor" : "text-colordarksecond"} ${
            isDarkMode
              ? "aria-[current=page]:text-colordarklogo"
              : "aria-[current=page]:text-colorbrightlogo"
          }`}
          id="side"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
           className={`${isDarkMode ? "text-navcolor" : "text-colordarksecond"} ${
            isDarkMode
              ? "aria-[current=page]:text-colordarklogo"
              : "aria-[current=page]:text-colorbrightlogo"
          }`}
          id="side"
          to="/about"
        >
          About
        </NavLink>
      
        <NavLink
          className={`${isDarkMode ? "text-navcolor" : "text-colordarksecond"} ${
            isDarkMode
              ? "aria-[current=page]:text-colordarklogo"
              : "aria-[current=page]:text-colorbrightlogo"
          }`}
          id="side"
          to="/projects"
        >
          Projects
        
        </NavLink>
        <ToggleButton />
      </section>
    </nav>
  );
}
