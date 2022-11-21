import React from "react";
import { FaCaretDown, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <header className=" bg-gray-200 h-[4rem] font-[poppins] flex items-center px:6 lg:px-28">
      <nav className="bg-white flex w-full h-[3rem] justify-between rounded-full items-center px-6">
        <div className="">
          <h1 className="">Clean UI</h1>
        </div>
        <div className="">
          <ul className="text-sm cursor-pointer uppercase flex items-center space-x-8">
            <li className="">about</li>
            <li className="relative inline-flex cursor-pointer items-center space-x-1">
              <span className="">work</span>
              <FaCaretDown />
              <ul className="absolute inset-0 hidden">
                <li>ui/ux design</li>
                <li>web development</li>
                <li>app development</li>
              </ul>
            </li>
            <li className="relative hover:text-pink-500 cursor-pointer flex group items-center space-x-1">
              <span className="">more</span>
              <FaCaretDown />
              <ul className="absolute text-black inset-0 border-2 group-hover:flex hidden group-hover:flex-col group-hover:space-y-2 top-4 left-0 bg-white">
                <li className="hover:text-pink-500 w-full bg-white py-1.5">
                  Contact
                </li>
                <li className="hover:text-pink-500 bg-white py-1.5">FAQ</li>
                <li className="hover:text-pink-500 bg-white py-1.5">
                  Newsletter
                </li>
              </ul>
            </li>
            <a
              href="http://wa.me/918957912038"
              target="_blank"
              className="px-4 inline-flex items-center space-x-2 py-1.5 bg-black text-white rounded-full to-pink-600"
              rel="noopener noreferrer">
              <span className="">Hire Me</span>
              <FaWhatsapp />
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
