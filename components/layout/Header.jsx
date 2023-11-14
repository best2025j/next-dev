"use client";

import { useState } from "react";
import image from "../../assets/images/kwaraTech.jpg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ButtonWhite from "../Buttons/ButtonWhite";
import ButtonDefault from "../Buttons/ButtonDefault";
import Image from "next/image";
import DarkModeSwitch from "../ui/DarkModeSwitch";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const [nav, setNav] = useState(false);
  // Function to handle menu icon click
  const handClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  // router
  const router = useRouter();
  const { pathName } = router;
  console.log(pathName);

  const inactiveLink = "hover:text-blue-500 active:text-blue-800 ";
  // Added 'active-link' class
  const activeLink = inactiveLink + " text-[#00AFF0]";

  return (
    <div
      className={
        nav
          ? "bg-white dark:bg-black h-[70px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]"
          : "dark:bg-black border-b border-white shadow shadow-slate-400 bg-white h-[70px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]"
      }
    >
      <div className="px-2 py-6 flex w-full justify-between items-center h-full 2xl:px-16">
        <Link href="#">
          <Image
            src={image}
            // quality={100}
            alt="/"
            width="110px"
            height="128px"
            className="cursor-pointer"
          />
        </Link>

        {/* desktop view Navigation links */}
        <ul className="hidden md:flex capitalize space-x-6">
          <li className={pathName.includes("/") ? activeLink : inactiveLink}>
            <Link exact="true" to="/">
              Home
            </Link>
          </li>
          <li
            className={
              pathName.includes("/courses") ? activeLink : inactiveLink
            }
          >
            <Link to="/courses">Courses</Link>
          </li>
          <li
            className={
              pathName.includes("/services") ? activeLink : inactiveLink
            }
          >
            <Link to="/services">Services</Link>
          </li>
          <li
            className={pathName.includes("/about") ? activeLink : inactiveLink}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={pathName.includes("/blog") ? activeLink : inactiveLink}
          >
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        {/* FORM BUTTON*/}

        <div className="hidden md:flex items-center justify-center ">
          {/* <div className="">
            <ButtonDefault label="Login" className={"text-[#00AFF0]"} />
          </div>
          <div className="">
            <ButtonWhite label="Sign up" className={""} />
          </div> */}
          <div className="hidden lg:flex items-center justify-center space-y-2 ">
            <div className="">
              <ButtonWhite onClick={handleOrderClick} label="Get started" />
            </div>
            <div className="">
              <DarkModeSwitch />
            </div>
          </div>
        </div>

        <div onClick={handClick} className="md:hidden cursor-pointer">
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
              ? " fixed left-0 top-0 w-[72%] sm:w-[60%] h-full bg-white dark:bg-black border-r rounded-r-3xl p-5 ease-in duration-700"
              : "fixed left-[-100%] h-full top-0 p-5 ease-out duration-700 bg-white"
          }
        >
          <div className="">
            <div className="flex w-full items-center justify-between ">
              <Link href="/">
                <Image
                  src={image}
                  alt="/"
                  width="110px"
                  height="128px"
                  className=" cursor-pointer"
                />
              </Link>

              <div
                onClick={handClick}
                className="rounded-full shadow  shadow-slate-500 p-2 cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            {/*  */}
            {/* <div className="border-b border-gray-400">
              <p className="w-[90%] sm:w-[90%] md:w-full">
                Let&#39; build something together
              </p>
            </div> */}
            <div className="flex flex-col pt-3 ">
              <ul className="font-500">
                <li
                  className={pathName.includes("/") ? activeLink : inactiveLink}
                  onClick={handleClose}
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  className={
                    pathName.includes("/courses") ? activeLink : inactiveLink
                  }
                  onClick={handleClose}
                >
                  <Link to="/courses">Courses</Link>
                </li>
                <li
                  className={
                    pathName.includes("/services") ? activeLink : inactiveLink
                  }
                  onClick={handleClose}
                >
                  <Link to="/services">Services</Link>
                </li>
                <li
                  className={
                    pathName.includes("/about") ? activeLink : inactiveLink
                  }
                  onClick={handleClose}
                >
                  <Link to="/about">About</Link>
                </li>
                <li
                  className={
                    pathName.includes("/blog") ? activeLink : inactiveLink
                  }
                  onClick={handleClose}
                >
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>

              <div className="flex justify-center items-center h-40 w-full">
                {/* <DarkModeSwitch /> */}
              </div>
            </div>

            <div className="bottom-1 sm:bottom-0 absolute  items-center justify-center w-[80%]">
              <div>
                <ButtonWhite className={"w-full"} label="Sign up" />
              </div>

              <div>
                <ButtonDefault className={"w-full"} label="Login" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

