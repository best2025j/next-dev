import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const originalText = "rewarding";
    let index = 0;

    const Id = setInterval(() => {
      setText((prevText) => {
        if (index < originalText.length) {
          return prevText + originalText[index++];
        } else {
          clearInterval(Id);
          return originalText;
        }
      });
      // Adjust the interval duration as needed
    }, 100);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(Id);
  }, []); // Ensure the dependency array is empty to run the effect only once

  return (
    <div className="md:pt-56 pt-44 md:py-0 w-full md:h-full h-[16rem] sm:px-[64px] px-[36px] flex flex-col justify-center text-center mx-auto items-center">
      <div className="md:max-w-[852px] space-y-2">
        <div className="bg-[#4F616D] rounded-full text-white p-2 w-44 text-center mx-auto ">
          Kwaratech Academy
        </div>

        <h1 className="font-bold md:text-6xl text-lg animate__animated animate__zoomIn">
          Your journey to a
          <span className="text-[#00AFF0] bg-[#C6E7FF] dark:bg-slate-900 md:px-6 px-4 py-1 rounded-full animate-fade-in">
            {text}
          </span>
          <br />
          tech career begins now !
        </h1>
      </div>
    </div>
  );
};

export default Hero;
