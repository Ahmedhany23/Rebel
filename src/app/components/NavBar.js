"use client";
import logo from "@/app/assets/Home/logo.webp";
import search from "@/app/assets/Home/Vector.svg";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/pages/about" },
  { name: "Package", href: "/pages/package" },
  { name: "Blog", href: "/pages/blog" },
  { name: "Contact", href: "/pages/contact" },
];

export default function NavBar() {
  useEffect(() => {
    var lastScrollTop = 0;
    window.onscroll = () => {
      var scrollTop = window.scrollY || document.documentElementscrollTop;
      if (scrollTop > lastScrollTop) {
        sethide(true);
      } else {
        sethide(false);
      }
      lastScrollTop = scrollTop;
    };
  }, []);
  const [hide, sethide] = useState(false);
  const [open, setopen] = useState(false);
  const router = usePathname();
  return (
    <nav
      className={` justify-between lg:px-0 xl:px-16 flex  bg-[#120B0B] bg-opacity-[51%]  items-center ${
        hide ? "hidden" : "fixed"
      } duration-200 top-0 left-0 right-0  z-20`}
    >
      <Image
        src={logo}
        alt="logo"
        className="w-[220px] md:w-[357px] lg:w-[500px]"
        style={{objectFit:"cover"}}
        priority
      />
      <ul className="menu hidden lg:flex gap-6  xl:px-20 lg:pl-24 ">
        {navLinks.map((item) => {
          return (
            <div key={item.name} className="text-4xl">
              <Link
                key={item.name}
                href={item.href}
                className={
                  router === item.href ? "font-bold text-3xl" : "text-3xl"
                }
              >
                {item.name} {item.arrow}
              </Link>
            </div>
          );
        })}
        <Image src={search} alt="search-cion" className="text-2xl"></Image>
      </ul>

      <button
        className={`${
          open ? "hidden" : "block"
        } lg:hidden mr-1  text-4xl text-white duration-200`}
        onClick={() => {
          setopen(true);
        }}
      >
        <IoMdMenu />
      </button>

      <ul
        className={`menu sm:flex sm:flex-col lg:hidden gap-6 fixed duration-500 ${
          open ? "right-0" : "right-[-100%]"
        } top-0 bg-[#120B0B]  h-screen pt-6 bg-opacity-[51%]  xl:px-20 lg:pl-24  `}
      >
        <button
          className="flex justify-start px-2 text-4xl text-white   hover:text-blue-600 duration-300"
          onClick={() => setopen(false)}
        >
          <IoClose className="hover:animate-spin" />
        </button>
        <div className="link pr-20 pl-5  ">
          {navLinks.map((item) => {
            return (
              <div key={item.name}>
                <Link
                  key={item.name}
                  href={item.href}
                  className={
                    router === item.href ? "font-bold text-3xl" : "text-3xl"
                  }
                >
                  {item.name} {item.arrow}
                </Link>
              </div>
            );
          })}
        </div>
      </ul>
    </nav>
  );
}
