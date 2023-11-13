import Carousel from "..//components/ui/Carousel";
import Hero from "../components/ui/Hero";
import OutSponsors from "../components/ui/OutSponsors";
import Sections from "../components/sections/Sections";
import ContactUs from "../components/ui/ContactUs";
import Instructors from "../components/carouselSections/Instructors";
import CarouselCards from "../components/carouselSections/CarouselCards";
import Testimony from "../components/ui/Testimony";
import Footer from "../components/layout/Footer";

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
