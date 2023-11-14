import { useState } from "react";
import light_mode from "../../assets/svgs/Lightmode.svg";
import dark_mode from "../../assets/svgs/Darkmode.svg";
import Image from "next/image";

const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme == "dark" ? (
        <Image
          src={light_mode}
          alt="dark-mode"
          width={38}
          height={38}
          className="cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <Image
          src={dark_mode}
          alt="dark-mode"
          width={38}
          height={38}
          className="cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;
