import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(
    () => window.localStorage.getItem("mode") === "dark"
  );

  React.useEffect(() => {
    const mode = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", mode);
    window.localStorage.setItem("mode", mode);
  }, [isDarkMode]);

  const toggle = () => setIsDarkMode(!isDarkMode);

  return (
    <div id="🎚" onClick={toggle} role="button" onKeyDown={toggle} tabIndex={0}>
      {isDarkMode ? (
        <HiMoon size="24px" color="#FEFCD7" />
      ) : (
        <HiSun size="24px" color="#FDB813" />
      )}
    </div>
  );
};

export default DarkMode;
