// import React from "react";
"use client";

import Image from "next/image";

export const OutSponsors = () => {
  const staffData = [
    "/unescoUnited.png",
    "/kwaralLog.png",
    "/ntda.png",
    "/eFyg1QEJ 1.png",
    "/XqUYhl60 1.png",
  ];

  return (
    <section>
      <div className="h-full w-full justify-center mx-auto sm:mx-0 sm:w-full">
        <div className="grid grid-cols-3 lg:grid-0 lg:flex w-full items-center justify-center">
          {staffData.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center rounded-3xl p-2 sm:flex h-full w-auto flex-col"
            >
              <Image
                className="h-14 w-14 md:h-full md:w-full"
                src={image}
                alt={`Image ${index + 5}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
