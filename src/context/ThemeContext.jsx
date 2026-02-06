import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const initTheme = localStorage.getItem("theme") || "light";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme",theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
