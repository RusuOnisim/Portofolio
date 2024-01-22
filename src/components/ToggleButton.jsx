
import { motion } from "framer-motion";
import { useTheme } from "../components/ThemeContext";

const ToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const clickAnimation = {
    hidden: { x:"48vw", opacity: 0 },
    visible: {
        x:10,
      opacity: 1,
      transition: {
        duration: 1.25,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  return (
    <motion.label
      className="absolute top-4 right-4 flex items-center cursor-pointer z-10"
      variants={clickAnimation}
      initial="hidden"
      animate="visible"
    >
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={toggleTheme}
        checked={isDarkMode}
      />
      <div
        className={`
          w-11 h-6 
          ${isDarkMode ? 'bg-colordarklogo dark:bg-colordarksecond' : 'bg-colorbrightsecond'}
          rounded-full peer 
          ${isDarkMode ? 'peer-checked:after:translate-x-full' : 'rtl:peer-checked:after:-translate-x-full'} 
          peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
          after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
          after:transition-all dark:border-gray-600 
          peer-checked:bg-colordarklogo
        `}
      ></div>
    </motion.label>
  );
};

export default ToggleButton;
