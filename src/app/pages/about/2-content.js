import React from "react";
import Image from "next/image";
import image from "@/app/assets/about/content2/hero.png";
import qoute from "@/app/assets/about/content2/qoute.png";
export default function Content2({ motion, item }) {
  return (
    <main className="pb-[100px] bg-white  ">
      <div className="mx-auto xl:w-[80rem]">
        <div className="flex flex-col justify-center items-center gap-10 lg:justify-normal lg:items-stretch lg:flex-row lg:gap-32">
          
            <Image alt="image" src={image} className="lg:w-[557px] h-[549px]"></Image>
         

          <motion.div
            initial="right"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            variants={item}
            className="flex  flex-col gap-10"
          >
            <Image alt="image" src={qoute} className="w-[80px]"></Image>

            <p className="text-[18px] text-[#484848] leading-[30px] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              porttitor sapien et urna tincidunt fringilla. Vivamus at augue
              interdum, blandit arcu quis, laoreet ipsum. In eu ipsum urna.
              Suspendisse suscipit est et neque.
            </p>
            <p className="text-[18px] text-[#484848] leading-[30px] font-medium">
              Mauris tempor tellus ante, ut fermentum erat gravida vel. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Aenean nec justo dui. Ut et consequat dui, a
              malesuada ipsum. Pellentesque nec turpis viverra, blandit mi a,
              accumsan justo.
            </p>
            <h1 className=" font-semibold text-[36px] text-black">
              Siti Sarah
            </h1>
            <p className="text-[18px] font-medium text-[#858585]">
              Founder Travosca
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
