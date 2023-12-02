import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function User() {
  return (
    <div className="py-40 w-full h-full bg-slate-600">
      <div className="relative">
        <Image
          width={500}
          height={500}
          src="/Rectangle 1.png"
          alt="show pix alone"
          className="rounded-t-[50px] md:rounded-none md:rounded-l-[240px] shrink-0 w-full h-[355px] md:h-[595px] md:w-[780px]"
        />

        <motion.img
          initial={{
            scaleX: 2.4,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ scaleX: 1 }}
          width={500}
          height={500}
          src="/Group 5.png"
          alt="show icon alone"
          className="rounded-t-[50px] absolute top-0 md:rounded-none md:rounded-l-[240px] shrink-0 w-full h-[355px] md:h-[595px] md:w-[780px]"
        />
      </div>
    </div>
  );
}
