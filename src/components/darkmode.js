import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default () => {
  const [isDarkMode, setIsDarkMode] = React.useState(
    () => window.localStorage.getItem("mode") === "dark"
  );

  React.useEffect(() => {
    const mode = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", mode);
    window.localStorage.setItem("mode", mode);
  }, [isDarkMode]);

  return (
    <DarkModeToggle
      speed={2.1}
      checked={isDarkMode}
      onChange={setIsDarkMode}
      size={50}
    />
  );
};
