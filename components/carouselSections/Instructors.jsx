import React from "react";
import Image from "next/image";

const Instructors = () => {
  // const managementData = [
  //   {
  //     name: " OLUDELE Ayobami ",
  //     position: "CEO",
  //     image: "/mrAyo.jpeg",
  //   },

  //   {
  //     name: "  Ibrahim.O.OYEBANJI (FIDR,MIPAN) ",
  //     position: "Executive director",
  //     image: "/mrIbrahim.jpeg",
  //   },

  // ];

  const staffData = [
    {
      name: "OGUNDIRAN Moshood Adeniyi",
      position: " Digital Marketing Instructor",
      image: "/ade1.jpeg",
      style: "md:h-[415px] w-full h-[147px] rounded-2xl md:rounded-[2.5rem]",
    },

    {
      name: "Precious Ajayi",
      position: "Backend Developer",
      image: "/precious.png",
    },

    {
      name: "  Audu Godstime ",
      position: "Front-end Developer",
      image: "/Frame 23 (6).png",
    },

    {
      name: "Orolu Bisi Morenike",
      position: "Data Analysis",
      image: "/Frame 23 (9).png",
    },

    {
      name: "Odekunle Joseph",
      position: "UI/UX Designer",
      image: "/Frame 23 (8).png",
    },

    {
      name: "James Moses Sambo",
      position: "HRM, CRM & CSE",
      image: "/mrSambo.jpeg",
      style: "md:h-[415px] w-full h-[147px] rounded-2xl md:rounded-[2.5rem]",
    },
  ];

  // Define the range of indices to display (excluding first and last indices)
  const endIndex = staffData.length - 2; // Exclude the last image
  const startIndex = endIndex - 2; // Display 3 images, so subtract 2

  // Get the subset of images to display
  const visibleImages = staffData.slice(startIndex, endIndex + 1);

  return (
    <div className="w-full h-full py-10 flex flex-col md:items-center md:mx-auto">
      <div className=" inline-flex flex-col items-start max-w-[1200px]">
        <div className="w-full md:w-[535px] space-y-5 pl-6 md:pl-0">
          <h1 className="md:text-5xl text-2xl font-bold">
            Meet Our Instructors
          </h1>
          <p className="md:text-[18px] w-[294px]">
            Our expert instructors are industry leaders with a wealth of
            knowledge and experience. They&apos;re dedicated to helping you
            succeed.
          </p>
        </div>

        <div className="md:py-28 py-12">
          {/* <div className="md:py-28 py-12">
            <div className="md:grid grid-cols-1 md:grid-cols-3 gap-20 h-full w-full hidden">
              {managementData.map((item, index) => (
                <div key={index} className="py-6 space-y-2">
                  <Image
                    src={item.image}
                    alt=""
                    width={500}
                    height={500}
                    className="rounded-[2.5rem] h-[400px]"
                  />

                  <div className="space-y-2">
                    <h1 className="text-sky-500 dark:text-sky-400">
                      {item.name}
                    </h1>
                    <h1 className="text-slate-700 dark:text-slate-500">
                      {item.position}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="md:grid grid-cols-1 md:grid-cols-3 gap-20 h-full w-full hidden">
            {staffData.map((item, index) => (
              <div key={index} className="py-6 space-y-2">
                <Image
                  priority={true}
                  src={item.image}
                  alt=""
                  width={500}
                  height={500}
                  className={item.style}
                />

                <div className="space-y-2">
                  <h1 className="text-sky-500 dark:text-sky-400">
                    {item.name}
                  </h1>
                  <h1 className="text-slate-700 dark:text-slate-500">
                    {item.position}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          <div className="flex md:hidden flex-row h-full w-full gap-4">
            {visibleImages.map((item, index) => (
              <div key={index} className="py-6 space-y-2">
                <Image
                  priority={true}
                  src={item.image}
                  alt=""
                  width={500}
                  height={500}
                  className={item.style}
                />

                <div className="space-y-2">
                  <h1 className="text-sky-500 dark:text-sky-400 text-sm">
                    {item.position}
                  </h1>
                  <h1 className="text-slate-700 dark:text-slate-500 text-sm">
                    {item.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
