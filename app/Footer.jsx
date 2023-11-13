"use client";
import { Select } from "@mantine/core";
import Image from "next/image";
import React from "react";
import image1 from "../../Assets/images/Logo2.png";
import map from "../../Assets/svgs/map.svg";
import message from "../../Assets/svgs/message.svg";
import twitter from "../../Assets/images/tw logo.png";
import instagram from "../../Assets/svgs/instagram.svg";
import facebook from "../../Assets/svgs/facebook logo.svg";

const Footer = () => {
  return (
    <footer className="px-4 text-white relative bg-[#002F43] py-10 space-y-10 dark:bg-black h-full w-full">
      <div className="space-y-10 flex space-x-6 py-10 border-b-2 flex-col md:flex-row justify-around mx-auto">
        <div className="h-auto w-auto">
          <Image
            src={image1}
            alt="logo image"
            className="w-[218px] h-[60px] md:w-[302px] md:h-[82px]"
          />
        </div>

        <div className="space-y-6 ">
          <h3 className="font-2xl font-bold underline underline-offset-8 decoration-2 ">
            Contact
          </h3>
          <div className="flex flex-row space-x-4">
            <span>
              <Image src={map} alt="map" />
            </span>
            <h2>Lekki, Lagos</h2>
          </div>
          <div className="flex flex-row space-x-4">
            <span>
              <Image src={message} alt="message" />
            </span>
            <h2>info@studentrealestates.com</h2>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-2xl font-bold underline underline-offset-8 decoration-2 ">
            Social Media
          </h3>
          <div className="flex flex-row space-x-4">
            <span>
              <Image src={twitter} alt="twitter" />
            </span>
            <h2>Twitter</h2>
          </div>
          <div className="flex flex-row space-x-4">
            <span>
              <Image src={instagram} alt="instagram" />
            </span>
            <h2>Instagram</h2>
          </div>
          <div className="flex flex-row space-x-4">
            <span>
              <Image src={facebook} alt="facebook" />
            </span>
            <h2>Facebook</h2>
          </div>
        </div>

        <div className="w-80 h-14">
          <select
            name=""
            id=""
            className="w-full rounded text-black dark:text-white h-10"
          >
            <option value="eng">English</option>
            <option value="yor">Yoruba</option>
          </select>
        </div>
      </div>

      <div className="text-center py-5">
        <p>&copy; 2022 Studentrealestates inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
