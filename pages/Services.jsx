import Link from "next/link";
import ButtonWhite from "../components/buttons/ButtonWhite";
import ViewAllCourseIcon from "../components/icons/ViewAllCourseIcon";
import Image from "next/image";
import SectionContents from "@/components/ui/SectionContents";

export default function Services() {
  return (
    <>
      <div className="py-24 md:py-40 flex flex-col h-full w-full">
        <div className=" flex flex-col-reverse md:flex-row md:justify-between mx-auto items-center w-full h-full">
          <div className="flex items-center justify-center mx-auto"></div>
          <div className="flex flex-col space-y-2 py-6 md:py-0">
            <h1 className="text-[24px] md:text-[48px] font-bold">
              What we offer
            </h1>

            <p className=" md:w-[439px] w-[319px] text-[12px] md:text-[18px]">
              At Kwaratech Academy, we provide a range of services designed to
              empower individuals with the skills needed for success in the
              digital age. We&apos;re not just another tech education provider;
              we&apos;re your partner in unlocking a world of opportunities and
              here is why you should choose us
            </p>

            <div className="py-6 flex items-center ">
              <Link href="/course">
                <ButtonWhite
                  className={
                    "flex items-center text-xs md:text-base text-center justify-center w-[219px] md:w-full"
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

          <div className="bg-[#00AFF0] h-full md:w-[692px] flex justify-between items-center   md:h-[612.9px] rounded-t-[480px]">
            <div className=" relative md:left-[60px] w-[134px] md:w-full left-10">
              <h1 className="md:text-[48px] text-[24px] font-bold text-white">
                Best Graduating Student
              </h1>
              <h6 className="md:text-[36px] text-[16px] font-bold pt-[16px] md:pt-0 dark:text-black">
                Hannah Adeniyi
              </h6>
              <span className="md:text-[18px] text-xs text-[#C6E7FF]">
                Front-end Development.
              </span>
            </div>

            <Image
              width={500}
              height={500}
              src="/girlpix.png"
              alt=""
              quality={100}
              className="w-[193px] h-[286px] md:h-full md:w-full"
            />
          </div>
        </div>

        <div className="flex justify-between items-start py-[120.1px]">
          <div className="flex flex-col md:pl-[56px] pl-0">
            <div className="space-y-3">
              <h1 className="text-[24px] md:text-[42px] font-bold">
                Tech Skill Programs
              </h1>
              <p className=" md:w-[384px]">
                At Kwaratech, your success is our priority. As you embark on
                your learning journey with us, we focus on ensuring specific key
                areas and takeaways for your growth and development
              </p>
            </div>

            <div className="py-12 space-y-6 px-4 ">
              <div className="flex flex-col md:flex-row mx-auto w-full h-full md:space-y-0 space-y-4 md:space-x-4 space-x-0 ">
                <div className="flex justify-center items-center bg-[#FBFCFF] shadow dark:bg-slate-900 rounded-[24px] md:w-[369px] w-full h-[319px]">
                  <div className="flex flex-col space-y-3">
                    <span>
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M40.0859 12.25C36.0959 12.25 31.3359 13.7667 31.3359 21V35C31.3359 42.2333 36.0959 43.75 40.0859 43.75C44.0759 43.75 48.8359 42.2333 48.8359 35V21C48.8359 13.7667 44.0759 12.25 40.0859 12.25Z"
                          fill="#00AFF0"
                        />
                        <path
                          opacity="0.4"
                          d="M15.9141 12.25C11.9241 12.25 7.16406 13.7667 7.16406 21V35C7.16406 42.2333 11.9241 43.75 15.9141 43.75C19.9041 43.75 24.6641 42.2333 24.6641 35V21C24.6641 13.7667 19.9041 12.25 15.9141 12.25Z"
                          fill="#00AFF0"
                        />
                        <path
                          d="M31.3374 26.25H24.6641V29.75H31.3374V26.25Z"
                          fill="#00AFF0"
                        />
                        <path
                          d="M52.5 35.5832C51.5433 35.5832 50.75 34.7898 50.75 33.8332V22.1665C50.75 21.2098 51.5433 20.4165 52.5 20.4165C53.4567 20.4165 54.25 21.2098 54.25 22.1665V33.8332C54.25 34.7898 53.4567 35.5832 52.5 35.5832Z"
                          fill="#121212"
                        />
                        <path
                          d="M3.5 35.5832C2.54333 35.5832 1.75 34.7898 1.75 33.8332V22.1665C1.75 21.2098 2.54333 20.4165 3.5 20.4165C4.45667 20.4165 5.25 21.2098 5.25 22.1665V33.8332C5.25 34.7898 4.45667 35.5832 3.5 35.5832Z"
                          fill="#121212"
                        />
                      </svg>
                    </span>

                    <h1 className="md:text-[36px] text-[24px] text-[#001E2D] font-bold dark:text-white">
                      Experience
                    </h1>
                    <p className=" md:w-[321px] w-[319px]">
                      Applying theories to practical projects, we ensure you
                      have a deep understanding of concepts through application
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center bg-[#FBFCFF] shadow dark:bg-slate-900 rounded-[24px] md:w-[369px] w-full h-[319px]">
                  <div className="flex flex-col space-y-3">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M36.1213 7H17.548C9.49797 7 4.66797 11.8067 4.66797 19.88V38.43C4.66797 46.5267 9.49797 51.3333 17.548 51.3333H36.098C44.1713 51.3333 48.978 46.5267 48.978 38.4533V19.88C49.0013 11.8067 44.1713 7 36.1213 7Z"
                        fill="#00AFF0"
                      />
                      <path
                        d="M49.0455 6.95316C44.8688 2.75316 40.7855 2.65983 36.4921 6.95316L33.8555 9.5665C33.6221 9.79983 33.5521 10.1265 33.6455 10.4298C35.2788 16.1465 39.8521 20.7198 45.5688 22.3532C45.6388 22.3765 45.7555 22.3765 45.8255 22.3765C46.0588 22.3765 46.2921 22.2832 46.4555 22.1198L49.0455 19.5065C51.1688 17.3832 52.2188 15.3532 52.2188 13.2765C52.2188 11.1765 51.1688 9.09983 49.0455 6.95316Z"
                        fill="#00AFF0"
                      />
                      <path
                        d="M41.6732 24.3133C41.0432 24.01 40.4366 23.7066 39.8766 23.3566C39.4099 23.0766 38.9432 22.7733 38.4999 22.4466C38.1266 22.2133 37.7066 21.8633 37.2866 21.5133C37.2399 21.49 37.0999 21.3733 36.9132 21.1866C36.1899 20.6033 35.4199 19.81 34.6966 18.9466C34.6499 18.9 34.5099 18.76 34.3932 18.55C34.1599 18.2933 33.8099 17.85 33.5066 17.36C33.2499 17.0333 32.9466 16.5666 32.6666 16.0766C32.3166 15.4933 32.0132 14.91 31.7332 14.3033C31.4299 13.65 31.1966 13.0433 30.9866 12.46L18.4332 25.0133C17.6166 25.83 16.8232 27.37 16.6599 28.5133L15.6566 35.4666C15.4466 36.9366 15.8432 38.3133 16.7532 39.2233C17.5232 39.9933 18.5732 40.39 19.7399 40.39C19.9966 40.39 20.2532 40.3666 20.5099 40.3433L27.4399 39.3633C28.5832 39.2 30.1232 38.43 30.9399 37.59L43.4932 25.0366C42.9099 24.85 42.3266 24.5933 41.6732 24.3133Z"
                        fill="#00AFF0"
                      />
                    </svg>

                    <h1 className="md:text-[36px] text-[24px] text-[#001E2D] font-bold dark:text-white">
                      Collaboration
                    </h1>
                    <p className=" md:w-[321px] w-[319px]">
                      Gain insights from peers with different perspectives,
                      enhancing your problem-solving and communication skills
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex py-6 flex-col md:flex-row w-full h-full mx-auto md:space-y-0 space-y-4 md:space-x-4 space-x-0">
                <div className="flex justify-center items-center bg-[#FBFCFF] shadow dark:bg-slate-900 rounded-[24px] md:w-[369px] w-full h-[319px]">
                  <div className="flex flex-col space-y-3">
                    <span>
                      {" "}
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M35.9549 43.3765C35.0216 43.3765 34.2516 42.6065 34.2516 41.6732C34.2516 40.7398 35.0216 39.9698 35.9549 39.9698C42.5349 39.9698 47.9016 34.6032 47.9016 28.0232C47.9016 21.4432 42.5349 16.0765 35.9549 16.0765C29.3749 16.0765 24.0082 21.4432 24.0082 28.0232C24.0082 28.9565 23.2382 29.7265 22.3049 29.7265C21.3716 29.7265 20.6016 28.9565 20.6016 28.0232C20.6016 19.5532 27.4849 12.6465 35.9782 12.6465C44.4716 12.6465 51.3316 19.5298 51.3316 27.9998C51.3316 36.4698 44.4482 43.3765 35.9549 43.3765Z"
                          fill="#00AFF0"
                        />
                        <path
                          opacity="0.4"
                          d="M51.3333 28.0002C51.3333 36.4935 44.45 43.3769 35.9567 43.3769C33.04 43.3769 30.31 42.5602 28 41.1369C32.4333 38.4535 35.3967 33.5769 35.3967 28.0002C35.3967 22.4235 32.4333 17.5469 28 14.8635C30.3333 13.4635 33.0633 12.6235 35.9567 12.6235C44.45 12.6235 51.3333 19.5069 51.3333 28.0002Z"
                          fill="#00AFF0"
                        />
                        <path
                          d="M20.0446 12.6235C20.978 12.6235 21.748 13.3935 21.748 14.3269C21.748 15.2602 20.978 16.0302 20.0446 16.0302C13.4646 16.0302 8.09797 21.3969 8.09797 27.9769C8.09797 34.5569 13.4646 39.9235 20.0446 39.9235C26.6246 39.9235 31.9913 34.5569 31.9913 27.9769C31.9913 27.0435 32.7613 26.2735 33.6946 26.2735C34.628 26.2735 35.398 27.0435 35.398 27.9769C35.398 36.4469 28.5146 43.3535 20.0213 43.3535C11.528 43.3535 4.66797 36.4702 4.66797 28.0002C4.66797 19.5302 11.5513 12.6235 20.0446 12.6235Z"
                          fill="#00AFF0"
                        />
                        <path
                          opacity="0.5"
                          d="M35.398 28.0002C35.398 33.5769 32.4346 38.4535 28.0013 41.1369C25.668 42.5369 22.938 43.3769 20.0446 43.3769C11.5513 43.3769 4.66797 36.4935 4.66797 28.0002C4.66797 19.5069 11.5513 12.6235 20.0446 12.6235C22.938 12.6235 25.668 13.4635 28.0013 14.8635C32.4346 17.5469 35.398 22.4235 35.398 28.0002Z"
                          fill="#C6E7FF"
                        />
                      </svg>
                    </span>

                    <h1 className="md:text-[36px] text-[24px] text-[#001E2D] font-bold dark:text-white">
                      Mentorship
                    </h1>
                    <p className=" md:w-[321px] w-[319px]">
                      Get access lifetime guidance, career advice, and insights,
                      empowering you to navigate the tech landscape
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center bg-[#FBFCFF] shadow dark:bg-slate-900 rounded-[24px] md:w-[369px] w-full h-[319px]">
                  <div className="flex flex-col space-y-3">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M51.332 14V19.6467C51.332 23.3334 48.9987 25.6667 45.312 25.6667H37.332V9.35669C37.332 6.76669 39.4554 4.64336 42.0454 4.66669C44.5887 4.69003 46.922 5.71669 48.602 7.39669C50.282 9.10003 51.332 11.4334 51.332 14Z"
                        fill="#00AFF0"
                      />
                      <path
                        opacity="0.4"
                        d="M4.66797 16.3332V48.9998C4.66797 50.9365 6.8613 52.0332 8.4013 50.8665L12.3913 47.8798C13.3246 47.1798 14.6313 47.2732 15.4713 48.1132L19.3446 52.0098C20.2546 52.9198 21.748 52.9198 22.658 52.0098L26.578 48.0898C27.3946 47.2732 28.7013 47.1798 29.6113 47.8798L33.6013 50.8665C35.1413 52.0098 37.3346 50.9132 37.3346 48.9998V9.33317C37.3346 6.7665 39.4346 4.6665 42.0013 4.6665H16.3346H14.0013C7.0013 4.6665 4.66797 8.84317 4.66797 13.9998V16.3332Z"
                        fill="#00AFF0"
                      />
                      <path
                        d="M28 28.6064H21C20.0433 28.6064 19.25 29.3998 19.25 30.3564C19.25 31.3131 20.0433 32.1064 21 32.1064H28C28.9567 32.1064 29.75 31.3131 29.75 30.3564C29.75 29.3998 28.9567 28.6064 28 28.6064Z"
                        fill="#00AFF0"
                      />
                      <path
                        d="M21 22.7734H28C28.9567 22.7734 29.75 21.9801 29.75 21.0234C29.75 20.0668 28.9567 19.2734 28 19.2734H21C20.0433 19.2734 19.25 20.0668 19.25 21.0234C19.25 21.9801 20.0433 22.7734 21 22.7734Z"
                        fill="#00AFF0"
                      />
                      <path
                        d="M13.931 18.6899C12.6243 18.6899 11.5977 19.7399 11.5977 21.0233C11.5977 22.3066 12.6477 23.3566 13.931 23.3566C15.2143 23.3566 16.2643 22.3066 16.2643 21.0233C16.2643 19.7399 15.2143 18.6899 13.931 18.6899Z"
                        fill="#00AFF0"
                      />
                      <path
                        d="M13.931 28.0234C12.6243 28.0234 11.5977 29.0734 11.5977 30.3568C11.5977 31.6401 12.6477 32.6901 13.931 32.6901C15.2143 32.6901 16.2643 31.6401 16.2643 30.3568C16.2643 29.0734 15.2143 28.0234 13.931 28.0234Z"
                        fill="#00AFF0"
                      />
                    </svg>

                    <h1 className="md:text-[36px] text-[24px] text-[#001E2D] font-bold dark:text-white">
                      Certifications
                    </h1>
                    <p className=" md:w-[321px] w-[319px]">
                      These credentials validate your proficiency and
                      competency, opening doors to diverse career opportunities
                      and advancements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-6 flex items-center justify-center">
              {/* Use Link for navigation */}
              <Link href="/courses">
                <ButtonWhite
                  className={
                    "flex items-center text-xs md:text-base text-center justify-center w-[219px] md:w-full"
                  }
                  label={
                    <>
                      View courses <ViewAllCourseIcon />
                    </>
                  }
                />
              </Link>
            </div>

            <div className="flex flex-col md:py-52 py-10 md:gap-[48px] gap-5 mx-auto">
              <div className="flex flex-col space-y-[12px]">
                <h1 className="md:text-[42px] text-[24px] font-bold">
                  Co-working space
                </h1>
                <p className=" md:w-[526px] md:text-[18px] w-[319px] ">
                  Our co-working space is designed to make your work easier. We
                  make sure you have constant power, so your work doesn’t get
                  interrupted. You can pick a pricing plan that suits you best.
                  It&apos;s a great place not just for meetings but also for
                  startups. It&apos;s a place where you can work well and
                  collaborate easily with others.
                </p>
              </div>
              <Image
                width={500}
                height={500}
                src="/booksLab.png"
                alt="book pix"
                quality={100}
                className="w-[320px] h-[185px] md:w-full md:h-full"
              />
            </div>
          </div>

          <div className="md:flex hidden pl-[153px]">
            <Image
              width={500}
              height={500}
              src="/KTA.png"
              alt="no water mark"
              quality={100}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center md:w-[90%] w-full h-full mx-auto pt-[240px]">
          <div className="flex flex-col justify-center items-center py-10 space-y-5">
            <h1 className="text-[24px] md:text-[42px] font-bold">
              Specialized Programs
            </h1>
            <p className=" text-center md:w-[700px] w-[319px]">
              Our programs at Kwaratech Academy are made carefully to match
              exactly what you need to learn about technology. We focus on what
              the industry needs right now.
            </p>
          </div>

          <div className="flex gap-[32px] flex-col py-20 space-y-4">
            <div className="flex md:gap-[32px]  space-y-5 md:space-y-0 flex-col md:flex-row">
              <div className="flex flex-col justify-center md:gap-[30px] mx-auto self-stretch">
                <Image
                  width={500}
                  height={500}
                  src="/schoolboy2.png"
                  alt="pix 1"
                  quality={100}
                  className="md:h-[202px] w-[320px] h-[135px] md:w-full items-stretch"
                />

                <div className="flex justify-center items-center flex-col text-center">
                  <h className="text-[24px] md:text-[36px] font-bold">
                    Tech2School
                  </h>
                  <p className=" w-[319px] md:w-[439px]">
                    We train junior and secondary school students during school
                    hours on creating websites, writing blogs, making
                    animations, and more.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center md:gap-[30px] self-stretch mx-auto">
                <Image
                  width={500}
                  height={500}
                  src="/ladysmile.png"
                  quality={100}
                  alt="pix 1"
                  className="md:h-[202px] w-[320px] h-[135px] md:w-full items-stretch"
                />

                <div className="flex justify-center items-center flex-col text-center">
                  <h className="text-[24px] md:text-[36px] font-bold">
                    Tech4Women
                  </h>
                  <p className=" w-[319px] md:w-[439px]">
                    Empowering women with skills like digital marketing and data
                    analysis to thrive in their entrepreneurial endeavors and
                    grow in any field of their choosing.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-[32px] flex-col md:flex-row">
              <div className="flex flex-col justify-center md:gap-[30px] self-stretch mx-auto">
                <Image
                  width={500}
                  height={500}
                  quality={100}
                  src="/copper2.png"
                  alt="pix 1"
                  className="md:h-[202px] w-[320px] h-[135px] md:w-full items-stretch"
                />

                <div className="flex justify-center items-center flex-col text-center">
                  <h className="text-[36px] font-bold">Tech4Kopa</h>
                  <p className=" w-[319px] md:w-[439px]">
                    Through our specialized Tech4kopa initiative, we ensure corp
                    members gain a comprehensive understanding of essential tech
                    proficiencies.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center md:gap-[30px] self-stretch mx-auto">
                <Image
                  width={500}
                  height={500}
                  quality={100}
                  src="/boi.png"
                  alt="pix 1"
                  className="md:h-[202px] w-[320px] h-[135px] md:w-full items-stretch"
                />

                <div className="flex justify-center items-center flex-col text-center">
                  <h className="text-[36px] font-bold">Summer Experience</h>
                  <p className="w-[319px] md:w-[439px]">
                    Fun and educational tech activities for kids during holidays
                    to learn programming, Excel, animation, public speaking, and
                    video editing.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-6 flex items-center justify-center ">
              {/* Use Link for navigation */}
              <Link href="/courses">
                <ButtonWhite
                  className={
                    "flex items-center text-xs md:text-base text-center justify-center"
                  }
                  label={
                    <>
                      Register now <ViewAllCourseIcon />
                    </>
                  }
                />
              </Link>
            </div>
          </div>

          <div className="md:pt-[243px] flex justify-between gap-32 items-center space-y-10 flex-col md:flex-row">
            <div className="space-y-5">
              <h1 className="md:text-[40px] text-[24px] font-bold">
                Internship Opportunities
              </h1>
              <p className="md:w-[439px] w-[326px] md:text-[18px]">
                Join our team as an intern or explore our internship programs to
                gain practical experience and kickstart your tech career.
              </p>

              <div className="pt-8 w-[288px] md:w-full">
                <Link href="/courses">
                  <ButtonWhite
                    className={
                      "flex items-center w-full text-base text-center justify-center"
                    }
                    label={
                      <>
                        Apply now <ViewAllCourseIcon />
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
                alt="kta-image"
                quality={100}
                className="w-[527.226px] h-[323.309px] hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>

      <SectionContents />
    </>
  );
}
