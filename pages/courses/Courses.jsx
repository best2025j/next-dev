// import React from "react";
import Footer from "../../components/layout/Footer";
import SectionContents from "../../components/layout/SectionContents";
import ButtonWhite from "../../components/Buttons/ButtonWhite";
import ViewAllCourseIcon from "../../components/icons/ViewAllCourseIcon";
import { Link } from "react-router-dom";
import Image from "next/image";

const Courses = () => {
  const courseData = [
    {
      id: 1,
      name: "web-development",
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
      id: 2,
      name: "design-animation",
      number: 2,
      mbImage: "uifull.png",
      image: "/Designs.png",
      course: "Design/ Animation",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Victor",
    },

    {
      id: 3,
      name: "ui-ux",
      number: 3,
      mbImage: "ui_ux.png",
      image: "/UI.png",
      course: "UI/UX Design",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2 months",
      Instructor: "Instructor",
      InstructorName: "Mr victor",
    },

    {
      id: 4,
      name: "data-analytics",
      number: 4,
      mbImage: "dataScience.png",
      image: "/DataSciences.png",
      course: "Data & Analytics",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },

    {
      id: 5,
      name: "cyber-security",
      number: 5,
      mbImage: "cyber.png",
      image: "/CyberSecuritys.png",
      course: "Cybersecurity",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },

    {
      id: 6,
      name: "va-remote-jobs",
      number: 6,
      mbImage: "vrpix.png",
      image: "/VirtualRemoteJob.png",
      course: "Virtual Assistance and Remote Jobs",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },

    {
      id: 7,
      name: "digital-marketing",
      number: 7,
      mbImage: "digitalpix.png",
      image: "/DMarketting.png",
      course: "Digital Marketing",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },

    {
      id: 8,
      name: "content-writing",
      number: 8,
      mbImage: "contentpix.png",
      image: "/CopyWritting.png",
      course: "Content Writing",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },
  ];

  return (
    <>
      <div className="py-40">
        <div className="space-y-3 px-6">
          <h1 className="text-5xl md:text-5xl text-[24px] font-bold">
            Courses
          </h1>
          <p className="md:text-lg text-sm font-thin">
            Unlock Your Potential with Kwaratech Academy&apos;s Diverse Range of
            Tech Courses
          </p>
        </div>

        <div className="grid md:gap-6 gap-2 grid-cols-1">
          {courseData.map((item, index) => (
            <div
              className={`flex justify-around md:py-20 py-10 ${
                (index % 2 === 0 && "flex md:flex-row flex-col") ||
                (index % 2 !== 0 && "md:flex-row-reverse w-full flex flex-col")
              }`}
              key={item.id}
            >
              <h1 className="md:text-8xl text-[20px] font-bold text-[#4F616D] px-6">
                0{item.number}
              </h1>

              <div className="md:w-[931px] w-full bg-white p-4 rounded-3xl mx-auto">
                <Image
                  src={item.image}
                  className="md:w-auto md:h-auto hidden md:flex"
                  alt="NO IMAGE FOT THIS COURSE"
                  onError={() =>
                    console.error("Image failed to load for:", item.image)
                  }
                />

                <Image
                  src={item.mbImage}
                  className="md:w-auto w-full md:h-auto md:hidden flex"
                  alt="NO IMAGE FOT THIS COURSE"
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
                  {/* Use Link for navigation */}
                  <Link to={`/courses/${item.name}`}>
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
      <Footer />
    </>
  );
};

export default Courses;

// const Courses = () => {
//   const courseData = [
//     {
//       id: 1,
//       name: "web-development",
//       number: 1,
//       image: "/webDev.png",
//       course: "Web Development",
//       info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
//       captionName: "Duration",
//       durationPeriod: "2-4 months",
//       Instructor: "Instructor",
//       InstructorName: "Mr Azeez",
//     },

//     {
//       id: 2,
//       name: "design-animation",
//       number: 2,
//       image: "/Designs.png",
//       course: "Design/ Animation",
//       info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
//       captionName: "Duration",
//       durationPeriod: "2-4 months",
//       Instructor: "Instructor",
//       InstructorName: "Mr Victor",
//     },

//     {
//       id: 3,
//       name: "ui-ux",
//       number: 3,
//       image: "/UI.png",
//       course: "UI/UX Design",
//       info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
//       captionName: "Duration",
//       durationPeriod: "2 months",
//       Instructor: "Instructor",
//       InstructorName: "Mr victor",
//     },

//     {
//       id: 4,
//       name: "data-analytics",
//       number: 4,
//       image: "/DataSciences.png",
//       course: "Data & Analytics",
//       info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
//       captionName: "Duration",
//       durationPeriod: "2-4 months",
//       Instructor: "Instructor",
//       InstructorName: "Mr Azeez",
//     },

//     {
//       id: 5,
//       name: "cyber-security",
//       number: 5,
//       image: "/CyberSecuritys.png",
//       course: "Cybersecurity",
//       info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
//       captionName: "Duration",
//       durationPeriod: "2-4 months",
//       Instructor: "Instructor",
//       InstructorName: "Mr Azeez",
//     },

//     {
//       id: 6,
//       name: "va-remote-jobs",
//       number: 6,
//       image: "/VirtualRemoteJob.png",
//       course: "Virtual Assistance and Remote Jobs",
//       info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
//       captionName: "Duration",
//       durationPeriod: "2-4 months",
//       Instructor: "Instructor",
//       InstructorName: "Mr Azeez",
//     },

//     {
//       id: 7,
//       name: "digital-marketing",
//       number: 7,
//       image: "/DMarketting.png",
//       course: "Digital Marketing",
//       info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
//       captionName: "Duration",
//       durationPeriod: "2-4 months",
//       Instructor: "Instructor",
//       InstructorName: "Mr Azeez",
//     },

//     {
//       id: 8,
//       name: "ContentWriting",
//       number: 8,
//       image: "/CopyWritting.png",
//       course: "Content Writing",
//       info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
//       captionName: "Duration",
//       durationPeriod: "2-4 months",
//       Instructor: "Instructor",
//       InstructorName: "Mr Azeez",
//     },
//   ];

//   return (
//     <>
//       <div className="py-40">
//         <div className="space-y-3 px-6">
//           <h1 className="text-5xl font-bold">Courses</h1>
//           <p className="text-lg font-thin">
//             Unlock Your Potential with Kwaratech Academy&apos;s Diverse Range of
//             Tech Courses
//           </p>
//         </div>

//         <div className="grid gap-6 grid-cols-1">
//           {courseData.map((item, index) => (
//             <div
//               className={`flex justify-around py-20 ${
//                 (index % 2 === 0 && "flex") ||
//                 (index % 2 !== 0 && "flex-row-reverse")
//               }`}
//               key={item.id}
//             >
//               <h1 className="text-8xl font-bold text-[#4F616D]">
//                 0{item.number}
//               </h1>

//               <div className="w-[931px] bg-white p-4 rounded-3xl">
//                 < Image
//                   src={item.image}
//                   alt="NO IMAGE FOT THIS COURSE"
//                   onError={() =>
//                     console.error("Image failed to load for:", item.image)
//                   }
//                 />

//                 <div className="flex p-4 pt-[40px] items-center justify-between">
//                   <div className="w-[439px] space-y-4">
//                     <h1 className="text-5xl font-bold">{item.course}</h1>
//                     <p>{item.info}</p>
//                   </div>

//                   <div className="flex flex-col space-y-4">
//                     <span className="font-bold">{item.captionName}</span>
//                     <span>{item.durationPeriod}</span>
//                   </div>

//                   <div className="flex flex-col space-y-4">
//                     <p className="font-bold">{item.Instructor}</p>
//                     <span>{item.InstructorName}</span>
//                   </div>
//                 </div>

//                 <div className="py-6 flex items-center justify-center ">
//                   {/* Use Link for navigation */}
//                   <Link to={`/courses/${item.name}`}>
//                     <ButtonWhite
//                       className={
//                         "flex items-center text-base text-center justify-center"
//                       }
//                       label={
//                         <>
//                           View Courses <ViewAllCourseIcon />
//                         </>
//                       }
//                     />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <SectionContents />
//       <Footer />
//     </>
//   );
// };
