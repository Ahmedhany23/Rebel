import React from "react";
import Image from "next/image";
import logo1 from "@/app/assets/Home/content3/Katana.png";
import logo2 from "@/app/assets/Home/content3/travava.png";
import logo3 from "@/app/assets/Home/content3/bigui.png";
import logo4 from "@/app/assets/Home/content3/Booking.com.png";
import logo5 from "@/app/assets/Home/content3/Jakmaen.png";

const data = [
  { image: logo1 },
  { image: logo2 },
  { image: logo3 },
  { image: logo4 },
  { image: logo5 },
];

export default function Content3({ motion, item }) {
  return (
    <section className="w-full py-20 lg:py-40">
      <motion.div
        initial="hiddeny"
        whileInView="visibley"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        variants={item}
        className="flex flex-col items-center justify-center "
      >
        <h1 className="text-[#020202] font-semibold text-[30px] sm:text-[40px] md:text-[60px] lg:text-[80px] lg:leading-[70px] mb-4">
          Our tour partner
        </h1>
        <p className=" lg:leading-[34px] font-medium text-[12px] md:text-[16px] lg:text-[18px] text-[#858585] px-16 lg:px-0 ">
          There are many variation of passage of lorem ipsum available{" "}
          <span className="inline lg:hidden">
            but the majority have suffered alteration
          </span>
        </p>
        <p className=" hidden font-medium text-[12px]  md:text-[16px] lg:text-[18px] text-[#858585] lg:block">
          but the majority have suffered alteration
        </p>
      </motion.div>
      <motion.div
        initial="bottom"
        whileInView="visibley"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        variants={item}
        className="flex flex-col items-center text-center place-content-center gap-5 lg:flex-row lg:gap-[3.5rem]  xl:gap-[6.5rem] pt-16 lg:px-56"
      >
        {data.map((d) => {
          return <Image key={d.image} src={d.image}></Image>;
        })}
      </motion.div>
    </section>
  );
}
