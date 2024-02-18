import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from "../components/ThemeContext";
const GitHubAnimation = () => {
  const text = "Github".split("");
  const [animationKey, setAnimationKey] = useState(0);
  const { isDarkMode } = useTheme();
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey();
    }, 0);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-${isDarkMode ? "colordarklogo" : "colorbrightlogo"} text-[15px] lg:text-xl flex overflow-hidden`}>
      <AnimatePresence>
        {text.map((letter, index) => (
          <motion.span
            className='ml-1 mr-2'
            key={`${animationKey}-${index}`}
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: [-200, 0, 0, -200], opacity: [1, 1, 1, 1] }}
            transition={{ ease: 'linear', duration: 5, repeat: Infinity ,}}
            style={{ display: 'inline-block' }}
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default GitHubAnimation;
