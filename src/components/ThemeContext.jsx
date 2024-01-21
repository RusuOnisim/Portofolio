// ThemeContext.js

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Retrieve theme preference from localStorage on component mount
    const storedTheme = localStorage.getItem('isDarkMode');
    setIsDarkMode(storedTheme === 'true');
    setIsLoaded(true);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevIsDarkMode) => {
      const newIsDarkMode = !prevIsDarkMode;

      // Store the updated theme preference in localStorage
      localStorage.setItem('isDarkMode', String(newIsDarkMode));

      return newIsDarkMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {isLoaded && children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
