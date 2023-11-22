import React from "react";

import Image from "next/image";

const OutSponsors = () => {
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
        <div className="hidden w-full md:flex items-center justify-center">
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

        <div className="flex md:hidden flex-col w-full items-center justify-center">
          <div className="grid justify-center grid-cols-3 gap-10">
            <Image
              className="h-14 w-14 md:h-full md:w-full"
              src="/unescoUnited.png"
              alt=""
            />
            <Image
              className="h-14 w-14 md:h-full md:w-full"
              src="/kwaralLog.png"
              alt=""
            />{" "}
            <Image
              className="h-14 w-14 md:h-full md:w-full"
              src="/ntda.png"
              alt=""
            />
          </div>

          <div className="grid justify-center grid-cols-2 gap-10">
            <Image
              className="h-14 w-14 md:h-full md:w-full"
              src="/eFyg1QEJ 1.png"
              alt=""
            />

            <Image
              className="h-14 w-14 md:h-full md:w-full"
              src="/XqUYhl60 1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutSponsors;
