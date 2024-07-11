"use client";
import Image from "next/image";
import { IoPersonSharp, IoCalendar } from "react-icons/io5";
import { FaRegFolderOpen } from "react-icons/fa";
import Content1 from "./1-content";
import Content2 from "./2-content";
import { motion } from "framer-motion";
import background from "@/app/Images/blog/blogimage.webp"
import { Framer } from "@/app/components/Framer";


export default function page() {
  return (
    <header>
        <Image
          src={background}
          alt="workers"
          fill
          style={{objectFit:"cover"}}
          priority
          className="-z-10"
        />
      
      <motion.div
        initial="bottom"
        whileInView="visibley"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 ,delay:0.7 }}
        variants={Framer}
        className="flex flex-col items-center place-content-center text-center py-[150px]  lg:py-[410px]"
      >
        <h1 className="text-white font-bold text-6xl text-center xl:w-auto ">
          Travel Stories For Now and the Future
        </h1>
        <div className="flex flex-col  gap-7 py-7 lg:flex-row ">
          <div className="flex gap-2 items-center">
            <IoPersonSharp className="text-white text-2xl" />
            <h4 className="font-medium text-2xl text-white">Hasmar</h4>
          </div>
          <div className="flex gap-2 items-center">
            <IoCalendar className="text-white text-2xl" />
            <h4 className="font-medium text-2xl text-white">
              January 18, 2021
            </h4>
          </div>
          <div className="flex gap-2 items-center">
            <FaRegFolderOpen className="text-white text-2xl" />
            <h4 className="font-medium text-2xl text-white">Stories, Tips</h4>
          </div>
        </div>
      </motion.div>
      <Content1 item={Framer} motion={motion}/>
      <Content2 item={Framer} motion={motion}/>
    </header>
  );
}
