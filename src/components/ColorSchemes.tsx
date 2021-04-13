import React from "react";
import useSound from "use-sound";

// @ts-ignore
import kukoo from "../../content/kukoo.mp3";

enum COLOR_SCHEMES {
  GREEN = "green",
  BLUE = "blue",
  YELLOW = "yellow",
  PURPLE = "purple",
  RED = "red",
  INVERT = "invert",
}

const ColorSchemes: React.FC = () => {
  const [playKukoo] = useSound(kukoo, {
    volume: 0.4,
  });

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    playKukoo();
  };

  const switchColorScheme = (color: COLOR_SCHEMES) => {
    setColorScheme(color);
    playKukoo();
  };

  return (
    <>
      <div id="🎚" onClick={toggleDarkMode} role="button" tabIndex={0}>
        {isDarkMode ? <div className="gg-moon" /> : <div className="gg-sun" />}
      </div>
      <div
        id="💚"
        className="🎨 gg-shape-circle"
        onClick={() => switchColorScheme(COLOR_SCHEMES.GREEN)}
      />
      <div
        id="💙"
        className="🎨 gg-shape-triangle"
        onClick={() => switchColorScheme(COLOR_SCHEMES.BLUE)}
      />
      <div
        id="💛"
        className="🎨 gg-shape-square"
        onClick={() => switchColorScheme(COLOR_SCHEMES.YELLOW)}
      />
      <div
        id="💜"
        className="🎨 gg-shape-hexagon"
        onClick={() => switchColorScheme(COLOR_SCHEMES.PURPLE)}
      />
      <div
        id="❤️"
        className="🎨 gg-shape-zigzag"
        onClick={() => switchColorScheme(COLOR_SCHEMES.RED)}
      />
      <div
        id="🖤"
        className="🎨 gg-edit-black-point"
        onClick={() => switchColorScheme(COLOR_SCHEMES.INVERT)}
      />
    </>
  );
};

export default ColorSchemes;
