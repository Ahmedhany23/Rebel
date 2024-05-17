import Image from "next/image";
import image1 from "@/app/assets/blog/content1/image1.png";
import image2 from "@/app/assets/blog/content1/image2.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import post1 from "@/app/assets/blog/content1/post1.png";
import post2 from "@/app/assets/blog/content1/post2.png";
import post3 from "@/app/assets/blog/content1/post3.png";
import { GoArrowRight } from "react-icons/go";

import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
const data = [
  { image: post1, text: "Travel Stories for Now and the Future" },
  { image: post2, text: "9 Popular Travel Destintion on Sale in 2022" },
  { image: post3, text: "How Are We Going to Travel in 2022?" },
];
const catagories = [
  { text: "Travel" },
  { text: "Tips" },
  { text: "Stories" },
  { text: "Destination" },
];

export default function Content1({ motion, item }) {
  return (
    <header className="bg-white">
      <main className=" px-3 py-24 lg:px-0 lg:py-36  mx-auto  overflow-hidden">
        <div className="flex gap-10 justify-center">
          <motion.div
            initial="left"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            variants={item}
            className="flex flex-col"
          >
            <div className="card 2xl:w-[53rem] 2xl:h-[59rem]">
              <Image
                src={image1}
                width={1920}
                height={1080}
                alt="image"
                className=" 2xl:w-full 2xl:h-[44rem] "
              />
              <br />
              <p className="text-lg font-light text-[#343434] leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.{" "}
              </p>
            </div>
            <div className="pt-16 xl:w-[53rem] ">
              <h1 className="font-medium text-4xl text-black mb-6">
                Rice Terraces, Tegallalang
              </h1>
              <p className="text-lg font-light text-[#343434] leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
            <div className="card xl:w-[53rem] xl:h-[65rem] py-10">
              <Image
                src={image2}
                width={1920}
                height={1080}
                alt="image"
                className=" w-full xl:h-[44rem] "
              />
              <br />
              <p className="text-lg font-light text-[#343434] leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.{" "}
              </p>
              <div className="flex flex-col xl:flex-row xl:justify-between pt-10">
                <div className="flex gap-5 py-8 lg:py-0">
                  <p className="text-lg font-light text-[#343434]">Tags:</p>
                  <h6 className=" font-medium text-lg">Destintion, Travel</h6>
                </div>
                <div className="flex gap-5 items-center">
                  <p className="text-lg font-light text-[#343434] ">
                    Share This:
                  </p>
                  <div className="flex gap-3 text-xl cursor-pointer">
                    <FaFacebook />
                    <AiFillTwitterCircle />
                    <FaLinkedin className="rounded-full" />
                  </div>
                </div>
              </div>
              <div className="divider w-full border-[#343434] border mt-6"></div>
            </div>
          </motion.div>
          <motion.div
            initial="right"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            variants={item}
            className="hidden xl:flex flex-col gap-10"
          >
            <div className="flex flex-col  xl:w-[33rem] xl:h-[32rem] py-8 px-7 rounded-md shadow-lg">
              <h6 className="font-medium text-4xl text-black mb-6">
                Recent Post
              </h6>
              {data.map((d, i) => {
                return (
                  <div
                    key={i}
                    className="flex gap-4 mb-4  items-center cursor-pointer"
                  >
                    <Image
                      src={d.image}
                      alt="image"
                      className="w-[9.6rem] h-[99px]"
                    />
                    <div className="flex flex-col gap-7">
                      <h7 className="font-medium text-lg leading-7 text-black hover:text-cyan-300 duration-200">
                        {d.text}
                      </h7>
                      <p className="font-light text-lg text-[#343434]">
                        14 Dec 2022
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col   xl:w-[33rem] xl:h-[24rem] py-8 px-7 rounded-md shadow-lg">
              <h6 className="font-medium text-4xl text-black ">Catagories</h6>
              <div className="flex flex-col  py-10">
                {catagories.map((c, i) => {
                  return (
                    <div key={i} className="mb-6  last:mb-0 cursor-pointer ">
                      <div className="flex  gap-6 items-center group  ">
                        <GoArrowRight className="text-lg text-[#343434] font-medium group-hover:text-cyan-300 duration-200  group-hover:animate-bounce" />
                        <h5 className="text-lg text-[#343434] font-medium group-hover:text-cyan-300 duration-200 ">
                          {c.text}
                        </h5>
                      </div>
                      <div className="divider w-full border-[#999999] border mt-1"></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="xl:w-[33rem] xl:h-[23rem] py-8 px-7 rounded-md bg-black">
              <h1 className="font-semibold text-[27px] leading-[70px] text-white">
                Have Any Question?
              </h1>
              <p className="text-white font-normal text-lg leading-7 pt-4 pb-20">
                Do not hesitage to give us a call. We are an expert team and we
                are happy to talk to you.
              </p>
              <div className="flex items-center gap-4 mb-2">
                <MdCall className="text-white text-xl font-normal" />
                <p className="text-white text-lg font-normal">+62 6943 6956</p>
              </div>
              <div className="flex items-center gap-4">
                <IoIosMail className="text-white text-xl font-normal" />
                <p className="text-white text-lg font-normal">
                  contact@domain.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </header>
  );
}
