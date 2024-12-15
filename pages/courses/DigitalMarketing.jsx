import React from "react";
import SectionContents from "../../components/ui/SectionContents";
import Footer from "../../components/layout/Footer";
import ButtonWhite from "../../components/buttons/ButtonWhite";
import ViewAllCourseIcon from "../../components/icons/ViewAllCourseIcon";
import image from "../../assets/images/cyber.png";
import Image from "next/image";
import Link from "next/link";

export default function DigitalMarketing() {
  // Access the 'id' parameter from the route

  return (
    <>
      <div className="md:py-40 md:px-[80px] py-20 px-[16px]">
        <h1 className="md:text-[48px] text-[24px] font-bold">Courses</h1>
        <p className="text-sm md:text-base font-normal text-[#4F616D]">
          Unlock Your Potential with Kwara-tech Academy&apos;s Diverse Range of
          Tech Courses
        </p>

        <Link href="/courses">
          <button className="underline text-blue-400">Back to Courses</button>
        </Link>
        <div className="pt-14 h-full">
          <Image priority={true} src={image} alt="no image" />
          <div className="flex justify-between px-2 md:py-[40px] bg-white items-start py-6">
            <div className="space-y-4 w-[439px]">
              <h1 className="font-bold text-[24px] md:text-[48px]">
                Digital Marketing{" "}
              </h1>
              <p className="md:text-base w-[201px] md:w-auto text-xs font-normal text-[#4F616D]">
                Master digital marketing and affiliate strategies to promote
                products and services effectively online.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h1 className="font-bold text-[14px] md:text-[36px]">
                Instructor
              </h1>
              <span className="text-xs md:text-[18px]"> Adeniyi Ogundiran</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 pt-[48px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[#00AFF0] font-bold text-[24px] md:text-[30px]">
              Digital Marketing{" "}
            </h1>
            <span className="text-[#001E2D] font-[600] text-sm md:text-[28px]">
              Duration: 3 months
            </span>
          </div>

          <div className=" text-[#4F616D] space-y-3 ">
            <h1>Course Overview :</h1>

            <ul className="list-disc list-inside md:text-[18px] text-sm font-normal pt-4 md:pt-0 space-y-2 md:space-y-0">
              <li>
                Gain a deep understanding of the digital marketing landscape,
                its importance, and its role in contemporary business and brand
                promotion.
              </li>
              <li>
                Create and implement effective digital marketing campaigns,
                drive meaningful results, and advance your career in the dynamic
                world.
              </li>
              <li>
                Explore a wide range of digital marketing strategies, tactics,
                and tools, enabling you to create and implement effective online
                marketing campaigns that yield progressive results.
              </li>

              <h1> What You&apos;ll Learn</h1>

              <li>
                Master digital marketing to reach your target audience, build
                your brand, and drive business growth.
              </li>
              <li>
                Master web development and content creation to craft
                user-friendly web experiences.
              </li>
              <li>
                Master SEO and social media marketing to boost visibility, drive
                traffic, engage audiences, and rank higher in search results.
              </li>
              <li>
                Email marketing, PPC advertising, and content marketing are
                essential digital marketing channels to nurture leads, build
                relationships, and drive conversions.
              </li>
              <li>
                Master analytics, CRO, and digital marketing tools to
                turbocharge your campaigns and achieve superior results.
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
