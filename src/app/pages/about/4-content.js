import React from "react";
import Image from "next/image";

import image1 from "@/app/assets/about/content4/unsplash_R98l5I6OFQY.png";
import image2 from "@/app/assets/about/content4/unsplash_jG3I8b5iyHI.png";
import image3 from "@/app/assets/about/content4/Paris.png";
import image4 from "@/app/assets/about/content4/unsplash_hFXZ5cNfkOk.png";

const data = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
];
export default function Content4({ motion, item }) {
  return (
    <main className="py-[150px] bg-white">
      <motion.div
        initial="hiddeny"
        whileInView="visibley"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        variants={item}
        className="flex flex-col gap-2 place-content-center items-center justify-center "
      >
        <p className=" font-medium text-[36px] text-[#878787]">Gallery</p>
        <h1 className="font-semibold px-3 lg:px-0 text-[40px] lg:text-[60px] text-black">
          Unforgettable moment
        </h1>
      </motion.div>
      <div className="flex flex-col xl:flex-row gap-5 xl:w-[85rem] mx-auto mt-20 text-center items-center justify-center overflow-hidden">
        <div className="relative bali  duration-200 overflow-hidden">
          <Image alt="image" src={image1}></Image>
        </div>
        <div className="flex flex-col gap-5">
          <div className="relative dubai">
            <Image alt="image" src={image2}></Image>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 mx-auto lg:mx-0">
            <Image alt="image" src={image3}></Image>
            <div className="relative italy">
              <Image alt="image" src={image4}></Image>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
