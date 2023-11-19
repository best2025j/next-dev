import { useState } from "react";
import "animate.css";
import ButtonWhite from "../Buttons/ButtonWhite";
import ViewAllCourseIcon from "../icons/ViewAllCourseIcon";
import { Link } from "react-router-dom";

const CarouselCards = () => {
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
      <div className=" px-4 md:ml-32 py-32 space-y-[110px]">
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

        <div className="hidden md:flex justify-between gap-6 items-start py-6">
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
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="md:h-full w-full h-96"
                  />
                </div>

                {hoveredIndex === index && (
                  <div className="absolute animate__animated animate__zoomIn delay-120 ease-in-out duration-100 inset-y-20 flex justify-center items-center h-full w-[500px]">
                    <img
                      src={item.fullImage}
                      alt=""
                      className="md:h-full h-96 w-full"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pr-6 hidden md:flex">
            <img src="/KTA.png" alt="" />
          </div>
        </div>

        <div className="md:hidden block space-y-14">
          <div className="space-y-3">
            <h1 className="text-[24px] font-bold">
              01. Introduction to HTML and CSS
            </h1>
            <img src="/frontend-full.png" alt="" />
          </div>

          <div className="space-y-3">
            <h1 className="text-[24px] font-bold">02. python and java</h1>
            <img src="/backend-full.png" alt="" />
          </div>

          <div className="space-y-3">
            <h1 className="text-[24px] font-bold">03. Design </h1>
            <img src="/design-full.png" alt="" />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-[24px] font-bold capitalize">
              04. Data Analysis
            </h1>
            <img src="/dataScience-full.png" alt="" />
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
