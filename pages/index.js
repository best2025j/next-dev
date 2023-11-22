import CarouselCards from "@/components/carouselSections/CarouselCards";
import Instructors from "@/components/carouselSections/Instructors";
import Sections from "@/components/sections/Sections";
import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Nav";
import Carousel from "@/components/ui/Carousel";
import ContactUs from "@/components/ui/ContactUs";
import Hero from "@/components/ui/Hero";
import OutSponsors from "@/components/ui/OutSponsors";
import Testimony from "@/components/ui/Testimony";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>kwaratech Academy</title>
        <meta name="description" content="Kwara tech academy" />
        <link rel="icon" href="/kwaraTech.jpg" />
      </Head>
      <Nav />
      <Hero />
      <Carousel />
      <OutSponsors />
      <CarouselCards />
      <Sections />
      <ContactUs />
      <Instructors />
      <Testimony />
      <Footer />
    </>
  );
}
