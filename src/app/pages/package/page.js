'use client';
import React from "react";
import Image from "next/image";
import vector from "../../Images/about/Vector.webp";
import Content1 from "./1-content";
import Content2 from "./2-content";
import { motion } from "framer-motion";
import background from "@/app/Images/Package/packageimage.webp"
import { Framer } from "@/app/components/Framer";
export default function page() {
  return (
    <main>
      <section className="overflow-hidden">
        <Image
          src={background}
          alt="Travel"
          fill
          style={{objectFit:"cover"}}
          className="-z-10"
        />
     
        <motion.div
          initial="left"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 ,delay:0.7}}
          variants={Framer}
          className="flex flex-col items-center place-content-center text-center py-[300px]  lg:py-[400px] "
        >
          <h1 className="text-[60px] lg:text-[90px] text-[#ffffff] font-bold  ">
            Travel Packages
          </h1>
          <p className="text-[24px] font-semibold text-[#ffffff]">
            Home <Image src={vector} alt=">" className="inline"></Image> Package
          </p>
        </motion.div>
      </section>
      <Content1 item={Framer} motion={motion}/>
      <section className="imagecontent py-72 hidden xl:block"></section>
      <Content2 item={Framer} motion={motion}/>
    </main>
  );
}
