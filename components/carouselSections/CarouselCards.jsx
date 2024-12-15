"use client";

import { motion, useAnimation } from "framer-motion";
import "animate.css";
import ViewAllCourseIcon from "../icons/ViewAllCourseIcon";
import Image from "next/image";
import Link from "next/link";
import ButtonWhite from "../buttons/ButtonWhite";
import { useEffect } from "react";
import PageWrapper from "@/pages/PageWrapper";
import { BiArrowFromTop } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa";

const CarouselCards = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("show");
      // Optionally, add a delay between each image
      await controls.start("hidden");
      await controls.start("show");
      // Repeat the above lines for more images if needed
    };

    sequence();
  }, [controls]);

  return (
    <PageWrapper>
      <div className="w-full h-full carousel-card-div">
        <div className="px-4 md:pl-[64px] py-32 ">
          <div className="md:flex justify-between hidden flex-col md:flex-row ">
            <div className="flex flex-col gap-10 pt-0 relative left-0 right-0">
              <div className="lg:max-w-[740px] lg:mx-auto md:max-w-[480px] text-center">
                <h1 className="lg:text-[53px] md:text-5xl text-xl font-bold lg:mb-7">
                  Explore our courses
                </h1>
                <div className="">
                  <p className="text-[#4F616D] lg:text-[18px] md:text-base text-xs lg:mb-20 carousel-card-text">
                    At KTA, we offer a diverse range of tech courses that cater
                    to beginners and experts alike. From web development to data
                    science, our curriculum is designed to equip you with
                    practical skills that matter in today&apos;s tech-driven
                    world. Join us on this educational journey and unlock your
                    potential.
                  </p>
                </div>
              </div>
              <div className="flex space-x-6 ">
                <motion.div
                  initial={{
                    y: -200,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  whileInView={{ y: 0 }}
                  className="flex flex-col space-y-20"
                >

                  <div className="relative mx-20">
                    <a href="/">
                      <Image
                        width={400}
                        height={400}
                        src="/frontend-full.png"
                        alt=""
                        className="object-cover scale-125 lg:mb-16 sm:mb-[70px] rounded-2xl z-10"
                      />
                    </a>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
                      <Link href="/courses/WebDevelopment">
                        <FaArrowDown className="text-3xl text-blue-300 translate-y-6"/>
                        </Link>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{
                    y: 200,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  whileInView={{ y: 0 }}
                  className="flex flex-col space-y-20"
                >

                  <div className="relative mx-6">
                    <a href="/">
                      <Image
                        width={400}
                        height={400}
                        src="/backend-full.png"
                        alt=""
                        quality={100}
                        className="object-cover scale-125 lg:mb-16 sm:mb-[70px] rounded-2xl z-10"
                      />
                    </a>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
                      <Link href="/courses/WebDevelopment">
                        <FaArrowDown className="text-3xl text-blue-300 translate-y-6"/>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex space-x-6 md:pt-[30px]">
                <motion.div
                  initial={{
                    x: -200,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  whileInView={{ x: 0 }}
                  className="flex flex-col space-y-20"
                >

                  <div className="relative mx-20">
                    <a href="/">
                      <Image
                        width={400}
                        height={400}
                        src="/design-full.png"
                        alt=""
                        className="object-cover scale-125 lg:mb-16 sm:mb-[70px] rounded-2xl z-10"
                      />
                    </a>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
                      <Link href="/courses/UI_UX">
                      <FaArrowDown className="text-3xl text-blue-300 translate-y-6"/>
                      </Link>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{
                    y: 200,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  whileInView={{ y: 0 }}
                  className="flex flex-col space-y-20"
                >

                  <div className="relative mx-6">
                    <a href="/">
                      <Image
                        width={400}
                        height={400}
                        src="/dataScience-full.png"
                        alt=""
                        quality={100}
                        className="object-cover scale-125 lg:mb-16 sm:mb-[70px] rounded-2xl z-10"
                      />
                    </a>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
                      <Link href="/courses/DataAnalytics">
                      <FaArrowDown className="text-3xl text-blue-300 translate-y-8"/>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="absolute left-0 flex justify-end items-end right-0 z-0">
              <Image
                src="/KTA.png"
                alt=""
                quality={100}
                width={400}
                height={300}
                className="w-[200px] h-[1200px]"
              />
            </div>
          </div>

          {/* for mobile */}

          <div className="md:hidden block space-y-14 ">
            <motion.div
              initial={{
                y: -200,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ y: 0 }}
              className="space-y-3"
            >
              <div className="">
                <h1 className=" text-xl font-bold ">
                  Explore our courses
                </h1>
                <div className="">
                  <p className="text-[#4F616D] text-sm mb-10 carousel-card-text">
                    At KTA, we offer a diverse range of tech courses that cater
                    to beginners and experts alike. From web development to data
                    science, our curriculum is designed to equip you with
                    practical skills that matter in today&apos;s tech-driven
                    world. Join us on this educational journey and unlock your
                    potential.
                  </p>
                </div>
              </div>
              <h1 className="text-[24px] font-bold">
                01. Introduction to HTML and CSS
              </h1>
              <div className="relative">
  <Image width={500} height={500} src="/frontend-full.png" alt="" />
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
    <Link href="/courses/WebDevelopment">
      <FaArrowDown className="text-3xl text-blue-300 translate-y-10" />
    </Link>
  </div>
</div>


            </motion.div>

            <motion.div
              initial={{
                y: -200,
              }}
              transition={{
                duration: 1.4,
              }}
              whileInView={{ y: 0 }}
              className="space-y-3"
            >
              <h1 className="text-[24px] font-bold">02. python and java</h1>
              <div className="relative">
              <Image width={500} height={500} src="/backend-full.png" alt="" />
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
    <Link href="/courses/WebDevelopment">
      <FaArrowDown className="text-3xl text-blue-300 translate-y-10" />
    </Link>
  </div>
</div>
            </motion.div>

            <motion.div
              initial={{
                y: -200,
              }}
              transition={{
                duration: 1.6,
              }}
              whileInView={{ y: 0 }}
              className="space-y-3"
            >
              <h1 className="text-[24px] font-bold">03. Design </h1>
              <div className="relative">
              <Image width={500} height={500} src="/design-full.png" alt="" />
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
    <Link href="/courses/UI_UX">
      <FaArrowDown className="text-3xl text-blue-300 translate-y-10" />
    </Link>
  </div>
</div>
            </motion.div>

            <motion.div
              initial={{
                y: -200,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ y: 0 }}
              className="space-y-3"
            >
              <h1 className="text-[24px] font-bold capitalize">
                04. Data Analysis
              </h1>
<div className="relative">
<Image
                src="/dataScience-full.png"
                width={500}
                height={500}
                alt=""
              />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
    <Link href="/courses/DataAnalytics">
      <FaArrowDown className="text-3xl text-blue-300 translate-y-10" />
    </Link>
  </div>
</div>
            </motion.div>
          </div>
        </div>

        <div className=" pb-6 flex items-center justify-center ">
          <Link href={`/courses`}>
            {/* Use kLink for navigation */}
            <ButtonWhite
              className={
                "flex items-center text-base text-center justify-center lg:py-4 lg:px-10"
              }
              label={
                <>
                  View all courses <ViewAllCourseIcon />
                </>
              }
            />
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CarouselCards;
