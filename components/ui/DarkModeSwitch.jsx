import  { useState } from "react"; 
import light_mode from "../../assets/svgs/Lightmode.svg";
import dark_mode from "../../assets/svgs/Darkmode.svg";

const DarkModeSwitch = () => {
  const [themeToggle, setThemeToggle] = useState(
    localStorage.getItem("color-theme") || "dark"
  );

  const toggleTheme = () => {
    setThemeToggle((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div>
      {themeToggle === "dark" ? (
        <img
          src={light_mode}
          alt="dark-mode"
          className="w-10 h-10 cursor-pointer"
          onClick={toggleTheme}
        />
      ) : (
        <img
          src={dark_mode}
          alt="dark-mode"
          className="w-10 h-10 cursor-pointer"
          onClick={toggleTheme}
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;
