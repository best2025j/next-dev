// import React from "react";
import CoWorkingSpacesSVG from "../icons/CoWorkingSpacesSVG";
import EssentialICTTrainingSVG from "../icons/EssentialICTTrainingSVG";
import SpecializedProgrammesSVG from "../icons/SpecializedProgrammesSVG";

const Sections = () => {
  // SVG components
  const data = [
    {
      svg: <CoWorkingSpacesSVG />,
      headings: "Co-working spaces",
      paragraph:
        "With 24 hours electricity and power supply our co-working space is more than just a place to work its a collaborative hub.",
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
    <div className="py-14 bg-[#ffffff] dark:bg-black md:px-14 px-4">
      <div className="space-y-[16px] lg:max-w-[590px] lg:mx-auto md:max-w-[480px] text-center lg:mb-10 lg:mt-10">
        <h1 className="md:text-[43px] font-bold text-[24px]">
          What we have to offer
        </h1>
        <p className="lg:text-[18px] md:text-lg text-base font-normal text-[#4F616D]">
          At Kwaratech Academy, we&apos;re not just another tech education
          provider; we&apos;re your partner in unlocking a world of
          opportunities, and here is why you should choose us...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 py-6 lg:w-[95%] mx-auto">
        {data.map((item, index) => (
          <div
            className="relative bg-[#f4f6f9] shadow-sm border-t-transparent border-l-transparent border-[3px] border-b-[#e4e4e4] border-r-[#e4e4e4] dark:bg-slate-800 lg:w-[24rem] sm:w-[16rem] lg:py-[46px] py-[56px] rounded-ss-[65px] rounded-ee-[65px] lg:px-10 md:px-[24px] space-y-2 p-4"
            key={index}
          >
            <div>{item.svg}</div>
            <h1 className="font-bold text-[24px] md:text-4xl w-[288px]">
              {item.headings}
            </h1>
            <p className="lg:text-[18px] text-md py-[16px]">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Sections;
