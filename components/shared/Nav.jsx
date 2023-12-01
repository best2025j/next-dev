"use client";
// Import necessary modules and components
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import DarkModeSwitch from "../ui//DarkModeSwitch";
import ButtonWhite from "@/components/buttons/ButtonWhite";
import { useRouter } from "next/router";

// Navigation component
export default function Nav() {
  const [nav, setNav] = useState(false);

  // router
  const router = useRouter();
  const { asPath } = router;
  console.log(asPath);

  // Function to handle menu icon click
  const handleToggleNav = () => setNav(!nav);

  // Function to close the mobile navigation

  const handleCloseNav = () => setNav(false);

  // CSS classes for active and inactive links
  const inactiveLink = "hover:text-blue-500 active:text-blue-800 ";

  const activeLink = `${inactiveLink} text-[#00AFF0]`;

  return (
    <div
      className={
        nav
          ? "bg-white dark:bg-black h-[70px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]"
          : "dark:bg-black border-b border-white shadow shadow-slate-400 bg-white h-[70px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]"
      }
    >
      <div className="px-2 py-6 flex w-full justify-between items-center h-full 2xl:px-16">
        <Link href="/">
          <Image
            src="/kwaraTech.png"
            alt="logo-pix"
            width={120} // Set to the desired width in pixels
            height={120} // Set to the desired height in pixels
            quality={100}
            className="cursor-pointer"
          />
        </Link>

        <ul className="hidden md:flex capitalize space-x-6">
          <Link
            className={asPath === "/" ? activeLink : inactiveLink}
            href={"/"}
          >
            home
          </Link>

          <Link
            className={asPath.includes("/Course") ? activeLink : inactiveLink}
            href={"/Course"}
          >
            course
          </Link>

          <Link
            className={asPath.includes("/Services") ? activeLink : inactiveLink}
            href={"/Services"}
          >
            services
          </Link>

          <Link
            className={asPath.includes("/About") ? activeLink : inactiveLink}
            href={"/About"}
          >
            about
          </Link>
          <Link
            className={asPath.includes("/Blog") ? activeLink : inactiveLink}
            href="https://medium.com/@kwaratechacad"
          >
            blog
          </Link>
        </ul>

        <div className="hidden md:flex items-center justify-center space-x-1">
          <div className="">
            <ButtonWhite label="Get Started" className="" />
          </div>

          <div className="">
            <DarkModeSwitch />
          </div>
        </div>

        {/* Form and Dark Mode Switch */}

        {/* Mobile Menu Icon */}
        <div onClick={handleToggleNav} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* modal */}
      {/* MOBILE view */}

      <div
        // backdrop color
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80" : ""
        }
      >
        {/* Side Drawer Menu */}

        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[72%] md:w-[60%] h-full bg-white dark:bg-black border-r rounded-r-3xl p-5 ease-in duration-700"
              : "fixed left-[-100%] h-full top-0 p-5 ease-out duration-700 bg-white "
          }
        >
          <div className="">
            <div className="flex w-full h-full items-center justify-between ">
              <Link href="/">
                <Image
                  src="/kwaraTech.png"
                  quality={100}
                  alt="/no pix"
                  width={120} // Set to the desired width in pixels
                  height={70} // Set to the desired height in pixels
                  className=" cursor-pointer"
                />
              </Link>

              <div
                onClick={handleToggleNav}
                className="rounded-full shadow  shadow-slate-500 p-2 cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>

            <div className="flex flex-col pt-4 md:px-0">
              <ul className="font-500">
                <li
                  className={asPath === "/" ? activeLink : inactiveLink}
                  onClick={handleCloseNav}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={
                    asPath.includes("/Course") ? activeLink : inactiveLink
                  }
                  onClick={handleCloseNav}
                >
                  <Link href="/Course">Course</Link>
                </li>
                <li
                  className={
                    asPath.includes("/Services") ? activeLink : inactiveLink
                  }
                  onClick={handleCloseNav}
                >
                  <Link href="/Services">Services</Link>
                </li>
                <li
                  className={
                    asPath.includes("/About") ? activeLink : inactiveLink
                  }
                  onClick={handleCloseNav}
                >
                  <Link href="/About">About</Link>
                </li>
                <li
                  className={
                    asPath.includes("/Blog") ? activeLink : inactiveLink
                  }
                  onClick={handleCloseNav}
                >
                  <Link href="https://medium.com/@kwaratechacad">Blog</Link>
                </li>
              </ul>

              <div className="flex justify-center items-center h-40 w-full">
                <DarkModeSwitch />
              </div>
            </div>

            <div className="bottom-1 sm:bottom-0 absolute  items-center justify-center w-[80%]">
              <div>
                <ButtonWhite className={"w-full"} label="Get Started" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
