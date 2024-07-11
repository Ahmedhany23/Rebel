import React from "react";
import Image from "next/image";
import satisfied from "@/app/Images/about/content3/staisfied.png";
import traveller from "@/app/Images/about/content3/traveller.png";
import destination from "@/app/Images/about/content3/destination.png";
import award from "@/app/Images/about/content3/award.png";
import postive from "@/app/Images/about/content3/postive.png";
import content from "@/app/Images/about/content3/content3image.webp"
const data = [
  { icon: satisfied, count: "126", info: "Satisfied Client" },
  { icon: traveller, count: "230", info: "New Traveller" },
  { icon: destination, count: "230", info: "Destination" },
  { icon: award, count: "230", info: "Award" },
];

export default function Content3({ motion, item }) {
  return (
    <main className=" relative pm run py-[200px]">
    
   <Image
          src={content}
          alt="workers"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        />
     
      <motion.div
        initial="hiddeny"
        whileInView="visibley"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        variants={item}
        className=" justify-center items-center gap-10 xl:w-[80rem] mx-auto flex flex-col lg:flex-row xl:gap-20"
      >
        {data.map((d, i) => {
          return (
            <div key={i} className="flex gap-10">
              <Image src={d.icon} className="w-[79px]" alt="icon"></Image>
              <div className=" relative w-[140px] ">
                <div className="flex flex-col">
                  <div className=" absolute top-0 right-5  ">
                    <Image src={postive} alt="icon"></Image>
                  </div>

                  <h2 className=" font-semibold text-[48px] text-[#fff]">
                    {d.count}
                  </h2>
                  <p className=" font-semibold text-[18px] text-[#E7E7E7]">
                    {d.info}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </main>
  );
}
