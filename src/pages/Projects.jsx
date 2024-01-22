import { slideInAnimation, SlideInMotion } from "../Animations/Slide";
import { useTheme } from "../components/ThemeContext";
import ToggleButton from "../components/ToggleButton";
function Projects() {
  const { isDarkMode } = useTheme();
  return (
    <SlideInMotion
      initial="hidden"
      animate="visible"
      variants={slideInAnimation}
      className={` h-[100dvh] w-full ${ 
        isDarkMode ? "bg-colordarkbg" : "bg-colorbrightbg"
      }  `}
    >
           <ToggleButton />
     About
    </SlideInMotion>
  );
}

export default Projects;
