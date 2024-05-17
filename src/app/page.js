"use client";
import Content1 from "./pages/Home/1-content";
import Content2 from "./pages/Home/2-content";
import Content3 from "./pages/Home/3-content";
import Content4 from "./pages/Home/4-content";
import { motion } from "framer-motion";

export const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const item = {
  visible: { opacity: 1, x: 0 },
  left: { opacity: 0, x: -100 },
  right: { opacity: 0, x: 100 },
  hiddeny: { opacity: 0.3, y: -100 },
  visibley: { opacity: 1, y: 0 },
  bottom: { opacity: 1, y: 100 },
  
};

export default function Home() {
  return (
    <>
      <header className="header  relative w-full  py-[100px] lg:pt-[250px] lg:pb-[400px]  lg:pl-[50px]  ">
        <motion.h1
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          variants={list}
          className=" pl-5 text-[60px] lg:text-[130px] lg:w-[612px] font-bold text-white  font-[500]  leading-[100px] "
        >
          Make in your journey.
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          variants={list}
          className=" pl-5 font-medium text-[18px] text-[#CFCFCF] pt-14 lg:w-[440px]"
        >
          Explore the world with what you love beautiful natural beauty.
        </motion.p>
        <motion.div 
        initial="left"
          animate="visible"
          transition={{ delay: 1 }}
          variants={item}
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
      <Content1 list={list} item={item} motion={motion} />
      <Content2 list={list} item={item} motion={motion}/>
      <Content3 list={list} item={item} motion={motion}/>
      <Content4 list={list} item={item} motion={motion}/>
    </>
  );
}
