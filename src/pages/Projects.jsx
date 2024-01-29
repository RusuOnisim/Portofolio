import { slideInAnimation, SlideInMotion } from "../Animations/Slide";
import { useTheme } from "../components/ThemeContext";
import Hangman from "../assets/images/Hangmaan.jpg";
import Quizz from "../assets/images/quizz.jpg";
import Cinemania from "../assets/images/Cinemania.jpg";
import Cookie from "../assets/images/Cookie.jpg";
import Overlay from "../components/Overlay";
import {motion} from "framer-motion"
function Projects() {
  const technologies1 = ["Typescript", "Html", "Css"];
  const technologies2 = ["React","Typescript", "Tailwind" ];
  const technologies3 = ["React","Typescript" ,"Tailwind"];
  const technologies4 = ["JavaScript", "Html", "Css"];
  const liveLink1 = "https://rusuonisim.github.io/Hangman/";
  const liveLink2 = "https://rusuonisim.github.io/Quizz/";
  const liveLink3 = "https://a3lequenne.github.io/getflixProject/";
  const liveLink4 = "https://a3lequenne.github.io/cookie-clicker-group/";
  const { isDarkMode } = useTheme();
  const containerVariants = {
    hidden: { x: "50vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 1.25,
        ease: "easeInOut",
        delay: 0.75,
      },
    },
  };
  const containerVariantsl = {
    hidden: { x: "-50vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 1.25,
        ease: "easeInOut",
        delay: 0.75,
      },
    },
  };
  return (
    <SlideInMotion
      initial="hidden"
      animate="visible"
      variants={slideInAnimation}
      className={` h-[100dvh] w-full flex items-center justify-center overflow-y-auto overflow-x-hidden ${
        isDarkMode ? "bg-colordarkbg" : "bg-colorbrightbg"
      }  `}
    >
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-2 content-center mt-10 lg:gap-10 lg:w-full h-[90%] py-16  lg:px-20 px-5">
      <motion.section className="flex-1 relative "
         variants={containerVariantsl}
         initial="hidden"
         animate="visible"
      >
          <img src={Cinemania} className={`${
        isDarkMode ? "shadow-gray-300/10" : "shadow-xl"
      } shadow-lg rounded-xl object-cover z-10`} alt="" />
          <Overlay technologies={technologies3} liveLink={liveLink3} />
        </motion.section>

        
        <motion.section className="flex-1 relative "
        variants={containerVariants}
        initial="hidden"
        animate="visible">
          <img src={Hangman} className={`${
        isDarkMode ? "shadow-gray-300/10" : "shadow-xl"
      } shadow-lg rounded-xl object-cover z-10`} alt="Hangman"  />

          <Overlay technologies={technologies1} liveLink={liveLink1} />

        </motion.section>
        <motion.section className="flex-1 relative"
        variants={containerVariantsl}
        initial="hidden"
        animate="visible">
          <img src={Quizz} className={`${
        isDarkMode ? "shadow-gray-300/10" : "shadow-xl"
      } shadow-lg rounded-xl object-cover z-10`} alt="Quizz Game" />
          <Overlay technologies={technologies2} liveLink={liveLink2} />

        </motion.section>
        <motion.section className="flex-1 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
          <img src={Cookie} className={`${
        isDarkMode ? "shadow-gray-300/10" : "shadow-xl"
      } shadow-lg rounded-xl object-cover z-10`} alt="Cookie-Clicker" />
          <Overlay technologies={technologies4} liveLink={liveLink4} />
        </motion.section>
      </main>
    </SlideInMotion>
  );
}

export default Projects;
