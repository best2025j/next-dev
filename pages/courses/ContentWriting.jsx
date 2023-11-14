"use client";
import React from "react";
import { ButtonWhite } from "@/components/Buttons/ButtonWhite";
import { ViewAllCourseIcon } from "@/components/icons/ViewAllCourseIcon";
import SectionContents from "@/components/layout/SectionContents";
import { Footer } from "@/components/layout/Footer";
import { useParams } from "react-router-dom";

export const ContentWriting = () => {
  const { name } = useParams();
  // Access the 'id' parameter from the route

  return (
    <div className="pt-40">
      <h1>Course Name: {name}</h1>
      <SectionContents />
      <Footer />
    </div>
  );
};
