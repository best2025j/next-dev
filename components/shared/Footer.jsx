import { useState } from "react";
import images from "../../assets/images/KTA. logo.png";
import ButtonWhite from "../buttons/ButtonWhite";
import ViewAllCourseIcon from "../icons/ViewAllCourseIcon";
import { FaFacebook } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import ig from "../../assets/svgs/ig.svg";
import Twitter from "../../assets/svgs/Twitterlogo.svg";
import whatsapp from "../../assets/svgs/whatsapp.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Footer = () => {
  const [nav, setNav] = useState(false);
  // Function to handle menu icon click

  // const handClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  // router
  const router = useRouter();
  const { asPath } = router;
  console.log(asPath);

  const inactiveLink = "hover:text-blue-500 active:text-blue-800 ";
  const activeLink = inactiveLink + " text-[#00AFF0]"; // Added 'active-link' class

  return (
    <div className="bg-[#001E2D] dark:bg-black md:py-40 py-6 text-white w-full md:h-[620px]">
      <div className="w-[90%] mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div className="md:flex hidden">
            <Image src={images} alt="" />
          </div>

          <div className="md:w-[456px]">
            <p className="md:text-2xl text-xs">
              &quot; Aim for the top with Kwara Tech Academy, empowering tech
              enthusiasts through education that is who we are and that is what
              we do!&quot;
            </p>

            <div className="py-6 items-center flex md:block justify-center">
              <ButtonWhite
                className={
                  "flex items-center text-base text-center justify-center"
                }
                label={
                  <>
                    Join KTA today <ViewAllCourseIcon />
                  </>
                }
              />
            </div>
          </div>
        </div>

        <div className="flex-col px-2 py-4 m-auto justify-between items-center sm:flex-row border-b flex text-center text-gray-500">
          <h3 className="hidden md:flex">
            We also write here at KTA check out our blogs.
          </h3>

          <div className="flex space-x-5 justify-end items-center sm:w-[360px] pt-4 text-2xl cursor-pointer">
            <Link href="https://instagram.com/kwaratechacademy?igshid=MzRlODBiNWFlZA==">
              <Image
                alt="no image"
                className="cursor-pointer hover:scale-110 ease-in duration-300 rounded-full"
                width={30}
                height={30}
                src={ig}
              />
            </Link>

            <Link href="https://twitter.com/kwaratech?s=21&t=sYf7NFdQaYs03psUDuFqhQ">
              <Image
                alt="no image"
                className="cursor-pointer hover:scale-110 ease-in duration-300 rounded-full"
                width={30}
                height={30}
                src={Twitter}
              />
            </Link>

            <Link href="https://wa.me/07011198112">
              <Image
                alt="no image"
                className="cursor-pointer hover:scale-110 ease-in duration-300 rounded-full"
                width={30}
                height={30}
                src={whatsapp}
              />
            </Link>

            <Link href="https://www.facebook.com/kwaratechacademy?mibextid=LQQJ4d">
              <FaFacebook className="text-white bg-lightBlue h-8 rounded-full w-8 cursor-pointer hover:scale-110 ease-in duration-300 p-1" />
            </Link>

            <Link href="https://www.linkedin.com/in/kwara-tech-academy-a774a1244">
              <BiLogoLinkedin className=" text-white h-8 rounded w-8 cursor-pointer hover:scale-110 ease-in duration-300 p-[2px]" />
            </Link>
          </div>
        </div>

        <div className="md:flex space-y-4 justify-between">
          <h6 className="text-center">© 2023 KTA. All rights reserved.</h6>
          <ul className="md:flex hidden space-x-4 md:space-x-16 text-sm">
            <li
              onClick={handleClose}
              className={asPath.includes("/") ? activeLink : inactiveLink}
            >
              <Link exact="true" href="/">
                Home
              </Link>
            </li>
            <li
              onClick={handleClose}
              className={
                asPath.includes("/courses") ? activeLink : inactiveLink
              }
            >
              <Link href="/courses">Courses</Link>
            </li>
            <li
              onClick={handleClose}
              className={
                asPath.includes("/services") ? activeLink : inactiveLink
              }
            >
              <Link href="/services">Services</Link>
            </li>
            <li
              onClick={handleClose}
              className={asPath.includes("/about") ? activeLink : inactiveLink}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              onClick={handleClose}
              className={asPath.includes("/blog") ? activeLink : inactiveLink}
            >
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
