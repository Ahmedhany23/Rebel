'use client';
import Image from "next/image";
import vector from "@/app/assets/about/vector.png";
import Content1 from "./1-content";
import Content2 from "./2-content";
import Content3 from "./3-content";
import Content4 from "./4-content";
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
    <header className="about ">
      <motion.div
        initial="bottom"
        animate="visibley"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        variants={item}
        className="flex flex-col items-center place-content-center text-center py-[300px]  lg:py-[400px] xl:py-[600px]"
      >
        <h1 className="text-[60px] lg:text-[90px] text-[#ffffff] font-bold  ">
          About Us
        </h1>
        <p className="text-[24px] font-semibold text-[#ffffff]">
          Home <Image src={vector} alt=">" className="inline"></Image> About Us
        </p>
      </motion.div>
      <Content1 item={item} motion={motion} />
      <Content2 item={item} motion={motion}/>
      <Content3 item={item} motion={motion}/>
      <Content4 item={item} motion={motion}/>
    </header>
  );
}
