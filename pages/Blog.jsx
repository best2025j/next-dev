import React from "react";
import Footer from "../components/layout/Footer";
import SectionContents from "../components/ui/SectionContents";
import PageWrapper from "./PageWrapper";

export default function Blog() {
  return (
    <PageWrapper>
      <div className="py-40">
        <h1>blog page</h1>
      </div>
      <SectionContents />
      <Footer />
    </PageWrapper>
  );
}
