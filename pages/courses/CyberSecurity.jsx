import React from "react";
import SectionContents from "../../components/ui/SectionContents";
import Footer from "../../components/layout/Footer";
import ButtonWhite from "../../components/buttons/ButtonWhite";
import ViewAllCourseIcon from "../../components/icons/ViewAllCourseIcon";
import image from "../../assets/images//cyber.png";
import Image from "next/image";
import Link from "next/link";

export default function CyberSecurity() {
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
          <Image priority={true} src={image} alt="no image" />
          <div className="flex justify-between px-2 md:py-[40px] bg-white items-start py-6">
            <div className="space-y-4 w-[439px]">
              <h1 className="font-bold text-[24px] md:text-[48px]">
                Cybersecurity{" "}
              </h1>

              <p className="md:text-base w-[201px] md:w-auto text-xs font-normal text-[#4F616D]">
                Learn to protect digital assets from cyber threats with
                comprehensive training in cybersecurity.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h1 className="font-bold text-[14px] md:text-[36px]">
                Instructor
              </h1>
              <span className="text-xs md:text-[18px]">Mr Adeniyi</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 pt-[48px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[#00AFF0] font-bold text-[24px] md:text-[30px]">
              Cybersecurity
            </h1>
            <span className="text-[#001E2D] font-[600] text-sm md:text-[28px]">
              Duration: 3 months
            </span>
          </div>

          <div className=" text-[#4F616D] space-y-3 ">
            <h1>Course Overview :</h1>

            <ul className="list-disc list-inside md:text-[18px] text-sm font-normal pt-4 md:pt-0 space-y-2 md:space-y-0">
              <li>
                Security Governance, Network Security, Cyber Attacks, Web
                Application Security, Malware
              </li>
              <li>Practical Cyber Security skills through hands on labs</li>
              <li>
                Understand user research, wireframing, prototyping, and
                usability testing.
              </li>
              <li>
                Prepare for Cyber Security interviews by learning common
                interview questions and how to respond
              </li>
              <li>
                Prepare for in-demand Cyber Security certifications such as
                CompTIA Security+ and CEH
              </li>
              <li>
                An advanced practical skillset in defeating all online threats -
                advanced hackers, trackers, malware and all Internet nastiness
                including mitigating government spying and mass surveillance.
              </li>

              <li>
                Start a career in cyber security. Become a cyber security
                specialist.
              </li>
              <li>The very latest up-to-date information and methods.</li>
              <li>
                We cover operating system security, privacy, and patching - On
                Windows 7, Windows 8, Windows 10, MacOS and Linux.
              </li>
              <li>
                Explore the threat landscape - Darknets, dark markets, zero day
                vulnerabilities, exploit kits, malware, phishing and much more.
              </li>
              <li>
                You will master encryption in an easy to follow crash course.
              </li>
              <li>
                Go in-depth into security through physical and virtual isolation
                and compartmentalization. Covering sandboxes, application
                isolation, virtual machines, Whonix and Qubes OS.
              </li>
              <li>
                You will learn about nation state secret tracking and hacking
                infrastructure.
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
