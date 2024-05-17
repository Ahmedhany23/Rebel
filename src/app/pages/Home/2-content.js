"use client";

import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

import card1 from "@/app/assets/Home/content2/Group 31-1.png";
import card2 from "@/app/assets/Home/content2/Group 31.png";
import card3 from "@/app/assets/Home/content2/Frame 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
const data = [
  {
    image: card1,
    heading: "Best Service",
    para: "our service is reliable and convenient, our service is quality.",
  },
  {
    image: card2,
    heading: "Price Guarantee",
    para: "our service is reliable and convenient, our service is quality.",
  },
  {
    image: card3,
    heading: "Handpicked Hotels",
    para: "our service is reliable and convenient, our service is quality.",
  },
];
export default function content2({ motion, item }) {
  const initialTheme = localStorage.getItem("theme") || "light";
  return (
    <section className="content2 pt-20 pb-10 bg-white">
      <motion.div
        initial="left"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        variants={item}
        className=" flex flex-col items-center place-content-center"
      >
        <h1 className="font-bold text-[40px] lg:text-[60px] text-[#ffffff]">
          Why choose Us?
        </h1>
        <p className="font-medium text-[16px] lg:text-[18px] leading-8 text-[#ffffff] px-16 lg:px-0 ">
          our services have been trusted by world travelers.
        </p>
      </motion.div>
      <main>
        <main className=" pt-7 px-5  lg:px-40  xl:px-58 ">
          <div className="lg:hidden justify-between items-center flex ">
            <button className="swiper-button-prev shadow-2xl">{"<"}</button>
            <button className="swiper-button-next shadow-2xl">{">"}</button>
          </div>

          <Swiper
            className="mt-18 px-16 lg:px-0"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
                // Show only one slide on screens less than 640px
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2, // Show three slides on screens wider than 1024px
              },
              1400: {
                slidesPerView: 3, // Show three slides on screens wider than 1024px
              },
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            observeParents={true}
            observer={true}
            parallax={true}
            speed={1000}
            loop={true}
            grabCursor={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {data.map((d,i) => (
              <SwiperSlide key={i} className=" md:mx-2 lg:px-7">
                <div className="card lg:w-[329.95px] lg:h-[432.77px] flex flex-col bg-white py-20 px-10 lg:py-14 lg:px-7 rounded-md gap-5">
                  <Image src={d.image} className="w-[95.57px] h-[97px]"></Image>
                  <h1 className="text-[#000000] text-[24px] font-semibold">
                    {d.heading}
                  </h1>
                  <p className="text-[#858585] font-medium text-[18px]">
                    {d.para}
                  </p>
                  <p className="text-[#000000] font-medium text-[18px] pt-10 flex text-center items-center">
                    Learn More{" "}
                    <IoIosArrowRoundForward className="text-[#000000] text-[30px] font-medium w-[30px]" />
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </main>
      </main>
    </section>
  );
}
