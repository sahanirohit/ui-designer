import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="px-6 lg:px-28 bg-orange-50 py-16 flex items-center justify-center">
      <div className="sm:w-[80%] min-h-[20rem] py-6 bg-white rounded-3xl shadow-lg px-6 md:px-20 flex flex-col items-center justify-center space-y-4">
        <h1 className="md:text-3xl sm:text-2xl font-[roboto-serif] text-xl text-center font-semibold">
          Got a project? Let's talk.
        </h1>
        <p className="font-serif text-center max-w-2xl">
          I’m available on selected freelance projects. My time (GMT +5:30)
          books quickly and I will get back to you within few hours. Thank you!
        </p>
        <div className="">
          <a
            href="http://wa.me/918957912038"
            target="_blank"
            rel="noopener noreferrer">
            <button className="flex items-center justify-center space-x-2 bg-gradient-to-bl hover:from-yellow-400 hover:to-red-600 from-green-400 to-blue-500 rounded-full text-white px-6 py-2">
              <span>Get in touch</span>
              <FaWhatsapp />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
