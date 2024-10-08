import React from "react";
import SectionContents from "../../components/ui/SectionContents";
import Footer from "../../components/layout/Footer";
import ButtonWhite from "../../components/buttons/ButtonWhite";
import ViewAllCourseIcon from "../../components/icons/ViewAllCourseIcon";
import image from "../../assets/images//ui_ux.png";
import Image from "next/image";
import Link from "next/link";

export default function UI_UX() {
  // Access the &apos;id&apos; parameter from the route

  return (
    <>
      <div className="md:py-40 md:px-[80px] py-20 px-[16px]">
        <h1 className="md:text-[48px] text-[24px] font-bold">Courses</h1>
        <p className="text-sm md:text-base font-normal text-[#4F616D]">
          Unlock Your Potential with Kwaratech Academy&apos;s Diverse Range of
          Tech Courses
        </p>

        {/* Added a "Back to Courses" button using the Link component */}
        <Link href="/courses">
          <button className="underline text-blue-400">Back to Courses</button>
        </Link>

        <div className="pt-14 h-full w-full">
          <Image priority={true} src={image} alt="no image" />
          <div className="flex justify-between px-2 md:py-[40px] bg-white items-start py-6">
            <div className="space-y-4 w-[439px]">
              <h1 className="font-bold text-[24px] md:text-[48px]">
                UI/UX Design{" "}
              </h1>
              <p className="md:text-base w-[201px] md:w-auto text-xs font-normal text-[#4F616D]">
                Create exceptional user experiences and user-friendly interfaces
                with courses in UI/UX design.
              </p>
            </div>

            <div className="space-y-4 ">
              <h1 className="font-bold text-[14px] md:text-[36px]">
                Instructor
              </h1>
              <span className="text-[10px]">Odekunle J.T</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 pt-[48px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[#00AFF0] font-bold text-[24px] md:text-[30px]">
              UI/UX Design
            </h1>
            <span className="text-[#001E2D] font-[600] text-sm md:text-[28px]">
              Duration: 2 months
            </span>
          </div>

          <div className=" text-[#4F616D] space-y-3 ">
            <h1>Course Overview :</h1>

            <ul className="list-disc list-inside md:text-[18px] text-sm font-normal pt-4 md:pt-0 space-y-2 md:space-y-0">
              <li>
                Dive into the world of UI/UX design, where aesthetics meet
                functionality.
              </li>
              <li>
                Learn the principles of user-centered design and create
                intuitive digital experiences.
              </li>
              <li>
                Understand user research, wireframing, prototyping, and
                usability testing.
              </li>

              <h1> What You&apos;ll Learn</h1>

              <li>
                User-Centered Design: Put the user at the forefront of your
                design decisions.
              </li>
              <li>
                Information Architecture: Organize content for maximum clarity
                and accessibility.
              </li>
              <li>
                Wireframing and Prototyping: Create visual blueprints and
                interactive prototypes.
              </li>
              <li>
                Usability Testing: Ensure your designs are intuitive and
                user-friendly.
              </li>
              <li>
                Visual Design Principles: Enhance your skills in creating
                visually appealing interfaces.
              </li>
              <li>
                Tools and Software: Master industry-standard design tools such
                as Figma,Miro, Sketch and Lucid.
              </li>
            </ul>
          </div>

          <div className="py-6 pt-[64px] w-full ">
            <Link href="https://wa.me/+2347011198112">
              <ButtonWhite
                className={
                  "flex items-center text-base text-center justify-center w-full md:w-[399px]"
                }
                label={
                  <>
                    Enroll now <ViewAllCourseIcon />
                  </>
                }
              />
            </Link>
          </div>
        </div>
      </div>

      <SectionContents />
      <Footer />
    </>
  );
}
