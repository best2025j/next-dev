// import React from "react";
import SectionContents from "../../components/layout/SectionContents";
import Footer from "../../components/layout/Footer";
import ButtonWhite from "../../components/Buttons/ButtonWhite";
import ViewAllCourseIcon from "../../components/icons/ViewAllCourseIcon";
import image from "../../assets/images/uifull.png";
import { Link } from "react-router-dom";

const DesignAnimation = () => {
  // Access the &apos;id&apos; parameter from the route

  return (
    <>
      <div className="md:py-40 md:px-[80px] py-20 px-[16px]">
        <h1 className="md:text-[48px] text-[24px] font-bold">Courses</h1>
        <p className="text-sm md:text-base font-normal text-[#4F616D]">
          Unlock Your Potential with Kwaratech Academy&apos; Diverse Range of
          Tech Courses
        </p>
        {/* Added a "Back to Courses" button using the Link component */}
        <Link to="/courses">
          <button className="underline text-blue-400">Back to Courses</button>
        </Link>

        <div className="pt-14 h-full w-full">
          <img src={image} alt="no image" />
          <div className="flex justify-between px-2 md:py-[40px] bg-white items-start py-6">
            <div className="space-y-4 w-[439px]">
              <h1 className="font-bold text-[24px] md:text-[48px]">
                Design/ Animation{" "}
              </h1>
              <p className="md:text-base w-[201px] md:w-auto text-xs font-normal text-[#4F616D]">
                Explore the world of web development, from creating stunning
                front-end interfaces to building robust back-end systems and
                mobile applications.
              </p>
            </div>
            <div className="space-y-4 pt-2">
              <h1 className="font-bold text-[14px] md:text-[36px]">
                Instructor
              </h1>
              <span>Mr Victor</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 pt-[48px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[#00AFF0] font-bold text-[24px] md:text-[30px]">
              Graphics Design{" "}
            </h1>
            <span className="text-[#001E2D] font-[600] text-sm md:text-[28px]">
              Duration: 2 months
            </span>
          </div>

          <div className=" text-[#4F616D] space-y-3 ">
            <div>
              <span>Graphic Design</span>
              <h1 className="text-sm md:text-[18px] ">
                Our Graphic Design course empowers you to become a visual
                storyteller and creative problem solver. You&apos;ll explore the
                art of conveying messages, ideas, and concepts through
                captivating visuals. Here&apos;s what you can expect to learn:
              </h1>
            </div>

            <ul className="list-disc list-inside md:text-[18px] text-sm font-normal pt-4 md:pt-0 space-y-2 md:space-y-2">
              <li>
                HTML & CSS: Dive into the fundamentals of web development with
                HTML and CSS. Learn how to structure web pages and apply styling
                for a polished look.
              </li>
              <li>
                JavaScript: Explore the power of JavaScript to add interactivity
                and dynamic features to your websites. Build interactive forms,
                implement animations, and create responsive designs.
              </li>
              <li>
                Responsive Web Design: Master the art of responsive web design,
                ensuring your websites look and function flawlessly on various
                devices, from desktops to smartphones.
              </li>
              <li>
                Version Control: Learn how to use version control systems like
                Git to collaborate with others and track changes in your
                projects.
              </li>
              <li>
                Web Performance Optimization: Discover techniques to optimize
                website performance, including faster loading times and improved
                user experiences.
              </li>
              <li>
                Website Deployment: Gain practical experience in deploying
                websites to hosting platforms, making your projects accessible
                to the world.
              </li>
            </ul>
          </div>

          <div className="py-6 pt-[64px] w-full">
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
          </div>
        </div>

        <div className="flex flex-col space-y-2 pt-[48px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[#00AFF0] font-bold text-[24px] md:text-[30px]">
              Video editing
            </h1>
            <span className="text-[#001E2D] font-[600] text-sm md:text-[28px]">
              Duration: 3 months
            </span>
          </div>

          <div className=" text-[#4F616D] ">
            <h1>What You Will Learn:</h1>

            <ul className="list-disc list-inside text-base font-normal space-y-2 pt-4">
              <li>
                Animation Fundamentals: Master the basics of animation,
                including keyframes, timing, and easing, to create dynamic
                motion.
              </li>
              <li>
                Video Editing: Gain expertise in video editing, special effects,
                and seamless transitions, turning ordinary videos into engaging
                stories.
              </li>
              <li>
                Motion Graphics: Create dynamic motion graphics for video
                intros, presentations, and digital media, adding visual appeal
                to your projects.
              </li>
              <li>
                Character Animation: Explore character rigging and animation
                techniques, opening doors to storytelling and entertainment
                projects.
              </li>
              <li>
                Storyboarding: Develop storyboards to plan and visualize your
                animation projects effectively, ensuring they flow seamlessly.
              </li>
              <li>
                Industry-Standard Tools: Utilize software like Adobe After
                Effects and other animation tools, becoming proficient in
                industry-standard software.
              </li>
            </ul>
          </div>

          <div className="py-6 pt-[64px]">
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
          </div>
        </div>

        <div className="flex flex-col space-y-2 pt-[48px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[#00AFF0] font-bold text-[24px] md:text-[30px]">
              2D Illustration
            </h1>
            <span className="text-[#001E2D] font-[600] text-sm md:text-[28px]">
              Duration: 3 months
            </span>
          </div>

          <div className=" text-[#4F616D] space-y-3 ">
            <h1>What You Will Learn:</h1>

            <ul className="list-disc list-inside md:text-[18px] text-sm font-normal pt-4 md:pt-0 space-y-2 md:space-y-0">
              <li>
                Drawing Fundamentals: Dive into the fundamentals of drawing,
                covering techniques, perspective, and composition.
              </li>
              <li>
                Digital Illustration: Learn digital illustration techniques
                using software like Adobe Illustrator or Procreate to create
                digital artworks.
              </li>
              <li>
                Character Design: Explore the art of character design, from
                conceptualization to final character illustrations.
              </li>
              <li>
                Storytelling through Art: Develop your skills in visual
                storytelling, conveying narratives and emotions through your
                artwork.
              </li>
              <li>
                Portfolio Building: Build a portfolio filled with captivating 2D
                illustrations that showcase your artistic talent and potential.
              </li>
            </ul>
          </div>

          <div className="py-6 pt-[64px]">
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
          </div>
        </div>

        <div className="flex flex-col space-y-2 pt-[48px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[#00AFF0] font-bold text-[24px] md:text-[30px]">
              3D Illustration
            </h1>
            <span className="text-[#001E2D] font-[600] text-sm md:text-[28px]">
              Duration: 3 months
            </span>
          </div>

          <div className=" text-[#4F616D] space-y-3 ">
            <h1>What You Will Learn:</h1>

            <ul className="list-disc list-inside md:text-[18px] text-sm font-normal pt-4 md:pt-0 space-y-2 md:space-y-0">
              <li>
                3D Modeling: Learn the art of 3D modeling, creating intricate
                three-dimensional objects and environments.
              </li>
              <li>
                Texturing and Rendering: Dive into texturing techniques to add
                depth and realism to your 3D models, then render them to bring
                them to life.
              </li>
              <li>
                Character and Environment Design: Explore character and
                environment design in 3D, crafting immersive and visually
                stunning worlds.
              </li>
              <li>
                Animation in 3D: Master 3D animation, breathing life into your
                3D creations and telling stories through motion.
              </li>
              <li>
                Portfolio Enhancement: Create a portfolio showcasing your
                exceptional 3D illustrations, ready to impress potential clients
                and employers.
              </li>
            </ul>
          </div>

          <div className="py-6 pt-[64px]">
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
          </div>
        </div>
      </div>

      <SectionContents />
      <Footer />
    </>
  );
};

export default DesignAnimation;
