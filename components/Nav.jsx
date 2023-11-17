"use client";
// Import necessary modules and components
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
import DarkModeSwitch from "./ui/DarkModeSwitch";
import image from "../assets/images/kwaraTech.jpg";
import ButtonWhite from "@/components/buttons/ButtonWhite";

// Navigation component
export default function Nav() {
  const [nav, setNav] = useState(false);

  const pathname = usePathname();
  console.log(pathname);

  // Function to handle menu icon click
  const handleToggleNav = () => setNav(!nav);

  // Function to close the mobile navigation

  const handleCloseNav = () => setNav(false);

  // CSS classes for active and inactive links
  const inactiveLink = "hover:text-blue-500 active:text-blue-800";
  const activeLink = `${inactiveLink} text-[#00AFF0]`;

  return (
    <div
      className={`${
        nav
          ? "bg-white dark:bg-black"
          : "dark:bg-black border-b border-white shadow shadow-slate-400"
      } h-[70px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]`}
    >
      <div className="px-2 py-6 flex w-full justify-between items-center h-full 2xl:px-16">
        <Link href="/">
          <Image
            src={image}
            alt="site logo"
            width={100}
            height={110}
            className="cursor-pointer"
          />
        </Link>

        <ul className="hidden md:flex capitalize space-x-6">
          <Link
            className={pathname.includes("/") ? activeLink : inactiveLink}
            href={"/"}
          >
            home
          </Link>

          <Link
            className={pathname.includes("/course") ? activeLink : inactiveLink}
            href={"/course"}
          >
            course
          </Link>

          <Link
            className={
              pathname.includes("/service") ? activeLink : inactiveLink
            }
            href={"/service"}
          >
            service
          </Link>

          <Link
            className={pathname.includes("/about") ? activeLink : inactiveLink}
            href={"/about"}
          >
            about
          </Link>
        </ul>

        {/* Form and Dark Mode Switch */}
        <div className="hidden md:flex items-center justify-center space-x-4">
          <ButtonWhite label="Register" className="text-[#00AFF0]" />
          <DarkModeSwitch />
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={handleToggleNav} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </div>
  );
}
