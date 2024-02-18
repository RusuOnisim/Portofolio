import { motion } from "framer-motion";
import { useTheme } from "../components/ThemeContext";

const ToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

 
  return (
    <motion.label
      className="absolute bottom-2 self-center cursor-pointer z-10"
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
          lg:w-11 lg:h-6 w-9 h-5
          ${isDarkMode ? 'bg-colordarklogo dark:bg-colordarksecond' : 'bg-colorbrightsecond'}
          rounded-full peer 
          ${isDarkMode ? 'peer-checked:after:translate-x-full' : 'rtl:peer-checked:after:-translate-x-full'} 
          peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
          after:bg-white after:border-gray-300 after:border after:rounded-full lg:after:h-5 lg:after:w-5 after:h-4 after:w-4
          after:transition-all dark:border-gray-600 
          peer-checked:bg-colordarklogo
        `}
      ></div>
    </motion.label>
  );
};

export default ToggleButton;
