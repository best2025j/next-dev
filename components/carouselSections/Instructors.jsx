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

  return (
    <div className="w-full h-full py-10 flex flex-col items-center mx-auto ">
      <div className=" inline-flex flex-col items-start max-w-[1200px]">
        <div className="w-[294px] md:w-[535px] space-y-5">
          <h1 className="md:text-5xl text-2xl font-bold">Meet Our Instructors</h1>
          <p className="text-md">
            Our expert instructors are industry leaders with a wealth of
            knowledge and experience. They&apos;re dedicated to helping you
            succeed.
          </p>
        </div>

        <div className="py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 h-full w-full">
            {staffData.map((item, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Instructors;
