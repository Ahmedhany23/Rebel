import React from "react";
import logo1 from "@/app/assets/about/content1/Vector-2.png";
import logo2 from "@/app/assets/about/content1/Vector-1.png";
import logo3 from "@/app/assets/about/content1/Vector.png";
import Image from "next/image";
const data = [
  {
    image: logo1,
    text: "Great team work",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus convallis massa. Curabitur quis tellus a tortor egestas viverra. ",
  },
  {
    image: logo2,
    text: "Our vision",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.. ",
  },
  {
    image: logo3,
    text: "Our mision",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.. ",
  },
];

export default function Content1({ motion, item }) {
  return (
    <main className="py-[100px] bg-white ">
      <motion.div
        initial="left"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        variants={item}
        className="flex justify-center flex-col xl:flex-row  text-center gap-8 xl:gap-10"
      >
        {data.map((d, i) => {
          return (
            <div key={i} className="flex flex-col items-center gap-5 mr-7">
              <Image src={d.image} className="w-[83.33px]"></Image>
              <h1 className="text-[40px] lg:text-[48px] font-semibold text-[#000000]">
                {d.text}
              </h1>
              <p className="font-medium text-[16px] leading-7 lg:text-[18px] text-[#878787] lg:leading-[36px] lg:w-[25rem] max-w-full">
                {d.description}
              </p>
            </div>
          );
        })}
      </motion.div>
    </main>
  );
}
