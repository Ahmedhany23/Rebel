import React from "react";
import Image from "next/image";
import card1 from "@/app/Images/Package/content1/card1.png";
import card2 from "@/app/Images/Package/content1/card2.png";
import card3 from "@/app/Images/Package/content1/card3.png";
import card4 from "@/app/Images/Package/content1/card4.png";
import card5 from "@/app/Images/Package/content1/card5.png";
import card6 from "@/app/Images/Package/content1/card6.png";

import { IoStarSharp } from "react-icons/io5";
import { delay } from "framer-motion";
const stars = [
  { star: <IoStarSharp /> },
  { star: <IoStarSharp /> },
  { star: <IoStarSharp /> },
  { star: <IoStarSharp /> },
  { star: <IoStarSharp /> },
];
const data1 = [
  { image: card1, name: "Paris" },
  { image: card2, name: "Swiss" },
  { image: card3, name: "Thailand" },
];
const data2 = [
  { image: card4, name: "Taiwan" },
  { image: card5, name: "Indonesi" },
  { image: card6, name: "Singapore" },
];

export default function Content1({ motion, item }) {
  return (
    <header>
      <main className="py-[70px] lg:py-28 px-0 lg:px-5">
        <div className="flex justify-normal flex-col lg:flex-row lg:justify-between items-center">
          <motion.div
            initial="left"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            variants={item}
            className="flex flex-col items-center  lg:items-stretch xl:ml-20"
          >
            <h1 className="font-semibold text-6xl text-black py-4">
              Popular Destination
            </h1>

            <p className="font-medium text-lg px-3 lg:px-0 text-[#878787] lg:w-[35rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </motion.div>
          <motion.button
            initial="right"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            variants={item}
            className=" button hidden  lg:block w-[200px] h-[60px] mt-12 xl:mr-20"
          >
            Discover more
          </motion.button>
        </div>
        <motion.section
          initial="bottom"
          whileInView="visibley"
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 ,delay:0.5 }}
          variants={item}
        >
          <div className="flex flex-col items-center  xl:flex-row pt-10 xl:justify-around">
            {data1.map((d, i) => {
              return (
                <div
                  key={i}
                  className="card md:w-[27.8rem] md:h-[40rem] m-4 rounded-md bg-white shadow-2xl  "
                >
                  <Image
                    src={d.image}
                    className="w-full md:h-[20rem] bg-center bg-cover"
                    alt="image"
                  />
                  <div className="px-2 md:px-7 py-4">
                    <div className="flex justify-between pt-5">
                      <h1 className=" text-2xl font-semibold text-black">
                        {d.name}
                      </h1>
                      <p className="text-2xl font-normal text-black">
                        $299.00/2days
                      </p>
                    </div>
                    <p className=" text-lg font-medium text-[#878787] leading-7 py-5">
                      Lorem ipsum dolor sit amet, consect adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore
                      incididunt ut labore et dolore
                    </p>
                    <div className="flex  justify-between items-center">
                      <div className="stars flex gap-1 text-lg  ">
                        {stars.map((s, i) => {
                          return (
                            <p className="text-[#F4BC61]" key={i}>
                              {s.star}
                            </p>
                          );
                        })}
                      </div>
                      <button className="button w-52 h-16 min-w-fit">
                        Booking now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center  xl:flex-row  xl:justify-around">
            {data2.map((d, i) => {
              return (
                <div
                  key={i}
                  className="card md:w-[27.8rem] md:h-[40rem] m-4 rounded-md bg-white shadow-2xl  "
                >
                  <Image
                    src={d.image}
                    className="w-full md:h-[20rem] bg-center bg-cover"
                    alt="image"
                  />
                  <div className="px-2 md:px-7 py-4">
                    <div className="flex justify-between pt-5">
                      <h1 className=" text-2xl font-semibold text-black">
                        {d.name}
                      </h1>
                      <p className="text-2xl font-normal text-black">
                        $299.00/2days
                      </p>
                    </div>
                    <p className=" text-lg font-medium text-[#878787] leading-7 py-5">
                      Lorem ipsum dolor sit amet, consect adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore
                      incididunt ut labore et dolore
                    </p>
                    <div className="flex  justify-between items-center">
                      <div className="stars flex gap-1 text-lg  ">
                        {stars.map((s, i) => {
                          return (
                            <p className="text-[#F4BC61]" key={i}>
                              {s.star}
                            </p>
                          );
                        })}
                      </div>
                      <button className="button w-52 h-16 min-w-fit">
                        Booking now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center py-10 lg:hidden">
            <button className="button w-52 h-16 min-w-fit ">
              {" "}
              Discover more
            </button>
          </div>
        </motion.section>
      </main>
    </header>
  );
}
