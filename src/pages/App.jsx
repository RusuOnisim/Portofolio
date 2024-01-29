import {
  slideInAnimation,
  SlideInMotion,
  slideInFromRightAnimation,
} from "../Animations/Slide";
import { motion } from "framer-motion";
import darkModeSvg from "../assets/images/myphoto.svg";
import lightModeSvg from "../assets/images/svvg.svg";
import TextSpan from "../components/TextSpan";
import { useTheme } from "../components/ThemeContext";
import PacmanIcon from "../components/PacmanIcon";
import GitHubAnimation from "../Animations/GitHubAnimation";
import LinkedInButton from "../components/Linkedin";
function App() {
  const { isDarkMode } = useTheme();

  const sentence = "Front-End Developer".split("");
  const sentence2 = "Based in Belgium".split("");
  const svg = isDarkMode ? darkModeSvg : lightModeSvg;

  const openGitHubProfile = () => {
    window.open("https://github.com/RusuOnisim", "_blank");
  };
  const openLinkedInProfile = () => {
    window.open("https://www.linkedin.com/in/onisim-rusu-2a4b57290/", "_blank");
  };

  return (
    <SlideInMotion
      initial="hidden"
      animate="visible"
      variants={slideInAnimation}
      className={`bg-${
        isDarkMode ? "colordarkbg" : "colorbrightbg z-0"
      } w-full overflow-hidden `}
    >

      <main
        className={`h-[100dvh] w-full ${
          isDarkMode ? "bg-colordarkbg" : "bg-colorbrightbg"
        } flex lg:flex-row flex-col-reverse z-0`}
      >
        {/* My Image Section */}

        <section className="sm:w-2/3 lg:h-full w-full h-auto flex flex-col justify-end self-end">
          <img src={svg} className="w-full overflow-hidden" alt="" />
        </section>

        {/* Text Section  */}

        <section className="lg:w-1/2 lg:h-full pt-5 h-1/2 justify-start w-full flex flex-col lg:justify-center px-5">
          <motion.div
            variants={slideInFromRightAnimation}
            initial="hidden"
            animate="visible"
            className="flex flex-col w-full h-1/2 items-start"
          >
            {/* Front-End Title */}

            <span className="flex flex-row items-center justify-start">
              <h1
                className={`2xl:text-5xl md:text-4xl lg:text-3xl text-xl ${
                  isDarkMode ? "text-colordarklogo" : "text-colorbrightlogo"
                }`}
              >
                {sentence.map((letter, index) => (
                  <TextSpan className="" key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                ))}
              </h1>
              <div
                className={`h-[2px] lg:px-5 ml-2 lg:mt-2 mt-1 px-3 ${
                  isDarkMode ? "text-colordarklogo" : "text-colorbrightlogo"
                }`}
              ></div>
            </span>

            {/* Based in Belgium title */}

            <h2
              className={`2xl:text-7xl md:text-5xl text-3xl  pt-3 ${
                isDarkMode ? "text-gray-300" : "text-colorbrightsecond"
              }`}
            >
              {sentence2.map((letter, index) => (
                <TextSpan className="w-full" key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              ))}
            </h2>

            {/* Description Section */}

            <div className="ml-0.5 lg:ml-1">
              <p
                className={`text-gray-300/70 text-[14px] md:text-xl pt-4 pr-[10%] ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Excited to bring fresh perspectives to the web development
                scene! As a newcomer to the market, I&apos;m passionate about
                creating innovative and user-friendly experiences. Let&apos;s
                build something amazing together!
              </p>

              {/* Email */}

              <p
                className={`lg:pt-4 pt-2 text-lg md:text-2xl text-${
                  isDarkMode ? "colordarklogo" : "colorbrightlogo"
                }`}
              >
                onyrusu@gmail.com
              </p>
            </div>

            {/* Button Social Section */}

            <div className="flex flex-col lg:flex-row ">
              {/* Github Button */}

              <section
                className={`flex items-center justify-center py-2 px-2 bg-${
                  isDarkMode ? "colordarksecond" : "navcolor"
                } text-${
                  isDarkMode ? "colordarklogo" : "colorbrightlogo"
                } rounded-xl mt-2 lg:mt-5 w-30 lg:w-52 h-10 lg:h-14 transition-transform duration-300 ease-in-out shadow-md hover:shadow-lg hover:scale-105`}
                onClick={openGitHubProfile}
              >
                <PacmanIcon />
                <GitHubAnimation />
              </section>

              {/* Linkedin button */}

              <LinkedInButton isDarkMode={isDarkMode} openLinkedInProfile={openLinkedInProfile} />
            </div>
          </motion.div>
        </section>
      </main>
    </SlideInMotion>
  );
}

export default App;
