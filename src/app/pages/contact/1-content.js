import React from "react";
import Image from "next/image";
import icon1 from "@/app/Images/Home/footericons/ic_baseline-place.png";
import icon2 from "@/app/Images/Home/footericons/fluent_mail-20-filled.png";
import icon3 from "@/app/Images/Home/footericons/carbon_phone-filled.png";
export default function Content1({ motion, item }) {
  return (
    <section className="bg-white ">
      <main className="py-24 lg:py-32 ">
        <div className="flex flex-col-reverse px-4 lg:flex-row lg:justify-center lg:gap-32">
          <motion.div
            initial="left"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            variants={item}
            className="bg-white lg:w-[580px] h-[668px] rounded-md shadow-2xl"
          >
            <form action="" className="flex flex-col py-16 px-10 gap-5">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Name"
                className="lg:w-[498px] h-[60px] border border-[#C4C4C4] rounded-md p-6 text-[#343434] font-light text-lg outline-none"
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Your EMail"
                className="lg:w-[498px] h-[60px] border border-[#C4C4C4] rounded-md p-6 text-[#343434] font-light text-lg outline-none"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Subject"
                className="lg:w-[498px] h-[60px] border border-[#C4C4C4] rounded-md p-6 text-[#343434] font-light text-lg outline-none"
              />
              <textarea
                name=""
                id=""
                className=" resize-none lg:w-[498px] h-[166px] text-lg font-light rounded-md pt-6 pl-6 border border-[#C4C4C4] text-[#343434]  outline-none"
                placeholder="Your Massage"
              ></textarea>
              <button className="w-full button  h-[66px] text-[32px] font-medium text-white mt-10">
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
            initial="right"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            variants={item}
            className="flex flex-col"
          >
            <h1 className="font-semibold text-6xl text-black py-8">
              Get In Touch
            </h1>
            <p className="font-light text-lg text-[#343434] lg:w-[676px] mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <div className="flex flex-col gap-2">
              <h1 className="text-[24px] text-[#000000] font-normal py-7 min-w-fit">
                Lhoksemawe, Aceh{" "}
              </h1>
              <p className="text-[18px] text-[#6c6c6c] font-medium flex gap-2 items-center mb-3">
                <Image src={icon2} className="w-[20px]"></Image>+62 6943 6956
              </p>
              <p className="text-[18px] text-[#6c6c6c] font-medium flex gap-2 items-center mb-3 ">
                <Image src={icon3} className="w-[20px]"></Image>
                contact@domain.com
              </p>
              <p className="text-[18px] text-[#6c6c6c] font-medium flex gap-2 items-center ">
                <Image src={icon1} className="w-[20px]"></Image>Jl. Darussalam
                Hagu selatan
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
