import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
    } else if (saved === "false") {
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem("darkMode", newValue);
      return newValue;
    });
  };

  // Dynamic styles based on dark mode
  const themeStyles = {
    background: darkMode ? "#0f172a" : "#f1f5f9",
    color: darkMode ? "white" : "black",
    minHeight: "100vh",
    transition: "all 0.3s ease",
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div style={themeStyles}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;