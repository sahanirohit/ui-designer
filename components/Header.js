import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaCaretDown, FaWhatsapp } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import logo from "/public/images/logo.png";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="bg-gray-100 py-2 px-6 lg:px-0">
      <nav className="bg-white shadow-md py-2 z-[1] max-w-7xl mx-auto flex rounded-full items-center h-12 justify-between px-6">
        <div className="flex justify-between z-50 items-center w-full md:w-auto">
          <Link href={"/"}>
            <div className="relative w-28">
              <Image src={logo} alt="logo" objectFit="contain" />
            </div>
          </Link>
          {navOpen ? (
            <GrClose
              onClick={() => setNavOpen(!navOpen)}
              className="md:hidden cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setNavOpen(!navOpen)}
              className="md:hidden cursor-pointer"
            />
          )}
        </div>
        {/* Mobile Nav */}
        <div
          className={`absolute top-0 w-full h-full bg-white duration-300 transition-all right-0 ${
            navOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
          <ul className="flex flex-col inset-0 py-20 px-12 space-y-3 md:hidden uppercase font-[poppins] text-sm">
            <li
              onClick={() => setNavOpen(!navOpen)}
              className="cursor-pointer hover:bg-clip-text hover:bg-gradient-to-tl from-green-400 hover:text-transparent hover:to-blue-500">
              <Link href={"/"}>Home</Link>
            </li>
            <li
              onClick={() => setNavOpen(!navOpen)}
              className=" cursor-pointer">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="group relative cursor-pointer">
              <div className="flex items-center space-x-1">
                <span className="">Services</span>
                <FaCaretDown />
              </div>
              <ul className="bg-white absolute w-44 border z-30 px-3 hidden group-hover:block">
                <li onClick={() => setNavOpen(!navOpen)} className="py-1">
                  <Link href={"/services/web-design"}>UI/UX Design</Link>
                </li>
                <li onClick={() => setNavOpen(!navOpen)} className="py-1">
                  <Link href={"/services/web-development"}>
                    Web Development
                  </Link>
                </li>
                <li onClick={() => setNavOpen(!navOpen)} className="py-1">
                  <Link href={"/services/app-development"}>
                    App Development
                  </Link>
                </li>
              </ul>
            </li>
            <div className="">
              <a
                href="http://wa.me/918957912038"
                target="_blank"
                className="bg-gradient-to-l from-orange-400 to-pink-500 text-white px-4 py-2"
                rel="noopener noreferrer">
                <span className=" inline-flex items-center space-x-1">
                  <span className="">Contact</span> <FaWhatsapp />
                </span>
              </a>
            </div>
          </ul>
        </div>
        {/* Desktop Nav */}
        <ul className="space-x-10 hidden md:block uppercase font-[poppins] text-sm">
          <li className="cursor-pointer hover:bg-clip-text hover:bg-gradient-to-tl from-green-400 hover:text-transparent hover:to-blue-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer hover:bg-clip-text hover:bg-gradient-to-tl from-green-400 hover:text-transparent hover:to-blue-500">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="group relative cursor-pointer hover:bg-clip-text hover:bg-gradient-to-tl from-green-400 hover:text-transparent hover:to-blue-500">
            <div className="inline-flex items-center space-x-1">
              <span className="">Services</span>
              <FaCaretDown />
            </div>
            <ul className="bg-white text-black absolute w-44 border px-3 hidden group-hover:block">
              <li className="py-1 hover:bg-clip-text hover:bg-gradient-to-tl from-green-400 hover:text-transparent hover:to-blue-500">
                <Link href={"/services/web-design"}>UI/UX Design</Link>
              </li>
              <li className="py-1 hover:bg-clip-text hover:bg-gradient-to-tl from-green-400 hover:text-transparent hover:to-blue-500">
                <Link href={"/services/web-development"}>Web Development</Link>
              </li>
              <li className="py-1 hover:bg-clip-text hover:bg-gradient-to-tl from-green-400 hover:text-transparent hover:to-blue-500">
                <Link href={"/services/app-development"}>App Development</Link>
              </li>
            </ul>
          </li>

          <a
            href="http://wa.me/918957912038"
            target="_blank"
            className="bg-gradient-to-bl font-[monsterret] hover:from-yellow-400 hover:to-red-600 from-green-400 to-blue-500 rounded-full text-white px-4 py-2"
            rel="noopener noreferrer">
            <span className=" inline-flex items-center space-x-1">
              <span className="">Contact</span> <FaWhatsapp />
            </span>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
