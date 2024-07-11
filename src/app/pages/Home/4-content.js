"use client";
import Image from "next/image";

import sara from "@/app/Images/Home/contnet4/Mask Group.png";
import cristian from "@/app/Images/Home/contnet4/cristian.png";
import Kausar from "@/app/Images/Home/contnet4/kausar.png";
import Ahmed from "@/app/Images/Home/contnet4/1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css"; // Import Swiper styles

import { IoStarSharp } from "react-icons/io5";

const data = [
  { image: sara, name: "Sara Jay" },
  { image: cristian, name: "Cristain Daniel" },
  { image: Kausar, name: "Kausar Hasan" },
  { image: Ahmed, name: "Ahmed Hany" },
];

const stars = [
  { star: <IoStarSharp /> },
  { star: <IoStarSharp /> },
  { star: <IoStarSharp /> },
  { star: <IoStarSharp /> },
  { star: <IoStarSharp /> },
];

export default function Content4({ motion, item }) {
  return (
    <section className="pt-10 pb-32">
      <motion.div
        initial="hiddeny"
        whileInView="visibley"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        variants={item}
        className="flex flex-col px-10  "
      >
        <h4 className="text-[26px] lg:text-[30px] text-[#626262] font-medium">
          TESTIMONIAL
        </h4>
        <h2 className="text-[40px] lg:text-[60px] text-[#020202] font-semibold ">
          What our client say
        </h2>
        <p className=" text-[16px] lg:text-[18px] text-[#626262] font-medium">
          Create a visual identity for your company and a overall brand
        </p>
      </motion.div>

      <main className="">
        <div className="lg:flex justify-end gap-[60px] items-center hidden  px-20">
          <button className="swiper-button-prev shadow-2xl">{"<"}</button>
          <button className="swiper-button-next shadow-2xl">{">"}</button>
        </div>

        <Swiper
          spaceBetween={0} // Space between slides (optional)
          breakpoints={{
            // Define breakpoints and corresponding slidesPerView values
            autoplay: {
              delay: 1000,
            },
            640: {
              slidesPerView: 1,
              autoplay: {
                enabled: true,
                delay: 1000,
              }, // Show only one slide on screens less than 640px
            },
            768: {
              slidesPerView: 2,
              autoplay: {
                enabled: true,
                delay: 1000,
              }, // Show two slides on screens between 640px and 768px
            },
            1024: {
              slidesPerView: 2, // Show three slides on screens wider than 1024px
            },
            1200: {
              slidesPerView: 3, // Show three slides on screens wider than 1024px
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          observeParents={true}
          observer={true}
          parallax={true}
          speed={1000}
          loop={true} // Enable continuous loop (optional)
          autoplay={true}
          grabCursor={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}

          // Enable pagination dots (optional)
        >
          {data.map((d) => (
            <SwiperSlide key={d.image} className="pb-16">
              <div className="bg-white max-w-[399px] w-[360px] h-[392px] flex flex-col items-center justify-center place-content-center px-7 rounded-md mx-auto mt-[150px] shadow-2xl  ">
                <div className="-mt-[8rem]">
                  <Image
                    src={d.image}
                    alt="Slide Image"
                    className="   w-[133px] h-[133px] rounded-full mx-auto "
                  />
                </div>
                <div className="mt-6 text-center">
                  <h5 className="text-[24px] text-black font-semibold">
                    {d.name}
                  </h5>
                  <p className="text-[18px] text-[#858585] font-medium">
                    Treveller
                  </p>
                </div>

                <div className=" mt-16  ">
                  <div className="stars flex gap-1 ">
                    {stars.map((s, i) => {
                      return (
                        <p className="text-[#F4BC61]" key={i}>
                          {s.star}
                        </p>
                      );
                    })}
                  </div>
                  <p className="text-[18px] text-[#858585] font-medium mt-7">
                    Before we define any approach, we need to deline the brands
                    overall goal. We then need to dive.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
}
