import React from "react";
import { FaHeart, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const copyrightYear = new Date();
  return (
    <footer className="px-6 lg:px-28 bg-red-100">
      <div className="flex py-8">
        <div className="flex-1">
          <h1 className=" font-[Smooch] text-4xl">Clean UI</h1>
        </div>
        <div className="basis-1/5">
          <h1 className="uppercase text-xl font-semibold pb-4">Menu</h1>
          <ul className="flex-col flex space-y-3">
            <li className="">About</li>
            <li className="">Newsletter</li>
            <li className="">FAQ</li>
            <li className="">Contact</li>
          </ul>
        </div>
        <div className="basis-1/5">
          <h1 className="uppercase text-xl font-semibold pb-4">Services</h1>
          <ul className="flex-col flex space-y-3">
            <li className="">UI/UX Design</li>
            <li className="">Web Development</li>
            <li className="">App Development</li>
          </ul>
        </div>
        <div className="basis-1/5">
          <h1 className="uppercase text-xl font-semibold pb-4">Social Site</h1>
          <ul className="flex-col flex space-y-3">
            <li className=" inline-flex items-center space-x-2">
              <FaLinkedinIn /> <span>LinkedIn</span>
            </li>
            <li className="inline-flex items-center space-x-2">
              <FaWhatsapp />
              <span>Web Development</span>
            </li>
            <li className="inline-flex items-center space-x-2">
              <FaInstagram />
              <span>App Development</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-px bg-white"></div>
      <div className="py-8 w-full flex items-center justify-center">
        <p className=" inline-flex items-center text-center">
          &copy; {copyrightYear.getFullYear()} All rights Reserved. Made with{" "}
          <FaHeart className="mx-2 text-red-500" /> by
          <strong className="mx-2 underline">Rohit Sahani</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
