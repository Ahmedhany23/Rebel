"use client";
import Image from "next/image";
import { IoPersonSharp, IoCalendar } from "react-icons/io5";
import { FaRegFolderOpen } from "react-icons/fa";
import Content1 from "./1-content";
import Content2 from "./2-content";
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

export default function page() {
  return (
    <header className="blogimage">
      <motion.div
        initial="bottom"
        whileInView="visibley"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        variants={item}
        className="flex flex-col items-center place-content-center text-center py-[150px]  lg:py-[410px]"
      >
        <h1 className="text-white font-bold text-6xl text-center xl:w-auto ">
          Travel Stories For Now and the Future{" "}
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
      <Content1 item={item} motion={motion}/>
      <Content2 item={item} motion={motion}/>
    </header>
  );
}
