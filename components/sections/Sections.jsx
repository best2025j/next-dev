// import React from "react";
"use client";

import { CoWorkingSpacesSVG } from "../icons/CoWorkingSpacesSVG";
import { EssentialICTTrainingSVG } from "../icons/EssentialICTTrainingSVG";
import { SpecializedProgrammesSVG } from "../icons/SpecializedProgrammesSVG";

export const Sections = () => {
  // SVG components
  const data = [
    {
      svg: <CoWorkingSpacesSVG />,
      headings: "Co-working spaces",
      paragraph:
        "With 24 hours electricity and power supply our co-working space is more than just a place to work; it&apos;s a collaborative hub.",
    },
    {
      svg: <EssentialICTTrainingSVG />,
      headings: "Essential ICT Training",
      paragraph:
        "Our training programs are tailored to suit your skill level ensuring that you build a strong foundation in tech.",
    },
    {
      svg: <SpecializedProgrammesSVG />,
      headings: "Specialized Programmes",
      paragraph:
        "Our specialized programs, like Tech4copper and Tech4Women, are designed to empower individuals and communities.",
    },
  ];

  return (
    <div className="py-20 bg-[#ffffff] px-14">
      <div className="space-y-[16px]">
        <h1 className="md:text-5xl font-bold text-[24px]">
          What we have to offer
        </h1>
        <p className="text-lg font-normal text-[#4F616D] w-[294px] md:w-[480px]">
          At Kwaratech Academy, we&apos;re not just another tech education
          provider; we&apos;re your partner in unlocking a world of
          opportunities, and here is why you should choose us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-6">
        {data.map((item, index) => (
          <div
            className="relative bg-[#FBFCFF] py-[56px] rounded-3xl px-[24px] space-y-2"
            key={index}
          >
            <div>{item.svg}</div>
            <h1 className="font-bold text-[24px] md:text-4xl w-[288px]">
              {item.headings}
            </h1>
            <p className="text-md py-[16px]">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
