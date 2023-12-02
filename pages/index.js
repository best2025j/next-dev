import CarouselCards from "@/components/carouselSections/CarouselCards";
import Instructors from "@/components/carouselSections/Instructors";
import Sections from "@/components/sections/Sections";
import Nav from "@/components/shared/Nav";
import Carousel from "@/components/ui/Carousel";
import ContactUs from "@/components/ui/ContactUs";
import Hero from "@/components/ui/Hero";
import OutSponsors from "@/components/ui/OutSponsors";
import Testimony from "@/components/ui/Testimony";
import Head from "next/head";
import PageWrapper from "./PageWrapper";

export default function Home() {
  return (
    <>
      <Head>
        <title>kwaratech Academy</title>
        <meta name="description" content="Kwara tech academy" />
        <link rel="icon" href="/kw.png" />
      </Head>
      <Nav />

      <PageWrapper>
        <Hero />
        <Carousel />
        <OutSponsors />
        <CarouselCards />
        <Sections />
        <ContactUs />
        <Instructors />
        <Testimony />
      </PageWrapper>
      {/* <Footer /> */}
    </>
  );
}
