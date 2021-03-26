import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";

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
    <div id="dark-mode-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? (
        <HiMoon size="24px" color="#FEFCD7" />
      ) : (
        <HiSun size="24px" color="#FDB813" />
      )}
    </div>
  );
};
