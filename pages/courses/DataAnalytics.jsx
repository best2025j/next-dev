// import React from "react";
import { Link } from "react-router-dom";
import SectionContents from "../../components/layout/SectionContents";
import Footer from "../../components/layout/Footer";
import image from "../../assets/images//dataScience.png";
import ButtonWhite from "../../components/Buttons/ButtonWhite";
import ViewAllCourseIcon from "../../components/icons/ViewAllCourseIcon";

const DataAnalytics = () => {
  // Access the 'id' parameter from the route

  return (
    <>
      <div className="py-40 px-[80px]">
        <h1 className="text-[48px] font-bold">Courses</h1>
        <p className="text-base font-normal text-[#4F616D]">
          Unlock Your Potential with Kwaratech Academy&apos;s Diverse Range of
          Tech Courses
        </p>

        {/* Added a "Back to Courses" button using the Link component */}
        <Link to="/courses">
          <button className="underline text-blue-400">Back to Courses</button>
        </Link>

        <div className="pt-14 h-full">
          <img src={image} alt="no image" />
          <div className="flex justify-between px-2 py-[40px] bg-white">
            <div className="space-y-4 w-[439px]">
              <h1 className="font-bold text-[48px]">Data & Analytics </h1>
              <p className="text-base font-normal text-[#4F616D]">
                Dive into the world of data management, analytics, and machine
                learning. Master data-driven decision-making and predictive
                modeling.
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="font-bold text-[36px]">Instructor</h1>
              <span>Ibrahim</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 pt-[48px]">
          <div className="flex justify-between">
            <h1 className="text-[#00AFF0] font-bold text-[30px]">
              Data Analysis
            </h1>
            <span className="text-[#001E2D] font-[600] text-[28px]">
              Duration: 2 months
            </span>
          </div>

          <div className=" text-[#4F616D] ">
            <h1>Course Overview :</h1>

            <ul className="list-disc list-inside text-base font-normal">
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

          <div className="py-6 pt-[64px]">
            <ButtonWhite
              className={
                "flex items-center text-base text-center justify-center w-[399px]"
              }
              label={
                <>
                  Enroll now <ViewAllCourseIcon />
                </>
              }
            />
          </div>
        </div>
      </div>

      <SectionContents />
      <Footer />
    </>
  );
};

export default DataAnalytics;
