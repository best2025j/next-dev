"use client";
// import "animate.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonWhite } from "../Buttons/ButtonWhite";
import { ViewAllCourseIcon } from "../icons/ViewAllCourseIcon";

export const CarouselCards = () => {
  const staffData = [
    {
      thumbnail: "/Courses card for html.png",
      fullImage: "/frontend-full.png",
    },
    {
      thumbnail: "/Courses card for html (1).png",
      fullImage: "/backend-full.png",
    },
    {
      thumbnail: "/Courses card for html (2).png",
      fullImage: "/design-full.png",
    },
    {
      thumbnail: "/Courses card for html (3).png",
      fullImage: "/dataScience-full.png",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full h-full">
      <div className="ml-8 px-4 md:ml-32 py-32 space-y-[110px]">
        <div className="h-full w-full space-y-3">
          <h1 className="sm:text-5xl text-xl font-bold">Explore our courses</h1>
          <div className="max-w-[480px]">
            <p className="text-[#4F616D] md:text-base text-xs">
              At KTA, we offer a diverse range of tech courses that cater to
              beginners and experts alike. From web development to data science,
              our curriculum is designed to equip you with practical skills that
              matter in today&apos;s tech-driven world. Join us on this
              educational journey and unlock your potential.
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-6 items-start py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-6">
            {staffData.map((item, index) => (
              <div
                className={`relative transform ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="image-container">
                  <Image
                    src={item.thumbnail}
                    alt=""
                    className="md:w-full md:h-full w-full h-96"
                  />
                </div>

                {hoveredIndex === index && (
                  <div className="absolute animate__animated animate__zoomIn delay-120 ease-in-out duration-100 inset-y-20 flex justify-center items-center h-full w-[500px]">
                    <Image
                      src={item.fullImage}
                      alt=""
                      className="h-[620px] w-full"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pr-6 hidden md:flex">
            <Image src="/KTA.png" alt="" />
          </div>
        </div>
      </div>

      <div className="py-6 flex items-center justify-center ">
        <Link to={`/courses`}>
          {/* Use Link for navigation */}
          <ButtonWhite
            className={"flex items-center text-base text-center justify-center"}
            label={
              <>
                View Courses <ViewAllCourseIcon />
              </>
            }
          />
        </Link>
      </div>
    </div>
  );
};
