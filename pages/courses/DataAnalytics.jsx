import React from "react";
import SectionContents from "../../components/ui/SectionContents";
import Footer from "../../components/layout/Footer";
import image from "../../assets/images/dataScience.png";
import ButtonWhite from "../../components/buttons/ButtonWhite";
import ViewAllCourseIcon from "../../components/icons/ViewAllCourseIcon";
import Image from "next/image";
import Link from "next/link";

export default function DataAnalytics() {
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

        <div className="pt-14 h-full w-full">
          <Image src={image} alt="no image" />
          <div className="flex justify-between px-2 md:py-[40px] bg-white items-start py-6">
            <div className="space-y-4 w-[439px]">
              <h1 className="font-bold text-[24px] md:text-[48px]">
                Data & Analytics{" "}
              </h1>
              <p className="md:text-base w-[201px] md:w-auto text-xs font-normal text-[#4F616D]">
                Dive into the world of data management, analytics, and machine
                learning. Master data-driven decision-making and predictive
                modeling.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h1 className="font-bold text-[14px] md:text-[36px]">
                Instructor
              </h1>
              <span className="text-xs">Ibrahim</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 pt-[48px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[#00AFF0] font-bold text-[24px] md:text-[30px]">
              Data Analysis
            </h1>
            <span className="text-[#001E2D] font-[600] text-sm md:text-[28px]">
              Duration: 2 months
            </span>
          </div>

          <div className=" text-[#4F616D] space-y-3 ">
            <h1>Course Overview :</h1>

            <ul className="list-disc list-inside md:text-[18px] text-sm font-normal pt-4 md:pt-0 space-y-2 md:space-y-0">
              <li>
                Gain valuable insights into how data analytics is applied in
                various business contexts.
              </li>
              <li>
                Application of your skills to real-world business data sets and
                gain practical experience in data analysis.
              </li>
              <li>
                Master advanced data analysis techniques, including machine
                learning, to tackle complex business problems. What You&apos;ll
                Learn
              </li>

              <h1> What You&apos;ll Learn</h1>

              <li>
                Acquire a big picture understanding of the data analyst role.
              </li>

              <li>Learn beginner and advanced Python.</li>
              <li>Study mathematics for Python.</li>
              <li>Be able to work with text files.</li>
              <li>
                Understand different data types and their memory usage & how to
                obtain interesting, real-time information from an API with a
                simple script.
              </li>
              <li>Clean data with pandas Series and DataFrames.</li>
              <li>Complete a data cleaning exercise on absenteeism rate.</li>
              <li>
                Expand your knowledge of NumPy – statistics and preprocessing.
              </li>
              <li>
                Master data visualization by creating pie, bar, line, area,
                histogram, scatter, regression, and combo charts.
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

        <div className="flex flex-col space-y-2 pt-[48px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[#00AFF0] font-bold text-[24px] md:text-[30px]">
              Data Science
            </h1>
            <span className="text-[#001E2D] font-[600] text-sm md:text-[28px]">
              Duration: 3 months
            </span>
          </div>

          <div className=" text-[#4F616D] space-y-3 ">
            <h1>Course Overview :</h1>

            <ul className="list-disc list-inside md:text-[18px] text-sm font-normal pt-4 md:pt-0 space-y-2 md:space-y-0">
              <li>
                Enhance your resume with sought-after data science skills:
              </li>
              <li>Statistical analysis proficiency.</li>
              <li>
                Python programming expertise encompassing NumPy, pandas,
                matplotlib, and Seaborn.
              </li>
              <li>Tableau proficiency.</li>

              <li>Machine Learning with stats models and scikit-learn.</li>
              <li>Deep learning proficiency with TensorFlow.</li>
              <li>
                Demonstrate comprehensive understanding of the data science
                domain to impress interviewers.
              </li>
              <li>Acquire skills in data pre-processing techniques.</li>
              <li>
                Gain a profound understanding of the mathematical principles
                behind Machine Learning (a unique offering compared to other
                courses).
              </li>
              <li>
                Initiate Python coding and utilize it for statistical analysis
                purposes.
              </li>
              <li>Execute linear and logistic regressions in Python. </li>
              <li>Perform cluster and factor analysis.</li>
              <li>
                Develop Machine Learning algorithms using Python libraries like
                NumPy, stats models, and scikit-learn.
              </li>
              <li>Apply acquired skills to practical business scenarios.</li>
              <li>
                Utilize cutting-edge Deep Learning frameworks such as Google’s
                TensorFlow.
              </li>
              <li>
                Cultivate business intuition while problem-solving with
                significant datasets.
              </li>
              <li>Harness the potential of deep neural network.</li>
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
