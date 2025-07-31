import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const DarkLight = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext); // ✅ FIXED HERE

  return (
    <div
      className={`p-4 h-lvh flex flex-col justify-center items-center ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h1
        className={`my-4 text-xl ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}
      >
        Dark Light Mode Website
      </h1>
      <p
        className={`my-4 text-lg ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}
      >
        Hello!! My React 19
      </p>
      <button
        onClick={handleToggleTheme}
        className="hover:bg-blue-600 text-white rounded-md mt-4 p-4"
      >
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};
