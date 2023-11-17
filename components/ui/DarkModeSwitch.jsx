import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import light from "../../assets/svgs/Lightmode.svg";
import dark from "../../assets/svgs/Darkmode.svg";

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <Image
        src={theme === "dark" ? light : dark}
        alt={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        width={38}
        height={38}
        className="cursor-pointer"
        onClick={switchTheme}
        property="100"
      />
    </div>
  );
}
