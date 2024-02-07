import SectionContents from "../../components/ui/SectionContents";
import Footer from "../../components/shared/Footer";
import image from "../../public/contentwrit.png";
import ButtonWhite from "../../components/buttons/ButtonWhite";
import ViewAllCourseIcon from "../../components/icons/ViewAllCourseIcon";
import Image from "next/image";
import Link from "next/link";

export default function ContentWriting() {
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
          <Image src={image} alt="no image" quality={100} />
          <div className="flex justify-between px-2 md:py-[40px] bg-white items-start py-6">
            <div className="space-y-4 w-[439px]">
              <h1 className="font-bold text-[24px] md:text-[48px]">
                Content Writing
              </h1>
              <p className="md:text-base w-[201px] md:w-auto text-xs font-normal text-[#4F616D]">
                Welcome to the Content Writing Mastery course, a comprehensive
                program designed to equip you with the skills and knowledge
                needed to excel in the field of content writing.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h1 className="font-bold text-[14px] md:text-[36px]">
                Instructor
              </h1>
              <span className="text-xs md:text-[18px]">Adejumo A. A</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 pt-[48px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[#00AFF0] font-bold text-[24px] md:text-[30px]">
              Content Writing
            </h1>
            <span className="text-[#001E2D] font-[600] text-sm md:text-[28px]">
              Duration: 3 months
            </span>
          </div>

          <div className=" text-[#4F616D] space-y-3 ">
            <h1>
              In our Front-End Development course, you&apos;ll master the art of
              creating user-friendly and visually appealing websites.
              Here&apos;s what you can expect to learn:
            </h1>

            <ul className="list-disc list-inside md:text-[18px] text-sm font-normal pt-4 md:pt-0 space-y-2 md:space-y-0">
              <li>
                Assimilate the knowledge and practical experience needed to
                excel in the field of content writing.
              </li>
              <li>Create real writing samples to build a writing portfolio.</li>
              <li>
                Gain a deep understanding of the principles, importance, and
                diverse forms of content writing.
              </li>

              <h1> What You&apos;ll Learn</h1>

              <li>
                Master content writing principles and techniques to create
                effective, audience-focused communication.
              </li>
              <li>
                Gain a deep understanding of research and content strategy to
                create informed, engaging content that achieves your business
                goals.
              </li>
              <li>
                Become proficient in SEO and website content to boost
                visibility, drive traffic, and engage audiences.
              </li>
              <li>
                Create content for various online platforms, including social
                media, email marketing, and newsletters.
              </li>
              <li>
                Harness the power of persuasive copywriting for driving
                conversions and sales, while honing essential editing and
                proofreading skills to ensure flawless, polished content.
              </li>
              <li>
                Unlock the potential of freelance writing and career building,
                uncovering content writing opportunities, portfolio creation,
                and the path to a thriving professional journey.
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
      </div>

      <SectionContents />
      <Footer />
    </>
  );
}
