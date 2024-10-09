"use client";

import { motion, useAnimation } from "framer-motion";
import "animate.css";
import ViewAllCourseIcon from "../icons/ViewAllCourseIcon";
import Image from "next/image";
import Link from "next/link";
import ButtonWhite from "../buttons/ButtonWhite";
import { useEffect } from "react";
import PageWrapper from "@/pages/PageWrapper";

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
      <div className="w-full h-full">
        <div className=" px-4 md:pl-[64px] py-32 space-y-[110px]">
          <div className="h-full w-full space-y-3">
            <h1 className="md:text-5xl text-xl font-bold">
              Explore our courses
            </h1>
            <div className="md:max-w-[480px]">
              <p className="text-[#4F616D] md:text-base text-xs">
                At KTA, we offer a diverse range of tech courses that cater to
                beginners and experts alike. From web development to data
                science, our curriculum is designed to equip you with practical
                skills that matter in today&apos;s tech-driven world. Join us on
                this educational journey and unlock your potential.
              </p>
            </div>
          </div>

          <div className="md:flex justify-between hidden flex-col md:flex-row ">
            <div className="flex flex-col gap-10 pt-40 relative left-0 right-0">
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
                  <h1 className="font-bold text-[48px] md:w-[401px]">
                    01. Introduction to HTML and CSS
                  </h1>

                  <Image
                    priority
                    width={500}
                    height={500}
                    src="/frontend-full.png"
                    alt=""
                  />
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
                  <h1 className="font-bold text-[48px] md:w-[401px]">
                    02. Python and Java
                  </h1>
                  <Image
                    priority
                    src="/backend-full.png"
                    width={500}
                    height={500}
                    alt=""
                    quality={100}
                  />
                </motion.div>
              </div>

              <div className="flex space-x-6 md:pt-[164px]">
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
                  <h1 className="font-bold text-[48px] md:w-[401px]">
                    03. Design
                  </h1>
                  <Image
                    priority
                    src="/design-full.png"
                    width={500}
                    height={500}
                    alt=""
                    quality={100}
                  />
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
                  <h1 className="font-bold text-[48px] md:w-[401px]">
                    04.Data Analysis{" "}
                  </h1>
                  <Image
                    priority
                    src="/dataScience-full.png"
                    alt=""
                    width={500}
                    height={500}
                    quality={100}
                  />
                </motion.div>
              </div>
            </div>

            <div className="absolute left-0 flex justify-end items-end right-0">
              <Image
                src="/KTA.png"
                alt=""
                quality={100}
                width={500}
                height={500}
                className="w-72 h-full"
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
              <h1 className="text-[24px] font-bold">
                01. Introduction to HTML and CSS
              </h1>
              <Image width={500} height={500} src="/frontend-full.png" alt="" />
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
              <Image width={500} height={500} src="/backend-full.png" alt="" />
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
              <Image width={500} height={500} src="/design-full.png" alt="" />
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
              <Image
                src="/dataScience-full.png"
                width={500}
                height={500}
                alt=""
              />
            </motion.div>
          </div>
        </div>

        <div className="py-6 flex items-center justify-center ">
          <Link href={`/courses`}>
            {/* Use kLink for navigation */}
            <ButtonWhite
              className={
                "flex items-center text-base text-center justify-center"
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
