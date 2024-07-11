import Image from "next/image";
import imagecontent2 from "@/app/Images/Package/content2/imagecontent2.webp";
export default function Content2({ motion, item }) {
  return (
    <header>
      <main className="py-[70px] lg:py-28 px-0  w-full mx-auto">
        <div className="flex justify-normal flex-col lg:flex-row lg:justify-around mx-auto  items-center">
          <motion.div
            initial="left"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            variants={item}
            className="flex flex-col items-center  lg:items-stretch"
          >
            <h1 className="font-semibold text-6xl text-black py-4">
              Tips & Article
            </h1>

            <p className="font-medium text-lg px-3 lg:px-0 text-[#878787] lg:w-[35rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </motion.div>
          <motion.button
            initial="right"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            variants={item}
            className=" button hidden  lg:block w-[200px] h-[60px] mt-12"
          >
            View more
          </motion.button>
        </div>
        <section className="py-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
            <motion.div
              initial="left"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              variants={item}
              className="flex flex-col gap-8 mb-5"
            >
              <div className="card md:w-[33rem] md:h-[32rem] bg-white shadow-lg flex flex-col px-4  rounded-xl  py-5 xl:py-0">
                <h2 className="font-normal text-2xl text-black py-4  ">
                  Perfect | Tips
                </h2>
                <h1 className="font-medium text-4xl text-black pb-4">
                  9 Popular Travel Destintion on Sale in 2022
                </h1>
                <div className=" font-medium text-4xl text-black pb-4 ">-</div>
                <p className="text-lg text-[#343434] font-light ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
                <button className="button w-52 h-16 min-w-fit mt-28">
                  Read More
                </button>
              </div>
              <div className="card md:w-[33rem] md:h-[32rem] bg-white shadow-lg flex flex-col px-4 rounded-xl mb-5  py-5 xl:py-0">
                <h2 className="font-normal text-2xl text-black py-4  ">
                  Tips | Travel
                </h2>
                <h1 className="font-medium text-4xl text-black pb-4">
                  How Are We Going to Travel in 2022
                </h1>
                <div className=" font-medium text-4xl text-black pb-4 ">-</div>
                <p className="text-lg text-[#343434] font-light ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
                <button className="button w-52 h-16 min-w-fit mt-28">
                  Read More
                </button>
              </div>
            </motion.div>
            <motion.div
              initial="hiddeny"
              whileInView="visibley"
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              variants={item}
              className=" md:w-[33rem] md:h-[32rem] xl:w-[49.5rem]  xl:h-[68rem] bg-white shadow-lg rounded-xl py-5 xl:py-0"
            >
              <Image
                src={imagecontent2}
                alt="image"
                style={{objectFit:"cover"}}
                className="w-full hidden xl:block lg:h-[42.5rem]"
              ></Image>
              <div className="flex flex-col justify-center lg:px-10 ">
                <h2 className="font-normal text-2xl text-black py-5  ">
                  Stories | Tips
                </h2>
                <h1 className="font-medium text-4xl text-black pb-7">
                  Travel Stories For Now and the Future
                </h1>

                <p className="text-lg text-[#343434] font-light ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
                <button className="button w-52 h-16 min-w-fit mt-20">
                  Read More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </header>
  );
}
