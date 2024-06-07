'use client';
import Image from "next/image";
import vector from "../../assets/about/Vector.webp";
import Content1 from "./1-content";
import Content2 from "./2-content";
import Content3 from "./3-content";
import Content4 from "./4-content";
import { motion } from "framer-motion";
import background from "@/app/assets/about/Aboutimage.webp"
import { Framer } from "@/app/components/Framer";


export default function page() {
  return (
    <header>
        <Image
          src={background}
          alt="workers"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        />
     
      <motion.div
        initial="bottom"
        animate="visibley"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 ,delay:0.7 }}
        variants={Framer}
        className="flex flex-col items-center place-content-center text-center py-[300px]  lg:py-[400px]"
      >
        <h1 className="text-[60px] lg:text-[90px] text-[#ffffff] font-bold  ">
          About Us
        </h1>
        <p className="text-[24px] font-semibold text-[#ffffff]">
          Home <Image src={vector} alt=">" className="inline"></Image> About Us
        </p>
      </motion.div>
      <Content1 item={Framer} motion={motion} />
      <Content2 item={Framer} motion={motion}/>
      <Content3 item={Framer} motion={motion}/>
      <Content4 item={Framer} motion={motion}/>
    </header>
  );
}
