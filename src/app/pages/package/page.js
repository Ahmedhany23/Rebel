'use client';
import React from "react";
import Image from "next/image";
import vector from "@/app/assets/about/vector.png";
import Content1 from "./1-content";
import Content2 from "./2-content";
import { motion } from "framer-motion";

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
    <main>
      <section className="packageimage ">
        <motion.div
          initial="left"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          variants={item}
          className="flex flex-col items-center place-content-center text-center py-[300px]  lg:py-[400px] xl:py-[600px]"
        >
          <h1 className="text-[60px] lg:text-[90px] text-[#ffffff] font-bold  ">
            Travel Packages
          </h1>
          <p className="text-[24px] font-semibold text-[#ffffff]">
            Home <Image src={vector} alt=">" className="inline"></Image> Package
          </p>
        </motion.div>
      </section>
      <Content1 item={item} motion={motion}/>
      <section className="imagecontent py-72 hidden xl:block"></section>
      <Content2 item={item} motion={motion}/>
    </main>
  );
}
