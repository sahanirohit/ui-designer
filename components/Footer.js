import Link from "next/link";
import React from "react";
import { FaHeart, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const copyrightYear = new Date();
  return (
    <footer className="px-6 lg:px-0 bg-gray-100">
      <div className="grid max-w-7xl mx-auto grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 py-8">
        <div className="lg:col-span-2 col-span-2 sm:col-auto">
          <img src="/images/logo.png" alt="" className="w-56 object-contain" />
        </div>
        <div className="">
          <h1 className="uppercase text-xl font-semibold pb-4">Menu</h1>
          <ul className="flex-col flex space-y-3 font-[roboto-sans] font-semibold">
            <li className="">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="">
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="uppercase text-xl font-semibold pb-4">Services</h1>
          <ul className="flex-col flex space-y-3 font-[roboto-sans] font-semibold">
            <li className="">
              <Link href={"/services/web-design"}>UI/UX Design</Link>
            </li>
            <li className="">
              <Link href={"/services/web-development"}>Web Development</Link>
            </li>
            <li className="">
              <Link href={"/services/app-development"}>App Development</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-auto">
          <h1 className="uppercase text-xl font-semibold pb-4">Social Site</h1>
          <ul className="flex-col flex space-y-3 font-[roboto-sans] font-semibold">
            <li className="">
              <a
                href="https://www.linkedin.com/in/rohitsahani01/"
                target="_blank"
                className="flex items-center space-x-2"
                rel="noopener noreferrer">
                <FaLinkedinIn /> <span>LinkedIn</span>
              </a>
            </li>
            <li className="">
              <a
                href="http://wa.me/918957912038"
                target="_blank"
                className="flex items-center space-x-2"
                rel="noopener noreferrer">
                <FaWhatsapp />
                <span>Whatsapp</span>
              </a>
            </li>
            <li className="">
              <a
                href="http://instagram.com/rkhdigital"
                target="_blank"
                className="flex items-center space-x-2"
                rel="noopener noreferrer">
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto h-px bg-white"></div>
      <div className="py-8 w-full flex sm:flex-row flex-col gap-2 sm:gap-0 items-center justify-center">
        <p className="text-sm text-center">
          &copy; {copyrightYear.getFullYear()} All rights Reserved.
        </p>
        {"  "}
        <p className="inline-flex items-center">
          <span> Made with</span> <FaHeart className="mx-2 text-red-500" /> by
          <strong className="mx-2 underline">
            <Link href={"/"}>Rohit Sahani</Link>
          </strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
