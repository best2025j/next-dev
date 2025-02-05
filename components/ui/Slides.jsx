import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

class Slides extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 8, // Default slides to show on larger screens
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
    };

    return (
      <>
        <div className="lg:max-w-[1240px] lg:mx-auto md:max-w-[880px] w-full">
          <h3 className="text-2xl font-semibold mb-3 lg:mt-0 sm:mt-0 mt-10">
            Trusted By
          </h3>
          <div className="slider-container mt-3">
            <Slider {...settings}>
              <div key="slide1">
                <Image
                  width={200}
                  height={200}
                  className="h-[30px] w-[30px] lg:h-[70px] lg:w-[70px] sm:h-[40px] sm:w-[40px]"
                  src="/log4.png"
                  alt=""
                />
              </div>
              <div key="slide2">
                <Image
                  width={200}
                  height={200}
                  className="h-[30px] w-[30px] lg:h-[70px] lg:w-[70px] sm:h-[40px] sm:w-[40px]"
                  src="/kwaralLog.png"
                  alt=""
                />{" "}
              </div>
              <div key="slide3">
                <Image
                  width={200}
                  height={200}
                  className="h-[30px] w-[30px] lg:h-[70px] lg:w-[70px] sm:h-[40px] sm:w-[40px]"
                  src="/ntda.png"
                  alt=""
                />
              </div>
              <div key="slide4">
                <Image
                  width={200}
                  height={200}
                  className="h-[30px] w-[30px] lg:h-[70px] lg:w-[70px] sm:h-[40px] sm:w-[40px]"
                  src="/eFyg1QEJ 1.png"
                  alt=""
                />
              </div>
              <div key="slide5">
                <Image
                  width={200}
                  height={200}
                  className="h-[30px] w-[30px] lg:h-[70px] lg:w-[70px] sm:h-[40px] sm:w-[40px]"
                  src="/XqUYhl60 1.png"
                  alt=""
                />
              </div>
              <div key="slide6">
                <Image
                  width={200}
                  height={200}
                  className="h-[30px] w-[30px] lg:h-[70px] lg:w-[70px] sm:h-[40px] sm:w-[40px]"
                  src="/log1.jpg"
                  alt=""
                />
              </div>
              <div key="slide7">
                <Image
                  width={200}
                  height={200}
                  className="h-[30px] w-[30px] lg:h-[70px] lg:w-[70px] sm:h-[40px] sm:w-[40px]"
                  src="/log2.jpg"
                  alt=""
                />
              </div>
              <div key="slide8">
                <Image
                  width={200}
                  height={200}
                  className="h-[30px] w-[30px] lg:h-[70px] lg:w-[70px] sm:h-[40px] sm:w-[40px]"
                  src="/log3.jpg"
                  alt=""
                />
              </div>
              <div key="slide9">
                <Image
                  width={200}
                  height={200}
                  className="h-[30px] w-[30px] lg:h-[70px] lg:w-[70px] sm:h-[40px] sm:w-[40px]"
                  src="/unescoUnited.png"
                  alt=""
                />
              </div>

              <div key="slide10">
                <Image
                  width={200}
                  height={200}
                  className="h-[30px] w-[30px] lg:h-[70px] lg:w-[70px] sm:h-[40px] sm:w-[40px] rounded-full"
                  src="/log7.png"
                  alt=""
                />
              </div>
              <div key="slide11">
                <Image
                  width={200}
                  height={200}
                  className="h-[30px] w-[30px] lg:h-[70px] lg:w-[70px] sm:h-[40px] sm:w-[40px] "
                  src="/log4.png"
                  alt=""
                />
              </div>
              <div key="slide12">
                <Image
                  width={200}
                  height={200}
                  className="h-[30px] w-[30px] lg:h-[70px] lg:w-[70px] sm:h-[40px] sm:w-[40px]"
                  src="/log6.jpg"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}

export default Slides;
