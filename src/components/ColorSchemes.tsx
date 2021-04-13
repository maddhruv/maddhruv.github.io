import React from "react";

enum COLOR_SCHEMES {
  GREEN = "green",
  BLUE = "blue",
  YELLOW = "yellow",
  PURPLE = "purple",
  RED = "red",
  INVERT = "invert",
}

const ColorSchemes: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(
    () => window.localStorage.getItem("mode") === "dark"
  );

  const [colorScheme, setColorScheme] = React.useState<COLOR_SCHEMES>(
    () => window.localStorage.getItem("scheme") as COLOR_SCHEMES
  );

  React.useEffect(() => {
    const mode = isDarkMode ? "dark" : "light";
    console.log(mode);
    document.documentElement.setAttribute("data-theme", mode);
    document.documentElement.setAttribute(
      "data-color",
      `${colorScheme}-${mode}`
    );
    window.localStorage.setItem("mode", mode);
  }, [isDarkMode]);

  React.useEffect(() => {
    const scheme = isDarkMode ? `${colorScheme}-dark` : `${colorScheme}-light`;
    document.documentElement.setAttribute("data-color", scheme);
    window.localStorage.setItem("scheme", colorScheme);
  }, [colorScheme]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      <div id="🎚" onClick={toggleDarkMode} role="button" tabIndex={0}>
        {isDarkMode ? <div className="gg-moon" /> : <div className="gg-sun" />}
      </div>
      <div
        id="💚"
        className="🎨 gg-shape-circle"
        onClick={() => setColorScheme(COLOR_SCHEMES.GREEN)}
      />
      <div
        id="💙"
        className="🎨 gg-shape-triangle"
        onClick={() => setColorScheme(COLOR_SCHEMES.BLUE)}
      />
      <div
        id="💛"
        className="🎨 gg-shape-square"
        onClick={() => setColorScheme(COLOR_SCHEMES.YELLOW)}
      />
      <div
        id="💜"
        className="🎨 gg-shape-hexagon"
        onClick={() => setColorScheme(COLOR_SCHEMES.PURPLE)}
      />
      <div
        id="❤️"
        className="🎨 gg-shape-zigzag"
        onClick={() => setColorScheme(COLOR_SCHEMES.RED)}
      />
      <div
        id="🖤"
        className="🎨 gg-edit-black-point"
        onClick={() => setColorScheme(COLOR_SCHEMES.INVERT)}
      />
    </>
  );
};

export default ColorSchemes;
