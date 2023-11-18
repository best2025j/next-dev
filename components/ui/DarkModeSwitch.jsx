import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import LightModeSvg from "../../assets/svgs/Lightmode.svg";
import DarkModeSvg from "../../assets/svgs/Darkmode.svg";

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  console.log("Current theme:", theme);

  return (
    <div>
      <Image
        src={theme === "dark" ? LightModeSvg : DarkModeSvg}
        alt={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        width={38}
        height={38} 
        className="cursor-pointer"
        onClick={switchTheme}
      />
    </div>
  );
}
