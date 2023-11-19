// import React from "react";

const Instructors = () => {
  const staffData = [
    {
      name: "  Ayobami OLUDELE ",
      position: "CEO",
      image: "/Frame 23.png",
    },
    {
      name: "Ibrahim.O.OYEBANJI (FIDR,MIPAN)",
      position: "Executive director",
      image: "/Frame 23 (1).png",
    },
    {
      name: "Mrs Orolu",
      position: "Chief Accountant",
      image: "/Frame 23 (2).png",
    },
    {
      name: "Miss Aishat",
      position: "Executive director",
      image: "/Frame 23 (3).png",
    },
    {
      name: "Gt",
      position: "Software Engineer",
      image: "/Frame 23 (4).png",
    },
    {
      name: "OGUNDIRAN Moshood Adeniyi",
      position: " Digital Marketing Instructor",
      image: "/Frame 23 (5).png",
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
          <p className="text-md w-[294px]">
            Our expert instructors are industry leaders with a wealth of
            knowledge and experience. They&apos;re dedicated to helping you
            succeed.
          </p>
        </div>

        <div className="md:py-28">
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-20 h-full w-full">
            {visibleImages.map((item, index) => (
              <div key={index} className="py-6 space-y-2">
                <img src={item.image} alt="" />

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

          <div className="md:hidden flex h-full w-full gap-4">
            {visibleImages.map((item, index) => (
              <div key={index} className="py-6 space-y-2">
                <img src={item.image} alt="" />

                <div className="space-y-2">
                  <h1 className="text-sky-500 dark:text-sky-400 text-sm">
                    {item.name}
                  </h1>
                  <h1 className="text-slate-700 dark:text-slate-500 text-sm">
                    {item.position}
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
