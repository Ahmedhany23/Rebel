import Image from "next/image";
import logo from "@/app/assets/Home/logo 2.png";

import icon1 from "@/app/assets/Home/footericons/ic_baseline-place.png";
import icon2 from "@/app/assets/Home/footericons/fluent_mail-20-filled.png";
import icon3 from "@/app/assets/Home/footericons/carbon_phone-filled.png";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const socials = [
  { social: <FaFacebook className="text-[24px]  cursor-pointer" /> },
  { social: <FaTwitter className="text-[24px] cursor-pointer" /> },
  { social: <FaYoutube className="text-[24px] cursor-pointer" /> },
  { social: <FaInstagram className="text-[24px] cursor-pointer" /> },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Package", href: "/package" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="">
      <div className="footerimage pt-16 pb-32 ">
        <div className=" flex items-center flex-col text-center">
          <h1 className="text-[#ffffff]  text-[40px] lg:text-[60px] font-semibold">
            Subscribe to get special price
          </h1>
          <p className="text-[#DFDFDF] text-[16px] lg:text-[18px] font-medium lg:w-[630px] mt-2">
            Dont wanna miss something? subscribe right now and get special
            promotion and monthly newsletter
          </p>
         
        </div>
        <div className="flex justify-between  md:py-1 md:pl-6 lg:pr-2  md:rounded-full  bg-white mt-16  pl-2  md:w-[676px] text-center mx-auto ">
            <input
              type="email"
              name=""
              id=""
              placeholder="Type your email here"
              className="text-[10px] lg:text-[20px] border-none outline-none w-full text-[#9B9B9B] "
            />
            <button className="bg-black text-white py-4 px-6 md:rounded-full font-semibold text-[10px] md:text-[20px] duration-200 hover:bg-white hover:text-black  md:ml-11">
              Subscribe
            </button>
          </div>
      </div>
      <main className="py-20 lg:py-28 px-1 lg:px-0 flex lg:items-center lg:justify-center  lg:text-center bg-white">
        <div className="flex flex-col    lg:items-stretch lg:justify-normal lg:text-left lg:flex-row gap-10 lg:gap-14 xl:gap-32">
          <div>
            <Image
              src={logo}
              className=" w-[250px] lg:w-[394px] h-[94px]"
            ></Image>
            <p className=" max-w-none lg:w-[437px] text-[#6c6c6c] text-[18px] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              pharetra condimentum.
            </p>
          </div>
          <div className=" ">
            <h1 className="text-[24px] text-[#000000] font-semibold mb-5 min-w-fit">
              Contact Information
            </h1>
            <p className="text-[18px] text-[#6c6c6c] font-medium flex gap-2 items-center mb-3">
              <Image src={icon1} className="w-[20px]"></Image>732 Despard
              St,Atlanta
            </p>
            <p className="text-[18px] text-[#6c6c6c] font-medium flex gap-2 items-center mb-3">
              <Image src={icon2} className="w-[20px]"></Image>+97 888 8888
            </p>
            <p className="text-[18px] text-[#6c6c6c] font-medium flex gap-2 items-center  ">
              <Image src={icon3} className="w-[20px]"></Image>info@traveller.com
            </p>
          </div>
          <div>
            <h1 className="text-[24px] text-[#000000] font-semibold mb-5 min-w-fit">
              Quick Link
            </h1>
            {navLinks.map((item) => {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[18px] text-[#6c6c6c] font-medium flex gap-2 items-center mb-3"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div>
            <h1 className="text-[24px] text-[#000000] font-semibold mb-5 min-w-fit">
              Follow Us
            </h1>
            <div className="flex gap-3  ">
              {socials.map((s) => {
                return <>{s.social}</>;
              })}
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full flex items-center justify-center bg-black py-5 lg:py-10">
        <h1 className="text-[14px] lg:text-[18px] text-[#DFDFDF] font-medium">
          Copyright © All rights reserved (Website Developed & Managed by
          creativechroma)
        </h1>
      </footer>
    </footer>
  );
}
