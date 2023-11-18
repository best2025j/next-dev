import Image from "next/image";
import React from "react";
import image from "../assets/images/ErrorPage.png";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full md:flex justify-center items-center w-full py-40 text-white dark:text-white">
      <div className="space-y-[50px] px-14">
        <h1 className="text-3xl font-bold">WE ARE SORRY, PAGE NOT FOUND!</h1>
        <p className="max-w-md">
          The page you are looking for might have been removed had it’s name
          changed or is temporarily unavailable
        </p>
        <button className=" bg-orange10 rounded-xl h-14 w-[264px] ">
          <Link href="/">Back to Homepage</Link>
        </button>
      </div>
      <div>
        <Image
          src={image}
          width="auto"
          height="auto"
          alt="error image"
          className="w-[321px] h-[200px] md:w-auto md:h-auto md:flex pt-6 md:pt-0 animate__animated animate__fadeIn md:p-0 mx-auto"
        />
      </div>
    </div>
  );
}
