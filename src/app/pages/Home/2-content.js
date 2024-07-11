"use client";

import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import background from "@/app/Images/Home/content2/unsplash_okVXy9tG3KY_Nero AI_Standard_x2.png";
import card1 from "@/app/Images/Home/content2/Group 31-1.png";
import card2 from "@/app/Images/Home/content2/Group 31.png";
import card3 from "@/app/Images/Home/content2/Frame 1.png";

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
  return (
    <section className="relative pt-20 pb-10 bg-white">
      <Image
        alt="background-image"
        className="background-image absolute top-0 left-0 right-0 w-full  h-[500px]"
        src={background}
        style={{ objectFit: "cover" }}
        priority
      />

      <motion.div
        initial="left"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        variants={item}
        className="content-container flex flex-col items-center z-10 relative"
      >
        <h1 className="font-bold text-[40px] lg:text-[60px] text-[#ffffff]">
          Why choose Us?
        </h1>
        <p className="font-medium text-[16px] lg:text-[18px] leading-8 text-[#ffffff] px-16 lg:px-0">
          Our services have been trusted by world travelers.
        </p>
      </motion.div>

      <main className="content-container pt-7 px-5 flex flex-col justify-center items-center gap-5 mt-10 lg:gap-10 xl:gap-48 lg:flex-row z-10 relative">
        {data.map((d, i) => (
          <div
            key={i}
            className="card max-w-[400px] max-h-[432.77px] flex flex-col bg-white py-20 px-10 lg:py-14 lg:px-7 rounded-md gap-5 shadow-2xl"
          >
            <Image
              src={d.image}
              alt="logo"
              className="w-[95.57px] h-[97px]"
              layout="fixed"
              width={95.57}
              height={97}
            />
            <h1 className="text-[#000000] text-[24px] font-semibold">
              {d.heading}
            </h1>
            <p className="text-[#858585] font-medium text-[18px]">{d.para}</p>
            <div className="text-[#000000] text-[18px] pt-10 flex text-center items-center">
              Learn More
              <span className="text-[#000000] text-[30px] font-medium w-[30px]">
                <IoIosArrowRoundForward />
              </span>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}
