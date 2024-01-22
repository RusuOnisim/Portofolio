import { slideInAnimation, SlideInMotion } from "../Animations/Slide";
import { useTheme } from "../components/ThemeContext";
import { MdDevices } from "react-icons/md";
import { IoRocket } from "react-icons/io5";
import { MdOutlineSmartToy } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { useState } from "react";
import { motion } from "framer-motion";
import ToggleButton from "../components/ToggleButton";
import SkillsComponent from "../components/SkillsComponent";
function About() {
  const [showWhoIAm, setShowWhoIAm] = useState(true);
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
  const toggleButtonVariants = {
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
  const toggleSection = () => {
    setShowWhoIAm((prevShowWhoIAm) => !prevShowWhoIAm);
  };
  const { isDarkMode } = useTheme();
  return (
    <SlideInMotion
      initial="hidden"
      animate="visible"
      variants={slideInAnimation}
      className={` h-[100dvh] w-full flex flex-col justify-evenly lg:block overflow-y-auto overflow-x-hidden ${
        isDarkMode ? "bg-colordarkbg" : "bg-colorbrightbg"
      }  `}
    >
       <ToggleButton/>
      <motion.section
        className="flex flex-col lg:flex-row h-3/8  w-full items-center justify-start lg:items-start mt-10 lg:mt-16"
        initial="hidden"
        animate="visible"
        variants={containerVariantst}
      >
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
              <MdDevices className="lg:text-6xl text-3xl" />
            </section>
            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-colorbrightsecond"
              } lg:text-2xl mt-1 lg:mb-2`}
            >
              Responisve
            </p>
            <p
              className={`${isDarkMode ? "text-gray-300/70" : "text-gray-600"}
             text-center mt-1 w-[92%] text-xs lg:text-lg`}
            >
              My layouts will work on any device.
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
              Dynamic
            </p>
            <p
              className={`${isDarkMode ? "text-gray-300/70" : "text-gray-600"}
             text-center mt-1 w-[93%] text-xs lg:text-lg`}
            >
              I love building dynamic web applications.
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

          {/* Inovation Hexagon */}

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
              Inovation
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

      <motion.div
        className={`lg:mt-10 mt-5 w-full flex items-start justify-center`}
      >
        {/* Skill On mobile */}

        <motion.section
          className={`w-full lg:hidden overflow-hidden flex flex-col items-center lg:mt-10 justify-center ${
            showWhoIAm ? "hidden lg:flex" : ""
          }`}
          variants={containerVariants}
          initial="hidden"
          animate={showWhoIAm ? "hidden" : "visible"}
          whileTap={clickAnimation}
        >
          <h1
            className={`${
              isDarkMode ? "text-colordarklogo" : "text-colorbrightlogo"
            } lg:text-4xl text-2xl`}
          >
            Skills
          </h1>
          <SkillsComponent isDarkMode={isDarkMode} />
        </motion.section>

        {/* Description Who I am ? */}

        <motion.section
          className={`w-full lg:w-1/2 h-5/8  flex lg:mt-10 flex-col items-center justify-center ${
            !showWhoIAm ? "hidden lg:flex" : ""
          }`}
          variants={containerVariantsl}
          initial="hidden"
          animate={showWhoIAm ? "visible" : "hidden"}
          whileTap={clickAnimation}
        >
          <h1
            className={`${
              isDarkMode ? "text-colordarklogo" : "text-colorbrightlogo"
            } lg:text-4xl text-2xl`}
          >
            Who i am?
          </h1>
          <p
            className={`${isDarkMode ? "text-gray-300/70" : "text-gray-600"}
            lg:mt-5 mt-3 w-[90%] text-center  lg:text-xl `}
          >
            {`Hi, I'm Onisim, and I've undergone a life-changing transition.
          From working in a kitchen, I took the plunge and joined a coding
          bootcamp. That's where I discovered my love for front-end
          development. Over the past six months, I've been reshaping my life
          and diving into the world of coding. Now, I'm hooked on creating
          awesome websites and eager to keep improving. Change is good, and
          I'm excited for the journey ahead!`}
          </p>
        </motion.section>

        {/* Skills on desktop  */}

        <motion.section
          className={`w-full hidden overflow-hidden lg:w-1/2 lg:flex flex-col items-center lg:mt-10 justify-center ${
            showWhoIAm ? "hidden lg:flex" : ""
          }`}
          variants={containerVariants}
          initial="hidden"
          animate={showWhoIAm ? "visible" : "hidden"}
          whileTap={clickAnimation}
        >
          <h1
            className={`${
              isDarkMode ? "text-colordarklogo" : "text-colorbrightlogo"
            } lg:text-4xl text-2xl`}
          >
            Skills
          </h1>
          <SkillsComponent isDarkMode={isDarkMode} />
        </motion.section>

        {/* Toggle Button */}

        <motion.button
          className={`${
            isDarkMode ? "text-colordarkbg" : "text-colorbrightbg"
          } ${
            isDarkMode ? "bg-colordarklogo" : "bg-colorbrightlogo"
          } absolute right-2 top-1/2 w-14 h-8 flex items-center justify-center rounded-xl text-xs font-bold lg:hidden`}
          style={{
            boxShadow: isDarkMode
              ? "0px 2px 4px rgba(0, 0, 0, 0.35)"
              : "0px 2px 4px rgba(0, 0, 0, 0.20)",
          }}
          onClick={toggleSection}
          variants={toggleButtonVariants}
          initial="hidden"
          animate="visible"
        >
          {showWhoIAm ? (
            <>
              Skills <HiMiniArrowSmallRight className="text-[15px] font-bold" />
            </>
          ) : (
            <>
              About <HiMiniArrowSmallRight className="text-[15px] font-bold"/>
            </>
          )}
        </motion.button>
      </motion.div>
    </SlideInMotion>
  );
}

export default About;
