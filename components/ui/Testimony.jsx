import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Testimony = () => {
  return (
    <div className=" bg-[#fff] dark:bg-black text-white h-full py-10 ">
      <div className="md:w-[80%] px-4 md:px-0 flex justify-center items-center flex-col mx-auto">
        <h1 className="text-black dark:text-white text-3xl  md:text-5xl font-bold">
          Testimonials
        </h1>

        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeInOut" }}
          className=" md:flex space-y-4 justify-between items-center py-10 gap-10"
        >
          <div className="bg-[#4F616D] rounded-[60px] h-full w-full p-10 space-y-3 text-justify animate__animated animate__fadeInLeft">
            <Image priority src="/semi.png" alt="" width={30} height={30} />
            <h1 className="md:text-lg text-sm">
              I started my tech journey with Kwaratech Academy&apos;s essential
              ICT training. The beginner-friendly approach made complex concepts
              easy to understand. I&apos;ve gained skills that are not only
              helping me with my coursework but also opening doors for
              internships. KTA is the best place to kickstart a career in tech.
            </h1>
            <h5 className="flex justify-end py-4">Amina Yusuf</h5>
          </div>

          <div className="bg-[#4F616D]  rounded-[60px] h-full w-full p-10 self-stretch space-y-3 text-justify animate__animated animate__fadeInDown">
            <Image priority src="/semi.png" alt="" width={30} height={30} />
            <h1 className="md:text-lg text-sm">
              &quot;I can&apos;t thank Kwaratech Academy enough for their
              top-notch tech courses. As a web developer, I needed to upskill in
              various areas, and KTA had the perfect courses for me. The
              hands-on experience and expert guidance were invaluable. I$apos;ve
              not only improved my skills but also landed a new job in a top
              tech company. KTA is a game-changer!&quot;
            </h1>
            <h5 className="flex justify-end py-4">Emmanuel Osai</h5>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimony;
