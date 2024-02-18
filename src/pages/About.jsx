import { slideInAnimation, SlideInMotion } from "../Animations/Slide";
import { useTheme } from "../components/ThemeContext";
import { FaEye } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import { MdOutlineSmartToy } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { motion } from "framer-motion";
import SkillsComponent from "../components/SkillsComponent";
function About() {
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
  const containerVariantst = {
    hidden: { y: "-20vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 1.25,
      },
    },
  };
  const clickAnimation = {
    hidden: { x: "50vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 1.25,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };
  
 
  const { isDarkMode } = useTheme();
  return (
    <SlideInMotion
      initial="hidden"
      animate="visible"
      variants={slideInAnimation}
      className={`h-[100dvh] pb-10 lg:pb-0 w-full flex flex-col lg:block overflow-y-auto overflow-x-hidden  ${
        isDarkMode ? "bg-colordarkbg" : "bg-colorbrightbg"
      }  `}
    >
      <motion.section
        className="flex flex-col lg:flex-row h-3/8  w-full items-center justify-start lg:items-start mt-10"
        initial="hidden"
        animate="visible"
        variants={containerVariantst}
      >
        {/* Skills Section */}
        <div className="lg:w-1/2 w-full flex flex-row items-start justify-around">
          {/* Responsive hexagon */}
          <div className="flex flex-col items-center w-1/2">
            <section
              className={`${
                isDarkMode ? "bg-colordarklogo" : "bg-colorbrightlogo"
              }   ${
                isDarkMode ? "text-colordarkbg" : "text-colorbrightbg"
              } hexagon flex items-center justify-center `}
            >
              <FaEye className="lg:text-6xl text-3xl" />
            </section>
            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-colorbrightsecond"
              } lg:text-2xl mt-1 lg:mb-2`}
            >
              Design Sensibility
            </p>
            <p
              className={`${isDarkMode ? "text-gray-300/70" : "text-gray-600"}
             text-center mt-1 w-[92%] text-xs lg:text-lg`}
            >
              I possess a strong sense of design and aesthetics.
            </p>
          </div>

          {/* Dynamic Hexagon */}
          <div className="flex flex-col items-center w-1/2">
            <section
              className={`${
                isDarkMode ? "bg-colordarklogo" : "bg-colorbrightlogo"
              }  ${
                isDarkMode ? "text-colordarkbg" : "text-colorbrightbg"
              }  hexagon flex items-center justify-center`}
            >
              <IoRocket className="lg:text-6xl text-3xl" />
            </section>
            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-colorbrightsecond"
              } lg:text-2xl mt-1 lg:mb-2`}
            >
              Quick Learner
            </p>
            <p
              className={`${isDarkMode ? "text-gray-300/70" : "text-gray-600"}
             text-center mt-1 w-[93%] text-xs lg:text-lg`}
            >
              I have a knack for rapidly grasping and mastering new concepts.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex flex-row items-start justify-around mt-2 lg:mt-0">
          {/* Adaptability Hexagon */}
          <div className="flex flex-col items-center w-1/2">
            <section
              className={`${
                isDarkMode ? "bg-colordarklogo" : "bg-colorbrightlogo"
              } ${
                isDarkMode ? "text-colordarkbg" : "text-colorbrightbg"
              }   hexagon flex items-center justify-center`}
            >
              <MdOutlineSmartToy className="lg:text-6xl text-3xl" />
            </section>
            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-colorbrightsecond"
              } lg:text-2xl mt-1 lg:mb-2`}
            >
              {" "}
              Adaptability
            </p>
            <p
              className={`${isDarkMode ? "text-gray-300/70" : "text-gray-600"}
             text-center mt-1 w-[92%] text-xs lg:text-lg`}
            >
              I stay current with the latest technologies.
            </p>
          </div>

          {/* Innovation Hexagon */}
          <div className="flex flex-col items-center w-1/2">
            <section
              className={`${
                isDarkMode ? "bg-colordarklogo" : "bg-colorbrightlogo"
              }  ${
                isDarkMode ? "text-colordarkbg" : "text-colorbrightbg"
              }  hexagon flex items-center justify-center`}
            >
              <IoIosColorPalette className="lg:text-6xl text-3xl" />
            </section>
            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-colorbrightsecond"
              } lg:text-2xl mt-1 lg:mb-2`}
            >
              Innovation
            </p>
            <p
              className={`${isDarkMode ? "text-gray-300/70" : "text-gray-600"}
             text-center mt-1 w-[92%] text-xs lg:text-lg`}
            >
              Bringing fresh ideas to web development.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Who I Am Section */}
      <div className="w-full lg:h-[70%]  justify-center flex flex-col lg:flex-row">
      <motion.section
        className={`w-full mt-10 lg:w-1/2 flex flex-col  items-center justify-center`}
        variants={containerVariantsl}
        initial="hidden"
        animate="visible"
        whileTap={clickAnimation}
      >
        <h1
          className={`${
            isDarkMode ? "text-colordarklogo" : "text-colorbrightlogo"
          } lg:text-4xl text-2xl`}
        >
          Who I am?
        </h1>
        <p
          className={`${isDarkMode ? "text-gray-300/70" : "text-gray-600"}
            lg:mt-5 mt-3 w-[90%] text-center  lg:text-xl text-[14px] `}
        >
          {`Hi, I'm Onisim, and I've undergone a life-changing transition.
          From working in a kitchen, I took the plunge and joined a coding
          bootcamp. That's where I discovered my love for front-end
          development. Over the past six months, I've been reshaping my life
          and diving into the world of coding. Now, I'm hooked on creating
          awesome websites and eager to keep improving. Change is good, and
          I'm excited for the journey ahead! `}
          {`With a keen eye for design, I ensure my creations are visually appealing.
          Additionally, my fast-learning abilities help me adapt swiftly to new challenges.`}
        </p>
      </motion.section>

      <motion.section
        className={`overflow-hidden lg:w-1/2 w-full flex flex-col items-center lg:mt-10 justify-center`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileTap={clickAnimation}
      >
        <h1
          className={`${
            isDarkMode ? "text-colordarklogo" : "text-colorbrightlogo"
          } lg:text-4xl text-2xl text-center mt-10 lg:mt-0`}
        >
          Skills
        </h1>
        <SkillsComponent isDarkMode={isDarkMode} />
      </motion.section>
      </div>
    </SlideInMotion>
  );
}

export default About;
