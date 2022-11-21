import React from "react";
import { FaCaretDown, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-100 px-6 lg:px-28 py-2">
      <nav className="bg-white py-2 z-[1] flex rounded-full items-center h-12 justify-between px-6">
        <div className="">
          <h1 className="">Clean UI</h1>
        </div>
        <ul className="space-x-10 uppercase font-[poppins] text-sm">
          <li className=" cursor-pointer">About</li>
          <li className="group relative cursor-pointer">
            <div className="inline-flex items-center space-x-1">
              <span className="">Work</span>
              <FaCaretDown />
            </div>
            <ul className="bg-white absolute border px-3 hidden group-hover:block">
              <li className="py-1">UI/UX Design</li>
              <li className="py-1">Web Development</li>
              <li className="py-1">App Development</li>
            </ul>
          </li>
          <li className="group relative cursor-pointer">
            <div className="inline-flex items-center space-x-1">
              <span className="">More</span>
              <FaCaretDown />
            </div>
            <ul className="bg-white absolute border px-2 hidden group-hover:block">
              <li className="py-1">Contact</li>
              <li className="py-1">FAQ</li>
              <li className="py-1">Newsletter</li>
            </ul>
          </li>
          <a
            href="http://wa.me/918957912038"
            target="_blank"
            className="bg-gradient-to-l from-orange-400 to-pink-500 rounded-full text-white px-4 py-2"
            rel="noopener noreferrer">
            <span className=" inline-flex items-center space-x-1">
              <span className="">Hire Me</span> <FaWhatsapp />
            </span>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
