import React from "react";
import ViewAllCourseIcon from "../icons/ViewAllCourseIcon";
import image1 from "../../assets/images/KTA. logo (1).png";
import image2 from "../../assets/images/KTA. logo(2).png";
import Image from "next/image";
import ButtonWhite from "../buttons/ButtonWhite";
import Link from "next/link";

const SectionContents = () => {
  return (
    <div className="bg-[#C6E7FF] dark:bg-slate-900 w-full h-[400px] hidden md:flex justify-between items-center relative">
      <Image
        priority={true}
        className="w-20 h-24 md:w-[674.984px] md:h-full"
        src={image1}
        alt=""
        width={500}
        height={500}
        quality={100}
      />

      <div className="absolute left-0 right-0 space-y-4 text-center justify-center flex flex-col">
        <h1 className="md:text-5xl md:pt-0 text-[18px] font-bold">
          Let’s start your tech journey
        </h1>

        <div className=" md:py-6 flex items-center justify-center ">
          <Link href="/courses">
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

      <Image
        priority={true}
        className="w-20 h-24 md:w-[674.984px] md:h-full"
        src={image2}
        alt=""
        width={500}
        height={500}
        quality={100}
      />
    </div>
  );
};

export default SectionContents;
