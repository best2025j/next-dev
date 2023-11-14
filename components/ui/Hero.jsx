// import React from "react";
"use client";

export const Hero = () => {
  return (
    <div className="pt-56 md:py-0 w-full md:h-screen h-[16rem] sm:px-[64px] px-[36px] flex flex-col justify-center text-center mx-auto items-center">
      <div className="md:max-w-[852px] space-y-2">
        <h1 className="bg-[#4F616D] rounded-full text-white p-2 w-44 text-center mx-auto ">
          Kwaratech Academy
        </h1>

        <h1 className="font-bold md:text-6xl text-lg">
          Your Journey to a
          <span className="text-[#00AFF0] bg-[#C6E7FF] px-6 rounded-full">
            rewarding
          </span>
          <br />
          tech career begins now !
        </h1>
      </div>
    </div>
  );
};
