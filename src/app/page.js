"use client";
import Content1 from "./pages/Home/1-content";
import Content2 from "./pages/Home/2-content";
import Content3 from "./pages/Home/3-content";
import Content4 from "./pages/Home/4-content";
import { motion } from "framer-motion";
import Image from "next/image";
import background from "@/app/assets/Home/suitcase.webp"
import { Framer } from "./components/Framer";



export default function Home() {
  return (
    <>
      <header className="  w-full  py-[100px] lg:pt-[250px] lg:pb-[30px]  lg:pl-[50px] ">
      
        <Image
          src={background}
          alt="workers"
          quality="100"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="-z-10"
        />
    
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={Framer}
          className=" pl-5 text-[60px] lg:text-[130px] lg:w-[612px] font-bold text-white    leading-[100px] z-30 "
        >
          Make in your journey.
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          variants={Framer}
          className=" pl-5 font-medium text-[18px] text-[#CFCFCF] pt-14 lg:w-[440px]"
        >
          Explore the world with what you love beautiful natural beauty.
        </motion.p>
        <motion.div 
        initial="left"
          animate="visible"
          transition={{ delay: 1 }}
          variants={Framer}
         className="flex flex-col p-10 mx-[auto] rounded-md w-[300px] gap-5 lg:w-[736px]  lg:items-center lg:justify-normal  lg:gap-16  lg:flex-row   lg:ml-0 mt-20    bg-white lg:py-3 lg:pl-6 lg:pr-2  lg:rounded-full ">
          <select
            className="cursor-pointer text-[#9B9B9B] mb-2 lg:mb-0  font-semibold text-[20px] "
            id="location"
            name="location"
          >
            <option value="">Location</option>
            <option value="London">London</option>
            <option value="Tokyo">Tokyo</option>
          </select>

          <select
            className="cursor-pointer  text-[#9B9B9B] mb-2 lg:mb-0 lg:pl- font-semibold text-[20px]"
            id="location"
            name="Date"
          >
            <option value="">Date</option>
            <option value="London">21-2</option>
            <option value="Tokyo">22-3</option>
          </select>

          <select
            className="cursor-pointer text-[#9B9B9B] mb-2 lg:mb-0 lg:pl-9 font-semibold text-[20px] "
            id="location"
            name="people"
          >
            <option value="">People</option>
            <option value="John Doe">John</option>
            <option value="Jane Smith">Jane</option>
          </select>

          <button
            className="  bg-black text-white py-4 px-6 rounded-full font-semibold text-[18px] duration-200 hover:bg-white hover:text-black  lg:ml-11"
            id="explore-btn"
          >
            Explore now
          </button>
        </motion.div>
        <p className="py-10  font-medium text-[18px] text-[#CFCFCF]">
          <span className="font-semibold text-[18px] text-[#ECECEC]">
            Popular Place :{" "}
          </span>
          Bali, Istanbul, Rome, Paris.
        </p>
      </header>
      <Content1  item={Framer} motion={motion} />
      <Content2  item={Framer} motion={motion}/>
      <Content3  item={Framer} motion={motion}/>
      <Content4  item={Framer} motion={motion}/>
    </>
  );
}
