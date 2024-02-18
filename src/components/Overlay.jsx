import PropTypes from "prop-types"; // Import PropTypes
import { useTheme } from "./ThemeContext";

function Overlay({ technologies, liveLink, title }) {
  const { isDarkMode } = useTheme();

  return (
    <div className={` ${isDarkMode ? "bg-colordarklogo" : "bg-colorbrightlogo"} rounded-xl absolute flex lg:items-center items-center pt-5 lg:pt-0 justify-center w-full h-full inset-0 opacity-0 transition-opacity  duration-1000 hover:opacity-90`}>
      {technologies.map((tech, index) => (
        <div key={index} className="bg-black text-white text-xs mb-5 lg:text-lg lg:w-24 lg:h-10 w-16 h-8 flex items-center justify-center mx-2 rounded-lg">
          {tech}
        </div>
      ))}
      <h1 className="absolute text-black font-bold text-sm lg:text-lg lg:top-12 top-5 ">{title}</h1>
      <div className="absolute text-black font-bold text-sm lg:text-lg bg-white py-1 px-2 rounded-lg top-2/3">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          Live Version
        </a>
      </div>
    </div>
  );
}

// Add PropTypes validation
Overlay.propTypes = {
  technologies: PropTypes.array.isRequired,
  liveLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, // Add PropTypes for the title prop
};

export default Overlay;
