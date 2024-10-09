import React from "react";
import SectionContents from "../../components/ui/SectionContents";
import Footer from "../../components/layout/Footer";
import ButtonWhite from "../../components/buttons/ButtonWhite";
import ViewAllCourseIcon from "../../components/icons/ViewAllCourseIcon";
import image from "../../assets/images//vr.png";
import Image from "next/image";
import Link from "next/link";

export default function VA_RemoteJobs() {
  // Access the 'id' parameter from the route

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
        <div className="pt-14 h-full bg-white md:py-[40px] py-6 rounded-xl">
          <Image src={image} alt="no image" />
          <div className="flex justify-between px-2 items-start">
            <div className="space-y-4 w-[439px]">
              <h1 className="font-bold text-[24px] md:text-[48px]">
                Virtual Assistance and Remote Jobs{" "}
              </h1>
              <p className="md:text-base w-[201px] md:w-auto text-xs font-normal text-[#4F616D]">
                Learn about working effectively in virtual environments,
                handling tasks remotely, and building a career in remote work.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h1 className="font-bold text-[14px] md:text-[36px]">
                Instructor
              </h1>
              <span className="text-xs md:text-[18px]"> Azeez</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 pt-[48px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[#00AFF0] font-bold text-[24px] md:text-[30px]">
              Virtual Assistance and Remote Jobs
            </h1>
            <span className="text-[#001E2D] font-[600] text-sm md:text-[28px]">
              Duration: 3 months
            </span>
          </div>

          <div className=" text-[#4F616D] space-y-3 ">
            <h1>Course Overview :</h1>

            <ul className="list-disc list-inside md:text-[18px] text-sm font-normal pt-4 md:pt-0 space-y-2 md:space-y-0">
              <li>
                Introduction to virtual assistance and remote work and
                identifying your skills and interests.
              </li>
              <li>Essential skills for virtual assistants.</li>
              <li>
                Success as a virtual assistant through building and maintaining
                client relationships.
              </li>
              <li>Managing your workload and time effectively.</li>
              <li>Marketing your services and finding new clients.</li>
              <li>Continuous education and development.</li>

              <h1> What You&apos;ll Learn</h1>

              <li>Essential virtual assistance skills and tools.</li>
              <li>How to build a professional online presence.</li>
              <li>Effective job search strategies for remote work.</li>
              <li>Specialized skills for remote job success.</li>
              <li>Strategies for work-life balance in remote settings.</li>
              <li>
                Techniques to stand out and build a personal brand as a virtual
                assistant.
              </li>
              <li>Practical experience through a capstone project.</li>
              <li>Interview preparation for remote job opportunities.</li>
              <li>The ability to pursue remote job roles with confidence.</li>
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
