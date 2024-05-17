"use client";
import Image from "next/image";
import vector from "@/app/assets/about/vector.png";
import Content1 from "./1-content";
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
    <header className="contactimage">
      <motion.main
        initial="bottom"
        whileInView="visibley"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        variants={item}
        className="flex flex-col items-center place-content-center text-center py-[300px]  lg:py-[500px]"
      >
        <h1 className="text-6xl  text-[#ffffff] font-bold  ">
          Contact
        </h1>
        <p className="text-[24px] font-semibold text-[#ffffff]">
          Home <Image src={vector} alt=">" className="inline"></Image> Contact
        </p>
      </motion.main>
      <Content1 item={item} motion={motion} />
    </header>
  );
}
