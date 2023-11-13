
import { CarouselCards } from "@/components/carouselSections/CarouselCards";
import Instructors from "@/components/carouselSections/Instructors";
import Footer from "@/components/layout/Footer";
import Sections from "@/components/sections/Sections";
import { Carousel } from "@/components/ui/Carousel";
import ContactUs from "@/components/ui/ContactUs";
import Hero from "@/components/ui/Hero";
import OutSponsors from "@/components/ui/OutSponsors";
import Testimony from "@/components/ui/Testimony";

export default function Home() {
  return (
    <>
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
