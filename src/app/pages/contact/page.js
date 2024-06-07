"use client";
import Image from "next/image";
import vector from "../../assets/about/Vector.webp";
import Content1 from "./1-content";
import { motion } from "framer-motion";
import background from "@/app/assets/contact/Banner.webp"
import { Framer } from "@/app/components/Framer";


export default function page() {
  return (
    <header>
     <Image
          src={background}
          alt="workers"
          quality="100"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        />
      <motion.main
        initial="bottom"
        whileInView="visibley"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        variants={Framer}
        className="flex flex-col items-center place-content-center text-center py-[300px]  lg:py-[500px] "
      >
        <h1 className="text-6xl  text-[#ffffff] font-bold  ">
          Contact
        </h1>
        <p className="text-[24px] font-semibold text-[#ffffff]">
          Home <Image src={vector} alt=">" className="inline"></Image> Contact
        </p>
      </motion.main>
      <Content1 item={Framer} motion={motion} />
    </header>
  );
}
