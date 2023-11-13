import SectionContents from "../../components/layout/SectionContents";
import Footer from "../../components/layout/Footer";
import image from "../../assets/images/webImage.png";
import ButtonWhite from "../../components/Buttons/ButtonWhite";
import ViewAllCourseIcon from "../../components/icons/ViewAllCourseIcon";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  // Access the &apos;id&apos; parameter from the route

  return (
    <>
      <div className="py-40 px-[80px]">
        <h1 className="text-[48px] font-bold">Courses</h1>
        <p className="text-base font-normal text-[#4F616D]">
          Unlock Your Potential with Kwaratech Academy&apos;s Diverse Range of
          Tech Courses
        </p>{" "}
        {/* Added a "Back to Courses" button using the Link component */}
        <Link to="/courses">
          <button className="underline text-blue-400">Back to Courses</button>
        </Link>

        <div className="pt-14 h-full">
          <img src={image} alt="no image" />
          <div className="flex justify-between px-2 py-[40px] bg-white">
            <div className="space-y-4 w-[439px]">
              <h1 className="font-bold text-[48px]">Web Development </h1>
              <p className="text-base font-normal text-[#4F616D]">
                Explore the world of web development, from creating stunning
                front-end interfaces to building robust back-end systems and
                mobile applications.
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="font-bold text-[36px]">Instructor</h1>
              <span>Mr Azeez</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 pt-[48px]">
          <div className="flex justify-between">
            <h1 className="text-[#00AFF0] font-bold text-[30px]">
              Front-end Development
            </h1>
            <span className="text-[#001E2D] font-[600] text-[28px]">
              Duration: 2 months
            </span>
          </div>

          <div className=" text-[#4F616D] ">
            <h1>
              In our Front-End Development course, you&apos;ll master the art of
              creating user-friendly and visually appealing websites.
              Here&apos;s what you can expect to learn:
            </h1>
            <ul className="list-disc list-inside text-[18px] font-normal">
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
        <div className="flex flex-col space-y-2 pt-[120px]">
          <div className="flex justify-between">
            <h1 className="text-[#00AFF0] font-bold text-[30px]">
              Back-end Development
            </h1>
            <span className="text-[#001E2D] font-[600] text-[28px]">
              Duration: 3 months
            </span>
          </div>

          <div className=" text-[#4F616D] ">
            <h1>What You Will Learn:</h1>
            <h1>
              Our Back-End Development course equips you with the skills to
              create robust server-side systems and manage databases.
              Here&apos;s what you&apos;ll learn:
            </h1>
            <ul className="list-disc list-inside text-[18px] font-normal">
              <li>
                Server-Side Scripting: Dive into server-side scripting languages
                like Node.js or Python to build the back-end logic of web
                applications.
              </li>
              <li>
                Database Management: Learn to design and manage databases
                effectively, ensuring data integrity and security.
              </li>
              <li>
                API Development: Explore the creation of APIs (Application
                Programming Interfaces) for seamless communication between
                front-end and back-end systems.
              </li>
              <li>
                Authentication & Security: Implement authentication mechanisms
                and security measures to protect your applications from threats.
              </li>
              <li>
                Scalability: Understand how to build scalable back-end systems
                to accommodate increasing user loads and data.
              </li>
              <li>
                Version Control: Utilize version control systems like Git for
                collaborative development and tracking changes.
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

export default WebDevelopment;
