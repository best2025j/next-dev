import React from "react";
import ViewAllCourseIcon from "../icons/ViewAllCourseIcon";
import image1 from "../../assets/images/KTA. logo (1).png";
import image2 from "../../assets/images/KTA. logo(2).png";
import Image from "next/image";
import ButtonWhite from "../buttons/ButtonWhite";
import Link from "next/link";

const SectionContents = () => {
  return (
    <div className="bg-[#C6E7FF] dark:bg-black w-full h-full flex justify-between items-center relative">
      <Image className="w-20 h-24 md:w-full md:h-full" src={image1} alt="" />
      <div className="absolute  left-0 right-0 space-y-4 text-center justify-center flex flex-col">
        <h1 className="md:text-5xl md:pt-0 text-[18px] font-bold">
          Let’s start your tech journey
        </h1>

        <div className="md:py-6 flex items-center justify-center ">
          <Link href="/courses">
            {/* Use Link for navigation */}
            <ButtonWhite
              className={
                "flex items-center md:text-base text-xs text-center justify-center"
              }
              label={
                <>
                  View Courses <ViewAllCourseIcon />
                </>
              }
            />
          </Link>
        </div>
      </div>
      <Image className="w-20 h-24 md:w-full md:h-full" src={image2} alt="" />
    </div>
  );
};

export default SectionContents;
