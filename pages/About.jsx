import React from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonWhite from "../components/buttons/ButtonWhite";
import ViewAllCourseIcon from "../components/icons/ViewAllCourseIcon";
import SectionContents from "@/components/ui/SectionContents";
import { useRouter } from "next/router";
import PageWrapper from "./PageWrapper";
import { motion } from "framer-motion";

export default function About() {
  const router = useRouter;

  return (
    <PageWrapper>
      <div className="py-28 md:px-[60px] w-full h-full">
        <div className="flex flex-col md:flex-row items-center justify-around h-full w-full mx-auto md:gap-[37px]">
          <div className="md:py-40 space-y-[20px] ">
            <h1 className="font-bold text-[24px] md:text-[48px]">About Us</h1>
            <p className="md:w-[389px] w-[326px]  md:text-[18px] font-normal">
              At Kwaratech Academy, we believe that technology has the power to
              transform lives, open doors to opportunities, and unlock the
              potential within every individual. Our journey began with a simple
              yet profound vision: to make quality tech education accessible to
              all.
            </p>
          </div>

          <div className="flex flex-col md:gap-[38px] pt-10 px-4 md:p-2">
            <motion.img
              initial={{
                y: -200,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ y: 0 }}
              width={500}
              height={500}
              src="/booksLab.png"
              alt="pix"
              className="w-full md:w-[700px] h-full"
            />

            <div className="flex py-4 space-x-2 ">
              <motion.img
                initial={{
                  x: -200,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{ x: 0 }}
                className="w-full h-[100px] md:h-full"
                src="/schoolBoy.png"
                width={500}
                height={500}
                alt="pix 1"
              />
              <motion.img
                initial={{
                  y: 200,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{ y: 0 }}
                className="w-full h-[100px] md:h-full"
                src="/adult.png"
                alt="pix 2"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 flex flex-col justify-center items-center mx-auto text-center md:px-[112px] px-4">
        <h1 className="font-bold text-[24px] md:text-[48px] ">Who We Are</h1>

        <p className="w-[286px] md:w-[481px] md:text-[18px] font-normal">
          We are a passionate team of educators, innovators, and tech
          enthusiasts dedicated to bridging the digital gap.
        </p>
      </div>

      <div className="md:py-[60px] md:px-[112px] flex items-center justify-center py-4 px-4">
        <Image
          width={500}
          height={500}
          className="md:w-full md:h-full"
          src="/vid.png"
          alt="pix-4"
        />
      </div>

      <div className="flex justify-between md:pl-[112px]">
        <div className="md:gap-[48px] inline-flex flex-col md:py-[120px] py-[20px]">
          <h1 className="font-bold text-[24px] md:text-[48px] pl-6">
            What We Stand For
          </h1>

          <div className="flex flex-col md:gap-44 gap-10 text-start px-6 py-12">
            <div className="flex flex-col md:flex-row md:space-x-10 space-y-12 md:space-y-0 md:gap-0">
              <motion.div
                initial={{
                  x: -200,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{ x: 0 }}
                className="space-y-3 dark:bg-slate-900 shadow h-72 mx-auto flex flex-col justify-center p-3 rounded-[24px]"
              >
                <div>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M44.497 11.5505C53.7603 20.8138 53.597 35.9338 44.0303 45.0104C35.187 53.3871 20.837 53.3871 11.9703 45.0104C2.38032 35.9338 2.21696 20.8138 11.5036 11.5505C20.6036 2.42717 35.397 2.42717 44.497 11.5505Z"
                      fill="#00AFF0"
                    />
                    <path
                      d="M28.0017 42.7468C24.315 42.7468 20.6517 41.4167 17.8517 38.7801C17.1517 38.1034 17.1284 37.0067 17.7817 36.3067C18.4584 35.6067 19.555 35.5835 20.255 36.2368C24.525 40.2735 31.4784 40.2735 35.7484 36.2368C36.4484 35.5835 37.5684 35.6067 38.2217 36.3067C38.8751 37.0067 38.8517 38.1267 38.1517 38.7801C35.3517 41.4167 31.6884 42.7468 28.0017 42.7468Z"
                      fill="#00AFF0"
                    />
                  </svg>
                </div>

                <h1 className="font-bold text-[24px] md:text-[36px]">
                  Inclusivity
                </h1>
                <p className="md:w-[321px]  md:text-[18px]">
                  We welcome learners from all walks of life, irrespective of
                  age, background, or experience.
                </p>
              </motion.div>

              <motion.div
                initial={{
                  y: -200,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{ y: 0 }}
                className="space-y-3 dark:bg-slate-900 shadow h-72 mx-auto flex flex-col justify-center p-3 rounded-[24px]"
              >
                <div>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_966_2090)">
                      <path
                        opacity="0.4"
                        d="M36.1213 7H17.548C9.49797 7 4.66797 11.8067 4.66797 19.88V38.43C4.66797 46.5267 9.49797 51.3333 17.548 51.3333H36.098C44.1713 51.3333 48.978 46.5267 48.978 38.4533V19.88C49.0013 11.8067 44.1713 7 36.1213 7Z"
                        fill="#00AFF0"
                      />
                      <path
                        d="M49.0455 6.95365C44.8688 2.75365 40.7855 2.66032 36.4921 6.95365L33.8555 9.56698C33.6221 9.80032 33.5521 10.127 33.6455 10.4303C35.2788 16.147 39.8521 20.7203 45.5688 22.3537C45.6388 22.377 45.7555 22.377 45.8255 22.377C46.0588 22.377 46.2921 22.2836 46.4555 22.1203L49.0455 19.507C51.1688 17.3836 52.2188 15.3537 52.2188 13.277C52.2188 11.177 51.1688 9.10032 49.0455 6.95365Z"
                        fill="#00AFF0"
                      />
                      <path
                        d="M41.6732 24.3133C41.0432 24.01 40.4366 23.7066 39.8766 23.3566C39.4099 23.0766 38.9432 22.7733 38.4999 22.4466C38.1266 22.2133 37.7066 21.8633 37.2866 21.5133C37.2399 21.49 37.0999 21.3733 36.9132 21.1866C36.1899 20.6033 35.4199 19.81 34.6966 18.9466C34.6499 18.9 34.5099 18.76 34.3932 18.55C34.1599 18.2933 33.8099 17.85 33.5066 17.36C33.2499 17.0333 32.9466 16.5666 32.6666 16.0766C32.3166 15.4933 32.0132 14.91 31.7332 14.3033C31.4299 13.65 31.1966 13.0433 30.9866 12 md:space-y-0.46L18.4332 25.0133C17.6166 25.83 16.8232 27.37 16.6599 28.5133L15.6566 35.4666C15.4466 36.9366 15.8432 38.3133 16.7532 39.2233C17.5232 39.9933 18.5732 40.39 19.7399 40.39C19.9966 40.39 20.2532 40.3666 20.5099 40.3433L27.4399 39.3633C28.5832 39.2 30.1232 38.43 30.9399 37.59L43.4932 25.0366C42.9099 24.85 42.3266 24.5933 41.6732 24.3133Z"
                        fill="#00AFF0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_966_2090">
                        <rect width="56" height="56" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <h1 className="font-bold text-[24px] md:text-[36px]">
                  Quality Education
                </h1>
                <p className="md:w-[321px]  md:text-[18px]">
                  We are committed to providing high-quality, industry-relevant
                  tech education.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-10 space-y-12 md:space-y-0 ">
              <motion.div
                initial={{
                  y: -200,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{ y: 0 }}
                className="space-y-3 dark:bg-slate-900 shadow h-72 mx-auto flex flex-col justify-center p-3 rounded-[24px]"
              >
                <div>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_966_2051)">
                      <path
                        d="M36.3776 4.08301C29.4476 4.08301 23.8242 9.70635 23.8242 16.6364C23.8242 23.5664 29.4476 29.1897 36.3776 29.1897C43.3076 29.1897 48.9309 23.5664 48.9309 16.6364C48.9309 9.70635 43.3076 4.08301 36.3776 4.08301Z"
                        fill="#00AFF0"
                      />
                      <path
                        opacity="0.4"
                        d="M14.8403 30.4033C10.5703 30.4033 7.07031 33.88 7.07031 38.1733C7.07031 42.4667 10.5469 45.9433 14.8403 45.9433C19.1103 45.9433 22.6103 42.4667 22.6103 38.1733C22.6103 33.88 19.1103 30.4033 14.8403 30.4033Z"
                        fill="#00AFF0"
                      />
                      <path
                        opacity="0.4"
                        d="M38.7793 38.7803C35.1627 38.7803 32.2227 41.7203 32.2227 45.3369C32.2227 48.9536 35.1627 51.8936 38.7793 51.8936C42.396 51.8936 45.336 48.9536 45.336 45.3369C45.336 41.7203 42.396 38.7803 38.7793 38.7803Z"
                        fill="#00AFF0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_966_2051">
                        <rect width="56" height="56" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <h1 className="font-bold text-[24px] md:text-[36px]">
                  Innovation
                </h1>
                <p className="md:w-[321px]  md:text-[18px]">
                  We stay at the forefront of technological advancements to
                  offer cutting-edge programs.
                </p>
              </motion.div>

              <motion.div
                initial={{
                  y: -200,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{ y: 0 }}
                className="space-y-3 dark:bg-slate-900 shadow h-72 mx-auto flex flex-col justify-center p-3 rounded-[24px]"
              >
                <div>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_966_2069)">
                      <path
                        opacity="0.4"
                        d="M40.9024 18.1303C40.7391 18.107 40.5758 18.107 40.4124 18.1303C36.7958 18.0137 33.9258 15.0503 33.9258 11.4103C33.9258 7.70032 36.9358 4.66699 40.6691 4.66699C44.3791 4.66699 47.4124 7.67699 47.4124 11.4103C47.3891 15.0503 44.5191 18.0137 40.9024 18.1303Z"
                        fill="#00AFF0"
                      />
                      <path
                        opacity="0.4"
                        d="M48.511 34.2999C45.8977 36.0499 42.2344 36.7033 38.851 36.2599C39.7377 34.3466 40.2044 32.2233 40.2277 29.9833C40.2277 27.65 39.7144 25.4333 38.7344 23.4966C42.1877 23.03 45.851 23.6833 48.4877 25.4333C52.1744 27.8599 52.1744 31.8499 48.511 34.2999Z"
                        fill="#00AFF0"
                      />
                      <path
                        opacity="0.4"
                        d="M15.0256 18.1303C15.189 18.107 15.3523 18.107 15.5156 18.1303C19.1323 18.0137 22.0023 15.0503 22.0023 11.4103C22.0023 7.70032 18.9923 4.66699 15.259 4.66699C11.549 4.66699 8.51562 7.67699 8.51562 11.4103C8.53896 15.0503 11.409 18.0137 15.0256 18.1303Z"
                        fill="#00AFF0"
                      />
                      <path
                        opacity="0.4"
                        d="M15.2846 29.9837C15.2846 32.2471 15.7746 34.3938 16.6612 36.3304C13.3712 36.6804 9.94125 35.9804 7.42125 34.3237C3.73458 31.8737 3.73458 27.8837 7.42125 25.4337C9.91792 23.7537 13.4412 23.0771 16.7546 23.4504C15.7979 25.4104 15.2846 27.6271 15.2846 29.9837Z"
                        fill="#00AFF0"
                      />
                      <path
                        d="M28.2792 37.03C28.0926 37.0067 27.8826 37.0067 27.6726 37.03C23.3792 36.89 19.9492 33.3667 19.9492 29.0267C19.9492 24.5933 23.5192 21 27.9759 21C32.4092 21 36.0026 24.5933 36.0026 29.0267C36.0026 33.3667 32.5959 36.89 28.2792 37.03Z"
                        fill="#00AFF0"
                      />
                      <path
                        d="M20.6972 41.8602C17.1739 44.2168 17.1739 48.0902 20.6972 50.4235C24.7105 53.1068 31.2905 53.1068 35.3039 50.4235C38.8272 48.0668 38.8272 44.1935 35.3039 41.8602C31.3139 39.1768 24.7339 39.1768 20.6972 41.8602Z"
                        fill="#00AFF0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_966_2069">
                        <rect width="56" height="56" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <h1 className="font-bold text-[24px] md:text-[36px]">
                  Community{" "}
                </h1>
                <p className="md:w-[321px]  md:text-[18px]">
                  We foster a supportive community where learners can connect,
                  collaborate, and grow together.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <Image width={500} height={500} src="/KTA2.png" alt="kta" />
        </div>
      </div>

      <div className="md:py-[6px]  md:px-[112px] space-y-6 px-4">
        <div className="md:w-[439px] w-[326px]">
          <h1 className="font-bold text-[24px] md:text-[36px]">Our Vision</h1>
          <p className="text-xs md:text-lg">
            We envision a world where technology is a tool for empowerment,
            where opportunities are boundless, and where every individual can
            reach their full potential. With this vision as our guiding star, we
            are dedicated to making a positive impact on lives through
            technology education.
          </p>
        </div>

        <div className="flex justify-between space-x-4">
          <div>
            <motion.img
              initial={{
                y: 200,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ y: 0 }}
              width={500}
              height={500}
              src="/vr.png"
              alt="Image1"
            />
          </div>
          <div>
            <motion.img
              initial={{
                y: -200,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ y: 0 }}
              width={500}
              height={500}
              src="/groupPix.png"
              alt="Image2"
            />
          </div>
          <div>
            <motion.img
              initial={{
                y: 300,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ y: 0 }}
              width={500}
              height={500}
              src="/smile.png"
              alt="Image3"
            />
          </div>
          <div>
            <motion.img
              initial={{
                y: -300,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ y: 0 }}
              width={500}
              height={500}
              src="/ladiesSmile.png"
              alt="Image4"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-bet items-center md:py-40 py-20 md:gap-32">
          <div className="space-y-5">
            <h1 className="font-bold text-[24px] md:text-[48px]">
              Begin your career
            </h1>
            <p className="md:w-[439px] w-[326px] text-[18px]">
              Whether you&apos;re a student taking your first steps into the
              tech world or a professional seeking to upskill, Kwaratech Academy
              is here to guide you. We invite you to be a part of our vibrant
              and growing community, where dreams are empowered and futures are
              shaped.
            </p>

            <div className="pt-8 w-[288px] md:w-full">
              <Link href="/courses/Courses">
                <ButtonWhite
                  className={
                    // "flex items-center w-full md:text-base text-sm justify-center"
                    "flex items-center text-sm md:text-base text-center justify-center w-full md:w-[399px]"
                  }
                  label={
                    <>
                      Get Started <ViewAllCourseIcon />
                    </>
                  }
                />
              </Link>
            </div>
          </div>

          <div className="w-full h-full ">
            <Image
              width={500}
              height={500}
              src="/ktaSvg.png"
              alt=""
              className="w-[527.226px] h-[323.309px] hidden md:flex"
            />
          </div>
        </div>
      </div>

      <SectionContents />
    </PageWrapper>
  );
}
