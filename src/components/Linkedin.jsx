import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import PropTypes from "prop-types";

const LinkedInButton = ({ isDarkMode, openLinkedInProfile }) => {
  return (
    <motion.section
      className={`relative flex overflow-hidden items-center justify-center  ml-0 lg:ml-5 bg-${
        isDarkMode ? "colordarksecond" : "navcolor"
      } text-${
        isDarkMode ? "colordarklogo" : "colorbrightlogo"
      } rounded-xl mt-4 lg:mt-5 w-30 lg:w-52 h-11 lg:h-14 lg:text-2xl text-[15px] transition-transform duration-300 ease-in-out shadow-md hover:shadow-lg hover:scale-105`}
      onClick={openLinkedInProfile}
      whileHover={{
        scale: 1.05,
      }}
    >
      <motion.div
        className={`bg-${
          isDarkMode ? "colordarksecond" : "navcolor"
        } absolute w-full left-0`}
        animate={{ x: ["-7%", "95%", "-7%"] }}
        transition={{ duration: 4.8, repeat: Infinity, delay: 1 }}
      >
        <FaLinkedin className="lg:text-[42px] text-3xl" />
      </motion.div>
      <motion.p className="lg:text-xl w-full flex pl-2 items-center justify-center text-[14px] tracking-[0.60rem]">
        LinkedIn
      </motion.p>
    </motion.section>
  );
};

LinkedInButton.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  openLinkedInProfile: PropTypes.func.isRequired,
};

export default LinkedInButton;
