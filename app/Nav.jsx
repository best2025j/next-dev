"use client";
// Import necessary modules and components
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
import DarkModeSwitch from "../components/ui/DarkModeSwitch";
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

// <div
//   className={`${
//     nav
//       ? "bg-white dark:bg-black"
//       : "dark:bg-black border-b border-white shadow shadow-slate-400"
//   } h-[70px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]`}
// >
//   <div className="px-2 py-6 flex w-full justify-between items-center h-full 2xl:px-16">
//     {/* Logo */}
//     <Link href="/">
//       <Image
//         src={image}
//         alt="/"
//         width="110px"
//         height="128px"
//         className="cursor-pointer"
//       />
//     </Link>

//     {/* Desktop Navigation links */}
//     <ul className="hidden md:flex capitalize space-x-6">
//       <Link
//         className={
//           pathname.includes("/settings") ? activeLink : inactiveLink
//         }
//         href={"/"}
//       />
//       <Link
//         className={
//           pathname.includes("/settings") ? activeLink : inactiveLink
//         }
//         href={"/courses"}
//         label="Courses"
//       />
//       <Link
//         className={
//           pathname.includes("/settings") ? activeLink : inactiveLink
//         }
//         href={"/services"}
//         label="Services"
//       />
//       <Link
//         className={
//           pathname.includes("/settings") ? activeLink : inactiveLink
//         }
//         href={"/about"}
//         label="About"
//       />
//       <Link
//         className={
//           pathname.includes("/settings") ? activeLink : inactiveLink
//         }
//         href={"/blog"}
//         label="Blog"
//       />
//     </ul>

//     {/* Form and Dark Mode Switch */}
//     <div className="hidden md:flex items-center justify-center space-x-4">
//       <ButtonDefault label="Login" className="text-[#00AFF0]" />
//       <DarkModeSwitch />
//     </div>

//     {/* Mobile Menu Icon */}
//     <div onClick={handleToggleNav} className="md:hidden cursor-pointer">
//       <AiOutlineMenu size={25} />
//     </div>
//   </div>

//   {/* Mobile Navigation Modal */}
//   <div
//     className={`${
//       nav ? "md:hidden" : ""
//     } fixed left-0 top-0 w-full h-screen bg-black/80`}
//   >
//     <div
//       className={`${
//         nav
//           ? "fixed left-0 top-0 w-[72%] sm:w-[60%] h-full bg-white dark:bg-black border-r rounded-r-3xl p-5 ease-in duration-700"
//           : "fixed left-[-100%] h-full top-0 p-5 ease-out duration-700 bg-white"
//       }`}
//     >
//       {/* Close Icon and Logo */}
//       <div className="flex w-full items-center justify-between">
//         <Link href="/">
//           <Image
//             src={image}
//             alt="/"
//             width="110px"
//             height="128px"
//             className="cursor-pointer"
//           />
//         </Link>
//         <div
//           onClick={handleCloseNav}
//           className="rounded-full shadow p-2 cursor-pointer"
//         >
//           <AiOutlineClose size={20} />
//         </div>
//       </div>

//       {/* Mobile Navigation Links */}
//       <div className="flex flex-col pt-3">
//         <ul className="font-500">
//           <Link
//             className={
//               pathname.includes("/settings") ? activeLink : inactiveLink
//             }
//             Mobile
//             href="/"
//             label="Home"
//             onClick={handleCloseNav}
//           />
//           <Link
//             className={
//               pathname.includes("/settings") ? activeLink : inactiveLink
//             }
//             Mobile
//             href="/courses"
//             label="Courses"
//             onClick={handleCloseNav}
//           />
//           <Link
//             className={
//               pathname.includes("/settings") ? activeLink : inactiveLink
//             }
//             Mobile
//             href="/services"
//             label="Services"
//             onClick={handleCloseNav}
//           />
//           <Link
//             className={
//               pathname.includes("/settings") ? activeLink : inactiveLink
//             }
//             Mobile
//             href="/about"
//             label="About"
//             onClick={handleCloseNav}
//           />
//           <Link
//             className={
//               pathname.includes("/settings") ? activeLink : inactiveLink
//             }
//             Mobile
//             href="/blog"
//             label="Blog"
//             onClick={handleCloseNav}
//           />
//         </ul>

//         {/* Dark Mode Switch */}
//         <div className="flex justify-center items-center h-40 w-full">
//           <DarkModeSwitch />
//         </div>
//       </div>

//       {/* Login Button */}
//       <div className="bottom-1 sm:bottom-0 absolute items-center justify-center w-[80%]">
//         <div>
//           <ButtonDefault
//             className="w-full"
//             label="Login"
//             onClick={handleCloseNav}
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// // Navigation item component for desktop
// function NavItem({ path, label }) {
//   return (
//     <li
//       className={
//         isActiveLink(path)
//           ? "text-[#00AFF0] hover:text-blue-500 active:text-blue-800"
//           : "hover:text-blue-500 active:text-blue-800"
//       }
//     >
//       <Link href={path}>{label}</Link>
//     </li>
//   );
// }

// // Navigation item component for mobile
// function NavItemMobile({ path, label, onClick }) {
//   return (
//     <li
//       className={
//         isActiveLink(path)
//           ? "text-[#00AFF0] hover:text-blue-500 active:text-blue-800"
//           : "hover:text-blue-500 active:text-blue-800"
//       }
//       onClick={onClick}
//     >
//       <Link href={path}>{label}</Link>
//     </li>
//   );
// }
