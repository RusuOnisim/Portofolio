import { slideInAnimation, SlideInMotion } from "../Animations/Slide";
import { useTheme } from "../components/ThemeContext";
function About() {
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
     
     About
    </SlideInMotion>
  );
}

export default About;
