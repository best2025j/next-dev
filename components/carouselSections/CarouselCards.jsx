import { useState } from "react";
import "animate.css";
import ViewAllCourseIcon from "../icons/ViewAllCourseIcon";
import Image from "next/image";
import Link from "next/link";
import ButtonWhite from "../buttons/ButtonWhite";

const CarouselCards = () => {
  const staffData = [
    {
      headings: "Introduction to HTML and CSS",
      fullImage: "/",
    },
    {
      headings: "python and java",
      fullImage: "/",
    },
    {
      headings: "Design",
      fullImage: "/",
    },
    {
      headings: "Data Analysis",
      fullImage: "/",
    },
  ];

  return (
    <div className="w-full h-full">
      <div className=" px-4 md:ml-12 py-32 space-y-[110px]">
        <div className="h-full w-full space-y-3">
          <h1 className="sm:text-5xl text-xl font-bold">Explore our courses</h1>
          <div className="md:max-w-[480px]">
            <p className="text-[#4F616D] md:text-base text-xs">
              At KTA, we offer a diverse range of tech courses that cater to
              beginners and experts alike. From web development to data science,
              our curriculum is designed to equip you with practical skills that
              matter in today&apos;s tech-driven world. Join us on this
              educational journey and unlock your potential.
            </p>
          </div>
        </div>

        <div className="md:flex hidden">
          <div className="">
            <div className="flex flex-col md:flex-row mx-auto w-full h-full md:space-y-0 space-y-4 md:space-x-4 space-x-0">
              <div>
                <Image
                  width={500}
                  height={500}
                  src="/frontend-full.png"
                  alt=""
                  quality={100}
                  className="w-[193px] h-[286px] md:h-auto md:w-auto"
                />
              </div>{" "}
              <div>
                <Image
                  width={500}
                  height={500}
                  src="/backend-full.png"
                  alt=""
                  quality={100}
                  className="w-[193px] h-[286px] md:h-auto md:w-auto"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row mx-auto w-full h-full md:space-y-0 space-y-4 md:space-x-4 space-x-0">
              <div>
                <Image
                  width={500}
                  height={500}
                  src="/design-full.png"
                  alt=""
                  quality={100}
                  className="w-[193px] h-[286px] md:h-auto md:w-auto"
                />
              </div>{" "}
              <div>
                <Image
                  width={500}
                  height={500}
                  src="/dataScience-full.png"
                  alt=""
                  quality={100}
                  className="w-[193px] h-[286px] md:h-auto md:w-auto"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:flex">
            <Image
              src="/KTA.png"
              alt=""
              width={500}
              height={500}
              className=""
            />
          </div>
        </div>

        <div className="md:hidden block space-y-14">
          <div className="space-y-3">
            <h1 className="text-[24px] font-bold">
              01. Introduction to HTML and CSS
            </h1>
            <Image width={500} height={500} src="/frontend-full.png" alt="" />
          </div>

          <div className="space-y-3">
            <h1 className="text-[24px] font-bold">02. python and java</h1>
            <Image width={500} height={500} src="/backend-full.png" alt="" />
          </div>

          <div className="space-y-3">
            <h1 className="text-[24px] font-bold">03. Design </h1>
            <Image width={500} height={500} src="/design-full.png" alt="" />
          </div>

          <div className="space-y-3">
            <h1 className="text-[24px] font-bold capitalize">
              04. Data Analysis
            </h1>
            <Image
              width={500}
              height={500}
              src="/dataScience-full.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="py-6 flex items-center justify-center ">
        <Link href={`/courses`}>
          {/* Use kLink for navigation */}
          <ButtonWhite
            className={"flex items-center text-base text-center justify-center"}
            label={
              <>
                View all courses <ViewAllCourseIcon />
              </>
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default CarouselCards;
