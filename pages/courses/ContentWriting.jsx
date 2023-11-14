"use client";
import React from "react";
import { ButtonWhite } from "@/components/Buttons/ButtonWhite";
import { ViewAllCourseIcon } from "@/components/icons/ViewAllCourseIcon";
import SectionContents from "@/components/layout/SectionContents";
import { Footer } from "@/components/layout/Footer";

export default function ContentWriting() {
  return (
    <div className="pt-40">
      <h1>Course Name: {name}</h1>
      <SectionContents />
      <Footer />
    </div>
  );
}
