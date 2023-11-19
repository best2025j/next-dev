import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import LightModeSvg from "../../assets/svgs/Lightmode.svg";
import DarkModeSvg from "../../assets/svgs/Darkmode.svg";

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme == "dark" ? (
        <Image
          src={LightModeSvg}
          alt="dark-mode"
          width={38}
          height={38}
          className="cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <Image
          src={DarkModeSvg}
          alt="dark-mode"
          width={38}
          height={38}
          className="cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
