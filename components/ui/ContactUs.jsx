import React from "react";
import Image from "next/image";
import ContactIcon from "../icons/ContactIcon";
import ButtonWhite from "../buttons/ButtonWhite";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="md:flex w-full h-full bg-white dark:bg-black py-20 px-4">
      <div className="flex-1 h-full w-full relative">
        <Image
          width={500}
          height={500}
          src="/Rectangle 1.png"
          alt="show pix alone"
          className="rounded-t-[50px] md:rounded-none md:rounded-l-[240px] shrink-0 w-full h-[355px] md:h-[595px] md:w-[780px]"
        />

        <motion.img
          initial={{
            scaleY: 2.4,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ scaleY: 1 }}
          width={500}
          height={500}
          src="/Group 5.png"
          alt="show icon alone"
          className="rounded-t-[50px] absolute top-0  shrink-0 w-full h-[355px] md:h-[548.615px] md:w-[651.247px]"
        />
      </div>

      <div className="flex-1 bg-[#001E2D] md:w-full w-full h-[355px] md:h-[595px] rounded-b-[50px] md:rounded-none md:rounded-r-[240px]">
        <div className="flex flex-col mx-auto h-full w-full items-center justify-center">
          <div className="text-[#fff] space-y-[16px]">
            <h1 className="md:text-6xl text-2xl font-bold">Reach Out to Us</h1>
            <p className="w-[301px] md:w-[438px] md:`text-lg font-normal">
              Got questions or need assistance? Our team is here to help. Feel
              free to reach out to us with your inquiries, feedback, or just to
              say hello. We&apos;re committed to providing you with the best
              learning and workspace experience possible.
            </p>
            <div className="py-6 w-[288px] md:w-full">
              <ButtonWhite
                className={
                  "flex items-center w-full text-base text-center justify-center"
                }
                label={
                  <>
                    Contact Us <ContactIcon />
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
