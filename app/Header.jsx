"use client";
import React, { useState } from "react";
import Image from "next/image";
import image from "../../Assets/images/HeaderLogo.png";
import "animate.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import DarkModeSwitch from "../../components/DarkModeSwitch";
// import DarkModeSwitch from "../components/DarkModeSwitch";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handClick = () => {
    setNav(!nav);
  };

  const handClose = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        nav
          ? " bg-orange_light dark:bg-black h-[70px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]"
          : "dark:bg-black bg-orange_light h-[70px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]"
      }
    >
      <nav className="flex justify-between h-full w-full items-center">
        <Link href="/">
          <Image src={image} alt="home" className="w-12 h-10" />
        </Link>

        <ul className="md:flex hidden items-center space-x-6">
          <li>
            <Link
              href="/"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10"
            >
              Log In
            </Link>
          </li>

          <button className=" bg-orange10 rounded-xl h-10 w-[169px] ">
            <Link href="/signup">Sign up</Link>
          </button>

          <DarkModeSwitch />
        </ul>

        <button className="md:hidden cursor-pointer " onClick={handClick}>
          {nav ? (
            <AiOutlineClose className="w-7 h-7" />
          ) : (
            <AiOutlineMenu className="w-7 h-7" />
          )}
        </button>
      </nav>

      {/* mobile view */}

      <div
        className={
          nav
            ? "md:hidden fixed left-0 bg-white dark:bg-black w-full h-full ease-in duration-500"
            : "fixed left-[-100%] h-screen  ease-out duration-700"
        }
      >
        <ul className="text-center space-y-10 py-10">
          <li onClick={handClose}>
            <Link
              href="/"
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
            >
              Home
            </Link>
          </li>
          <li onClick={handClose}>
            <Link
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
              href="/about"
            >
              About Us
            </Link>
          </li>
          <li onClick={handClose}>
            <Link
              className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
              href="/contact"
            >
              Contact Us
            </Link>
          </li>
          <li onClick={handClose}>
            <Link
              className="text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
              href="/login"
            >
              Log In
            </Link>
          </li>

          <div className="">
            <button className=" bg-orange10 rounded-xl h-12 w-[169px] ">
              <Link href="/signup">Sign up</Link>
            </button>
          </div>

          <div className="flex justify-center items-center">
            <DarkModeSwitch />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import logo from "../../Assets/images/HeaderLogo.png";
// import Link from "next/link";
// import "animate.css";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import DarkModeSwitch from "./DarkModeSwitch";

// export default function Header() {
//   const [nav, setNav] = useState(false);

//   const handClick = () => {
//     setNav(!nav);
//   };

//   const handClose = () => {
//     setNav(!nav);
//   };

//   console.log("handClick");

//   return (
//     <div
//       className={
//         nav
//           ? " bg-orange_light dark:bg-black h-[70px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]"
//           : "dark:bg-black bg-orange_light h-[70px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]"
//       }
//     >
//       <div className="flex justify-between h-full w-full items-center">
//         <Link href="/">
//           <Image
//             width={500}
//             height={500}
//             src={logo}
//             alt="home"
//             className="w-12 h-10"
//           />
//         </Link>

//         <ul className="md:flex hidden items-center space-x-6">
//           <li>
//             <Link
//               href="/"
//               className="text-base font-normal hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/about"
//               className="text-base font-normal hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
//             >
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/contact"
//               className="text-base font-normal hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
//             >
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/login"
//               className="text-base font-normal hover:text-orange10 active:text-orange10 focus:text-orange10"
//             >
//               Log In
//             </Link>
//           </li>
//           <button className="text-base font-normal bg-orange10 rounded-xl h-10 w-[169px] ">
//             <Link href="/signup">SignUp</Link>
//           </button>
//           <DarkModeSwitch />
//         </ul>

//         <button className="md:hidden cursor-pointer " onClick={handClick}>
//           {nav ? (
//             <AiOutlineClose className="w-7 h-7" />
//           ) : (
//             <AiOutlineMenu className="w-7 h-7" />
//           )}
//         </button>
//       </div>

//       {/* mobile view */}

//       <div
//         className={
//           nav
//             ? "md:hidden fixed left-0 bg-white dark:bg-black w-full h-full ease-in duration-500"
//             : "fixed left-[-100%] h-screen  ease-out duration-700"
//         }
//       >
//         <ul className="text-center space-y-10 py-10">
//           <li onClick={handClose}>
//             <Link
//               href="/"
//               className="text-base font-normal hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
//             >
//               Home
//             </Link>
//           </li>
//           <li onClick={handClose}>
//             <Link
//               className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
//               href="/about"
//             >
//               About Us
//             </Link>
//           </li>
//           <li onClick={handClose}>
//             <Link
//               className="hover:text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
//               href="/contact"
//             >
//               Contact Us
//             </Link>
//           </li>
//           <li onClick={handClose}>
//             <Link
//               className="text-orange10 active:text-orange10 focus:text-orange10 focus:underline focus:underline-offset-4 focus:decoration-4"
//               href="/auth/login"
//             >
//               Log In
//             </Link>
//           </li>

//           <div className="">
//             <button className=" bg-orange10 rounded-xl h-12 w-[169px] ">
//               <Link href="/auth/signup">SignUp</Link>
//             </button>
//           </div>

//           <div className="flex justify-center items-center">
//             <DarkModeSwitch />
//           </div>
//         </ul>
//       </div>
//     </div>
//   );
// }
