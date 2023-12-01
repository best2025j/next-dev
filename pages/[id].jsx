import React from "react";
import SectionContents from "../components/ui/SectionContents";
import ButtonWhite from "../components/buttons/ButtonWhite";
import ViewAllCourseIcon from "../components/icons/ViewAllCourseIcon";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function Course() {
  const router = useRouter();
  const { id } = router.query;
  const courseId = parseInt(id);

  // Fetch course data based on the id (You can replace this with your data fetching logic)
  const courseData = [
    {
      id: "WebDevelopment",
      number: 1,
      image: "/webDev.png",
      mbImage: "/webImage.png",
      course: "Web Development",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },

    {
      id: "DesignAnimation",
      number: 2,
      mbImage: "/uifull.png",
      image: "/Designs.png",
      course: "Design/ Animation",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Victor",
    },

    {
      id: "UI-UX",
      number: 3,
      mbImage: "/ui_ux.png",
      image: "/UI.png",
      course: "UI/UX Design",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2 months",
      Instructor: "Instructor",
      InstructorName: "Mr victor",
    },

    {
      id: "DataAnalytics",
      number: 4,
      mbImage: "/dataScience.png",
      image: "/DataSciences.png",
      course: "Data & Analytics",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },

    {
      id: "CyberSecurity",
      number: 5,
      mbImage: "/cyber.png",
      image: "/CyberSecuritys.png",
      course: "Cybersecurity",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },

    {
      id: "VA-RemoteJobs",
      number: 6,
      mbImage: "/vrpix.png",
      image: "/VirtualRemoteJob.png",
      course: "Virtual Assistance and Remote Jobs",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },

    {
      id: "DigitalMarketing",
      number: 7,
      mbImage: "/digitalpix.png",
      image: "/DMarketting.png",
      course: "Digital Marketing",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },

    {
      id: "ContentWriting",
      number: 8,
      mbImage: "/contentpix.png",
      image: "/CopyWritting.png",
      course: "Content Writing",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },
  ];

  // Find the course in courseData that matches the id from the route parameters
  const courses = courseData.map((item) => item.id === courseId);
  // Check if the course is not found (optional)
  if (!courses) {
    return (
      <p className=" flex items-center justify-center h-[300px] w-full mx-auto text-3xl font-bold text-blue-200">
        Course not found !!!
      </p>
    );
  }

  return (
    <>
    <ScrollAnimation></ScrollAnimation>
      <div className="py-40">
        <div className="space-y-3 px-6">
          <h1 className="text-5xl md:text-5xl text-[24px] font-bold">
            Courses {courses.id}
          </h1>
          <p className="md:text-lg text-sm font-thin">
            Unlock Your Potential with Kwaratech Academy&apos;s Diverse Range of
            Tech Courses
          </p>
        </div>

        <div className="grid md:gap-6 gap-2 grid-cols-1">
          {courseData.map((item, index) => (
            <div
              className={`flex justify-around md:py-20 py-10 items-start h-full mx-auto ${
                (index % 2 === 0 &&
                  "flex md:flex-row flex-col items-start h-full mx-auto ") ||
                (index % 2 !== 0 &&
                  "md:flex-row-reverse flex flex-col items-start h-full mx-auto ")
              }`}
              key={item.id}
            >
              <h1 className="md:text-8xl text-[20px] font-bold text-[#4F616D] px-6">
                0{item.number}
              </h1>

              <div className="md:w-[931px] w-full bg-white dark:bg-slate-900 p-4 rounded-3xl mx-auto">
                <Image
                  src={item.image}
                  className="md:w-full md:h-[269px] hidden md:flex"
                  alt="NO IMAGE FOT THIS COURSE"
                  width={500}
                  height={500}
                  onError={() =>
                    console.error("Image failed to load for:", item.image)
                  }
                />

                <Image
                  src={item.mbImage}
                  className="md:w-auto w-full md:h-auto md:hidden flex"
                  alt="NO IMAGE FOT THIS COURSE"
                  width={1000}
                  height={1000}
                  onError={() =>
                    console.error("Image failed to load for:", item.mbImage)
                  }
                />

                <div className="flex p-4 md:pt-[40px] items-start justify-between">
                  <div className="md:w-[439px]  w-[201px] space-y-4">
                    <h1 className="md:text-5xl font-bold">{item.course}</h1>
                    <p className="text-[12px] md:text-[18px]">{item.info}</p>
                  </div>

                  <div className="md:hidden flex md:flex-row flex-col space-y-4 items-center">
                    <div className="flex flex-col">
                      <span className="font-bold md:text-[30px] text-[12px]">
                        {item.captionName}
                      </span>
                      <span className="text-xs">{item.durationPeriod}</span>
                    </div>

                    <div className="flex flex-col">
                      <p className="font-bold md:text-[30px] text-[12px]">
                        {item.Instructor}
                      </p>
                      <span className="text-xs">{item.InstructorName}</span>
                    </div>
                  </div>

                  <div className="md:flex hidden flex-col space-y-4">
                    <span className="font-bold md:text-[30px]">
                      {item.captionName}
                    </span>
                    <span>{item.durationPeriod}</span>
                  </div>

                  <div className="md:flex hidden flex-col space-y-4">
                    <p className="font-bold md:text-[30px]">
                      {item.Instructor}
                    </p>
                    <span>{item.InstructorName}</span>
                  </div>
                </div>

                <div className="py-6 flex items-center justify-center ">
                  <Link href="/courses/[id]" as={`/courses/${item.id}`}>
                    <ButtonWhite
                      className={
                        "flex items-center text-xs md:text-base text-center justify-center"
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
            </div>
          ))}
        </div>
      </div>
      <SectionContents />
    </>
  );
}
